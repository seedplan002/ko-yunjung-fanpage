const filmographyData = [
  {
    year: "2024",
    works: [
      {
        title: "선재 업고 튀어",
        type: "드라마",
        role: "특별출연",
        network: "tvN",
      },
    ],
  },
  {
    year: "2023",
    works: [
      {
        title: "무빙",
        type: "드라마",
        role: "이강훈 역 (주연)",
        network: "Disney+",
      },
      {
        title: "비질란테",
        type: "드라마",
        role: "조헌 역 (주연)",
        network: "Disney+",
      },
    ],
  },
  {
    year: "2022",
    works: [
      {
        title: "환혼",
        type: "드라마",
        role: "낙수 / 진부연 역 (주연)",
        network: "tvN",
      },
      {
        title: "환혼: 빛과 그림자",
        type: "드라마",
        role: "진부연 역 (주연)",
        network: "tvN",
      },
    ],
  },
  {
    year: "2021",
    works: [
      {
        title: "학교 2021",
        type: "드라마",
        role: "진지원 역 (주연)",
        network: "KBS2",
      },
      {
        title: "Sweet Home",
        type: "드라마",
        role: "박유리 역",
        network: "Netflix",
      },
    ],
  },
  {
    year: "2020",
    works: [
      {
        title: "녹두전",
        type: "드라마",
        role: "금이 역",
        network: "KBS2",
      },
    ],
  },
];

export default function Filmography() {
  return (
    <section id="filmography" className="relative py-32 px-6">
      {/* Background accent */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(201,168,124,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Section Title */}
        <div className="mb-20 text-center">
          <span className="mb-4 inline-block text-xs tracking-[0.4em] text-[#c9a87c]/60 uppercase">
            Filmography
          </span>
          <h2 className="text-4xl font-light tracking-tight sm:text-5xl">
            <span className="gradient-text">필모그래피</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a87c]/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

          {filmographyData.map((yearGroup, groupIndex) => (
            <div key={yearGroup.year} className="relative mb-16 last:mb-0">
              {/* Year badge */}
              <div className="relative mb-8 flex items-center md:justify-center">
                <div className="glass rounded-full px-6 py-2 ml-6 md:ml-0">
                  <span className="gradient-text text-sm font-medium tracking-widest">
                    {yearGroup.year}
                  </span>
                </div>
              </div>

              {/* Works */}
              <div className="space-y-4">
                {yearGroup.works.map((work, workIndex) => {
                  const isEven = (groupIndex + workIndex) % 2 === 0;
                  return (
                    <div
                      key={work.title}
                      className={`flex ${
                        isEven ? "md:justify-start" : "md:justify-end"
                      }`}
                    >
                      <div
                        className={`ml-6 w-full md:ml-0 md:w-[45%] ${
                          isEven ? "md:pr-8" : "md:pl-8"
                        }`}
                      >
                        <div className="group rounded-xl border border-[#c9a87c]/10 bg-[#141414]/80 p-6 transition-all duration-500 hover:border-[#c9a87c]/30 hover:bg-[#141414]">
                          <div className="mb-3 flex items-center gap-3">
                            <span className="rounded-full bg-[#c9a87c]/10 px-3 py-1 text-xs text-[#c9a87c]/80">
                              {work.type}
                            </span>
                            <span className="text-xs text-[#f5f0eb]/30">
                              {work.network}
                            </span>
                          </div>
                          <h3 className="mb-2 text-lg font-medium text-[#f5f0eb]/90 transition-colors group-hover:text-[#c9a87c]">
                            {work.title}
                          </h3>
                          <p className="text-sm text-[#f5f0eb]/50 font-light">
                            {work.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
