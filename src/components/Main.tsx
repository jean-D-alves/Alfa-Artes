export default function Main() {
  return (
    <section
      id="main"
      className="flex flex-col justify-between items-center m-8 gap-12 lg:gap-96 lg:h-screen lg:flex-row"
    >
      <div className="w-full lg:w-3xs flex flex-col gap-4">
        <p className="font-display text-sm tracking-widest uppercase text-red">
          Costura sob medida
        </p>
        <p className="text-5xl sm:text-7xl font-display leading-tight">
          Cada peça, uma <em className="text-red">obra</em>
          <br /> feita pra você.
        </p>
        <p className="text-foreground/60 leading-relaxed">
          Roupas sob medida, concertos, bikinis e trajes de ciclismo feitos com
          precisão e carinho em cada ponto.
        </p>
        <div className="flex gap-3">
          <button className="bg-red text-white px-6 py-3 text-sm font-medium">
            <a href="#services"> Ver serviços</a>
          </button>
          <button className="border border-white/20 text-foreground/60 px-6 py-3 text-sm">
            <a href="#portfolio"> Ver portfólio</a>
          </button>
        </div>
      </div>
      <div className="relative flex items-center justify-center bg-[#1a0a05] overflow-hidden w-screen -mr-8 lg:mr-0 lg:flex-1 h-96 sm:h-[32rem] lg:h-[500px] rounded-xl">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
          repeating-linear-gradient(45deg, #C8371A 0px, #C8371A 1px, transparent 1px, transparent 20px),
          repeating-linear-gradient(-45deg, #E8B020 0px, #E8B020 1px, transparent 1px, transparent 20px)
        `,
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div
            className="flex flex-col items-center justify-center w-40 h-40 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full"
            style={{
              border: "1.5px solid #E8B020",
              background: "rgba(232,176,32,0.06)",
            }}
          >
            <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-gold">
              +500
            </span>
            <span className="text-xs tracking-widest text-white/60 uppercase mt-1">
              Peças entregues
            </span>
          </div>
          <p className="font-display italic text-sm text-white/40">
            By Bosco &amp; Gilda
          </p>
        </div>
      </div>
    </section>
  );
}
