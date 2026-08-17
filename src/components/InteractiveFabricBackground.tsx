"use client";

import { useEffect, useRef } from "react";

const SPACING = 60;
const INFLUENCE_RADIUS = 100;
const MAX_DISPLACEMENT = 18;
const SPRING = 0.1;
const DAMPING = 0.85;

const DARK_LINE_COLOR = "#e8af2062";   
const LIGHT_LINE_COLOR = "#c9371a";  

interface Node {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function InteractiveFabricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const nodesRef = useRef<Node[]>([]);
  const lineColorRef = useRef(DARK_LINE_COLOR);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

   
    function updateLineColor() {
      const isDark = document.documentElement.classList.contains("dark");
      lineColorRef.current = isDark ? DARK_LINE_COLOR : LIGHT_LINE_COLOR;
    }
    updateLineColor();

    const observer = new MutationObserver(updateLineColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    let raf: number;
    let width = 0;
    let height = 0;
    let grid = { cols: 0, rows: 0 };

    function buildGrid() {
      const cols = Math.ceil(width / SPACING) + 2;
      const rows = Math.ceil(height / SPACING) + 2;
      const nodes: Node[] = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * SPACING;
          const y = r * SPACING;
          nodes.push({ baseX: x, baseY: y, x, y, vx: 0, vy: 0 });
        }
      }
      nodesRef.current = nodes;
      return { cols, rows };
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas!.clientWidth;
      height = canvas!.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      grid = buildGrid();
    }

    function step() {
      const nodes = nodesRef.current;
      const { x: mx, y: my } = mouseRef.current;

      for (const n of nodes) {
        const dx = n.baseX - mx;
        const dy = n.baseY - my;
        const dist = Math.hypot(dx, dy);

        if (dist < INFLUENCE_RADIUS) {
          const force = (1 - dist / INFLUENCE_RADIUS) * MAX_DISPLACEMENT;
          const angle = Math.atan2(dy, dx);
          n.vx += Math.cos(angle) * force * 0.15;
          n.vy += Math.sin(angle) * force * 0.15;
        }

        n.vx += (n.baseX - n.x) * SPRING;
        n.vy += (n.baseY - n.y) * SPRING;
        n.vx *= DAMPING;
        n.vy *= DAMPING;
        n.x += n.vx;
        n.y += n.vy;
      }

      ctx!.clearRect(0, 0, width, height);
      ctx!.strokeStyle = lineColorRef.current; 
      ctx!.lineWidth = 1;

      const { cols, rows } = grid;
      for (let r = 0; r < rows - 1; r++) {
        for (let c = 0; c < cols - 1; c++) {
          const i = r * cols + c;
          const a = nodes[i];
          const b = nodes[i + 1];
          const d = nodes[i + cols];
          const e = nodes[i + cols + 1];
          if (!a || !b || !d || !e) continue;

          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(e.x, e.y);
          ctx!.stroke();

          ctx!.beginPath();
          ctx!.moveTo(b.x, b.y);
          ctx!.lineTo(d.x, d.y);
          ctx!.stroke();
        }
      }

      raf = requestAnimationFrame(step);
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    function handleMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 };
    }

    resize();
    window.addEventListener("resize", resize);

    if (!isTouchDevice && !prefersReducedMotion) {
      window.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);
      raf = requestAnimationFrame(step);
    } else {
      step();
    }

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute opacity-30 inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}