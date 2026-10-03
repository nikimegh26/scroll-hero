const stats = [
  {
    number: "58%",
    text: "Increase in pick up point use",
  },
  {
    number: "23%",
    text: "Decrease in customer phone calls",
  },
  {
    number: "27%",
    text: "Increase in customer engagement",
  },
  {
    number: "40%",
    text: "Decrease in delivery friction",
  },
];

function Stats() {
  return (
    <div
      className="grid grid-cols-2
      gap-x-8 gap-y-6
      md:grid-cols-4 md:gap-x-12"
    >
      {stats.map((stat, index) => (
        <div
          key={stat.number}
          className="stat-card group"
        >
          <div
            className="flex items-start
            border-l border-white/20
            pl-3 md:pl-4"
          >
            <div>
              <div
                className="text-[clamp(2.1rem,3.8vw,4rem)]
                font-semibold leading-none
                tracking-[-0.06em]"
              >
                {stat.number}
              </div>

              <p
                className="mt-2 max-w-[150px]
                text-[7px] uppercase
                leading-[1.65]
                tracking-[0.18em]
                text-white/40
                md:text-[8px]"
              >
                {stat.text}
              </p>
            </div>

            <span
              className="ml-2 mt-1 text-[6px]
              tracking-[0.2em] text-white/20"
            >
              0{index + 1}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stats;