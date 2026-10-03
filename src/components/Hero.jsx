import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FizzVisual from "./FizzVisual";
import Stats from "./Stats";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const sectionRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro
        .from(".top-bar", {
          opacity: 0,
          y: -20,
          duration: 0.7,
        })
        .from(
          ".hero-letter",
          {
            opacity: 0,
            y: 60,
            rotateX: -70,
            duration: 0.9,
            stagger: 0.035,
          },
          "-=0.25"
        )
        .from(
          ".hero-subtitle",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".stat-card",
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.35"
        )
        .from(
          ".scroll-indicator",
          {
            opacity: 0,
            y: 15,
            duration: 0.6,
          },
          "-=0.3"
        );

      /* Main scroll-driven product animation */
      gsap.to(visualRef.current, {
        x: "34vw",
        y: "40vh",
        scale: 0.58,
        rotation: 25,
        ease: "none",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      /* Headline parallax */
      gsap.to(".hero-title", {
        y: "-8vh",
        scale: 0.94,
        ease: "none",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      /* Statistics movement */
      gsap.to(".stats-wrapper", {
        y: "-5vh",
        ease: "none",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      /* Background glow */
      gsap.to(".hero-glow", {
        scale: 1.5,
        opacity: 0.65,
        ease: "none",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const title = "WELCOME ITZ FIZZ";

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[680px] overflow-hidden bg-[#080808] text-white"
    >
      {/* Ambient glow */}
      <div
        className="hero-glow pointer-events-none absolute left-1/2 top-1/2
        h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2
        rounded-full bg-white/[0.035] blur-[100px]"
      />

      {/* Top navigation */}
      <header
        className="top-bar absolute left-0 right-0 top-0 z-50
        flex items-center justify-between
        px-6 py-5 md:px-12 md:py-6"
      >
        <span
          className="text-[8px] uppercase
          tracking-[0.42em] text-white/45 md:text-[9px]"
        >
          Scroll Experience
        </span>

        <span
          className="text-[8px] uppercase
          tracking-[0.42em] text-white/45 md:text-[9px]"
        >
          2026
        </span>
      </header>

      {/* Main content */}
      <div className="relative z-10 h-full px-6 md:px-12">

        {/* Headline */}
        <div
          className="hero-title absolute left-1/2
          top-[12vh] z-30 w-full
          -translate-x-1/2 text-center"
        >
          <h1
            className="whitespace-nowrap
            text-[clamp(2.5rem,7vw,8rem)]
            font-semibold uppercase
            leading-[0.86]
            tracking-[0.08em]"
          >
            {title.split("").map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className="hero-letter inline-block whitespace-pre"
              >
                {letter}
              </span>
            ))}
          </h1>

          <p
            className="hero-subtitle mx-auto mt-5
            max-w-[400px] text-center
            text-[8px] uppercase
            leading-[1.8] tracking-[0.28em]
            text-white/35 md:text-[9px]"
          >
            Designed around movement,
            interaction and smooth visual storytelling.
          </p>
        </div>

        {/* Center visual */}
        <div
          ref={visualRef}
          className="pointer-events-none absolute
          left-1/2 top-[53%] z-20
          -translate-x-1/2 -translate-y-1/2"
        >
          <FizzVisual />
        </div>

        {/* Statistics */}
        <div
          className="stats-wrapper absolute
          bottom-[10vh] left-0 right-0
          z-30 px-6 md:px-12"
        >
          <Stats />
        </div>

        {/* Scroll indicator */}
        <div
          className="scroll-indicator absolute
          bottom-4 left-1/2 z-50
          flex -translate-x-1/2
          flex-col items-center"
        >
          <span
            className="text-[7px] uppercase
            tracking-[0.6em] text-white/35"
          >
            Scroll
          </span>

          <div
            className="mt-3 h-7 w-px
            bg-gradient-to-b
            from-white/50 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;