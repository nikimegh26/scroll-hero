import Hero from "./components/Hero";

function App() {
  return (
    <main className="bg-[#080808]">

      <Hero />

      {/* SECOND SECTION */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f1f1ed] px-6 text-[#080808]">

        <div className="absolute left-1/2 top-1/2 h-[40vw] w-[40vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/[0.035] blur-[100px]" />

        <div className="relative z-10 text-center">

          <p className="mb-7 text-[9px] uppercase tracking-[0.45em] text-black/40">
            Scroll interaction
          </p>

          <h2 className="text-[clamp(3.5rem,10vw,10rem)] font-semibold uppercase leading-[0.8] tracking-[-0.05em]">
            KEEP
            <br />
            GOING
          </h2>

          <p className="mx-auto mt-8 max-w-md text-xs leading-7 text-black/45">
            The visual movement is connected directly to the scroll
            position using GSAP ScrollTrigger and smooth scrubbing.
          </p>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-[#080808] px-6 py-10 text-center text-[9px] uppercase tracking-[0.35em] text-white/30">
        Built with React · Tailwind · GSAP
      </footer>

    </main>
  );
}

export default App;