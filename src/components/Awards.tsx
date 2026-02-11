"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";

const awardsData = [
  {
    year: "2023",
    awards: [
      {
        ceremony: "제59회 백상예술대상",
        award: "여자 최우수연기상 (TV 부문)",
        work: "환혼",
      },
      {
        ceremony: "2023 Asia Artist Awards",
        award: "베스트 아티스트상",
        work: "",
      },
    ],
  },
  {
    year: "2022",
    awards: [
      {
        ceremony: "KBS 연기대상",
        award: "여자 신인상",
        work: "학교 2021",
      },
      {
        ceremony: "제2회 청룡시리즈어워즈",
        award: "여자 신인상",
        work: "환혼",
      },
    ],
  },
  {
    year: "2021",
    awards: [
      {
        ceremony: "2021 Asia Artist Awards",
        award: "신인상 (배우 부문)",
        work: "",
      },
    ],
  },
];

export default function Awards() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  // Slightly lower threshold (0.1) for better trigger timing on list items
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="awards" className="relative py-32 px-6">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(201,168,124,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Section Title */}
        <div
          ref={titleRef}
          className={`mb-20 text-center scroll-hidden ${titleVisible ? "scroll-visible" : ""}`}
        >
          <span className="mb-4 inline-block text-xs tracking-[0.4em] text-[#c9a87c]/60 uppercase">
            Awards
          </span>
          <h2 className="text-4xl font-light tracking-tight sm:text-5xl">
            <span className="gradient-text">수상 내역</span>
          </h2>
        </div>

        {/* Awards List */}
        <div ref={listRef} className="space-y-12">
          {awardsData.map((yearGroup, groupIndex) => (
            <div
              key={yearGroup.year}
              className={`scroll-hidden ${listVisible ? "scroll-visible" : ""}`}
              style={{ transitionDelay: `${groupIndex * 200}ms` }}
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="gradient-text text-2xl font-light">
                  {yearGroup.year}
                </span>
                <span className="h-px flex-1 bg-[#c9a87c]/10" />
              </div>

              <div className="space-y-4 pl-4">
                {yearGroup.awards.map((award, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 rounded-lg border border-transparent p-4 transition-all duration-300 hover:border-[#c9a87c]/10 hover:bg-[#141414]/50 hover:-translate-y-0.5"
                  >
                    {/* Trophy icon */}
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c9a87c]/10 transition-all duration-300 group-hover:bg-[#c9a87c]/20 group-hover:shadow-md group-hover:shadow-[#c9a87c]/10">
                      <svg
                        className="h-5 w-5 text-[#c9a87c]/60 transition-colors group-hover:text-[#c9a87c]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.896m5.25-6.624V2.721"
                        />
                      </svg>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-[#f5f0eb]/90">
                        {award.ceremony}
                      </h3>
                      <p className="mt-1 text-sm text-[#c9a87c]/80">
                        {award.award}
                      </p>
                      {award.work && (
                        <p className="mt-1 text-xs text-[#f5f0eb]/40">
                          작품: {award.work}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
