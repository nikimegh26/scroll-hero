function FizzVisual() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Atmospheric glow */}
      <div
        className="absolute h-[250px] w-[250px]
        rounded-full bg-white/[0.06]
        blur-[75px] md:h-[320px] md:w-[320px]"
      />

      {/* Ground shadow */}
      <div
        className="absolute bottom-[-28px]
        h-12 w-40 rounded-full
        bg-black/80 blur-2xl"
      />

      {/* Can */}
      <div className="fizz-product">

        <div className="fizz-can">

          {/* Metallic top */}
          <div
            className="absolute left-1/2 top-0
            h-7 w-[88%]
            -translate-x-1/2
            rounded-[50%]
            border border-white/30
            bg-gradient-to-b
            from-[#f5f5f5]
            via-[#858585]
            to-[#303030]"
          />

          {/* Brand */}
          <div className="fizz-brand">
            FIZZ
          </div>

          {/* Center line */}
          <div className="fizz-line" />

          {/* Bubbles */}
          <div className="fizz-bubble one" />
          <div className="fizz-bubble two" />
          <div className="fizz-bubble three" />

          {/* Small product label */}
          <div
            className="absolute bottom-11
            left-0 right-0 text-center"
          >
            <span
              className="text-[6px] uppercase
              tracking-[0.45em]
              text-white/30"
            >
              Sparkling / Original
            </span>
          </div>

          {/* Metallic bottom */}
          <div
            className="absolute bottom-0
            left-1/2 h-6 w-[88%]
            -translate-x-1/2
            rounded-[50%]
            bg-gradient-to-b
            from-[#707070] to-[#151515]"
          />
        </div>
      </div>
    </div>
  );
}

export default FizzVisual;