"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";

interface CarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  width?: number | string;
  aspectRatio?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

export function Carousel({
  images,
  width = "100%",
  aspectRatio = "1/1",
  autoPlay = false,
  autoPlayInterval = 3000,
  showDots = true,
  showArrows = true,
  className = "",
}: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = images.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + total) % total);
    },
    [total]
  );

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  // Auto play
  useEffect(() => {
    if (!autoPlay) return;
    autoPlayRef.current = setInterval(next, autoPlayInterval);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [autoPlay, autoPlayInterval, next]);

  // Keyboard navigation
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prev, next]);

  // Touch / drag
  function handlePointerDown(e: React.PointerEvent) {
    dragStartX.current = e.clientX;
    setIsDragging(true);
  }

  function handlePointerUp(e: React.PointerEvent) {
    if (!isDragging || dragStartX.current === null) return;
    const diff = dragStartX.current - e.clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    setIsDragging(false);
    dragStartX.current = null;
  }

  if (total === 0) return null;

  return (
    <div
      className={`carousel-root ${className}`}
      style={{ width, position: "relative" }}
    >
      {/* Track */}
      <div
        className="carousel-track"
        style={{
          position: "relative",
          width: "100%",
          aspectRatio,
          overflow: "hidden",
          borderRadius: 12,
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
          background: "#0a0a0a",
        }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={() => setIsDragging(false)}
      >
        {images.map((img, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              opacity: i === current ? 1 : 0,
              transition: "opacity 0.45s ease",
              pointerEvents: i === current ? "auto" : "none",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
              draggable={false}
              priority={i === 0}
            />
          </div>
        ))}

        {/* Gradient overlay at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Arrows */}
        {showArrows && total > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Imagem anterior"
              style={arrowStyle("left")}
            >
              <svg
                style={{ width: "clamp(12px, 2.5%, 20px)", height: "clamp(12px, 2.5%, 20px)" }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Próxima imagem"
              style={arrowStyle("right")}
            >
              <svg
                style={{ width: "clamp(12px, 2.5%, 20px)", height: "clamp(12px, 2.5%, 20px)" }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </>
        )}

        {/* Counter */}
        <span
          style={{
            position: "absolute",
            top: 14,
            right: 16,
            background: "rgba(0,0,0,0.45)",
            color: "#fff",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.04em",
            padding: "3px 10px",
            borderRadius: 99,
            backdropFilter: "blur(6px)",
            pointerEvents: "none",
          }}
        >
          {current + 1} / {total}
        </span>
      </div>

      {/* Dots */}
      {showDots && total > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginTop: 14,
          }}
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir para imagem ${i + 1}`}
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                borderRadius: 99,
                border: "none",
                padding: 0,
                cursor: "pointer",
                background: i === current ? "#3b82f6" : "#d1d5db",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function arrowStyle(side: "left" | "right"): React.CSSProperties {
  return {
    position: "absolute",
    top: "50%",
    [side]: "3%",
    transform: "translateY(-50%)",
    background: "rgba(255,255,255,0.18)",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(255,255,255,0.25)",
    color: "#fff",
    borderRadius: 99,
    width: "clamp(28px, 8%, 48px)",
    height: "clamp(28px, 8%, 48px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 10,
    transition: "background 0.2s",
  };
}