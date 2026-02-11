"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";

const galleryItems = [
  {
    title: "환혼",
    subtitle: "진부연 역",
    year: "2022",
    gradient: "from-[#2a1f15] to-[#1a1510]",
  },
  {
    title: "무빙",
    subtitle: "이강훈 역",
    year: "2023",
    gradient: "from-[#151a2a] to-[#10151a]",
  },
  {
    title: "학교 2021",
    subtitle: "진지원 역",
    year: "2021",
    gradient: "from-[#1a2a1f] to-[#101a15]",
  },
  {
    title: "비질란테",
    subtitle: "조헌 역",
    year: "2023",
    gradient: "from-[#2a151f] to-[#1a1015]",
  },
  {
    title: "환혼: 빛과 그림자",
    subtitle: "진부연 역",
    year: "2022",
    gradient: "from-[#1f1a2a] to-[#15101a]",
  },
  {
    title: "녹두전",
    subtitle: "금이 역 (데뷔작)",
    year: "2020",
    gradient: "from-[#2a2a1f] to-[#1a1a10]",
  },
];

export default function Gallery() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  // Slightly lower threshold (0.1) for grid to trigger animation earlier
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="gallery" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div
          ref={titleRef}
          className={`mb-20 text-center scroll-hidden ${titleVisible ? "scroll-visible" : ""}`}
        >
          <span className="mb-4 inline-block text-xs tracking-[0.4em] text-[#c9a87c]/60 uppercase">
            Gallery
          </span>
          <h2 className="text-4xl font-light tracking-tight sm:text-5xl">
            <span className="gradient-text">작품 갤러리</span>
          </h2>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative h-80 cursor-pointer overflow-hidden rounded-xl scroll-hidden-scale ${gridVisible ? "scroll-visible-scale" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 group-hover:scale-110`}
              />

              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, rgba(201,168,124,0.3) 1px, transparent 0)",
                  backgroundSize: "30px 30px",
                }}
              />

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#c9a87c]/20 transition-all duration-500 group-hover:scale-110 group-hover:border-[#c9a87c]/40 group-hover:shadow-lg group-hover:shadow-[#c9a87c]/10">
                  <svg
                    className="h-8 w-8 text-[#c9a87c]/40 transition-colors group-hover:text-[#c9a87c]/70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125-.504-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125m1.5 3.75c-.621 0-1.125-.504-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125"
                    />
                  </svg>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="mb-2 block text-xs text-[#c9a87c]/80">
                  {item.year}
                </span>
                <h3 className="text-lg font-medium text-[#f5f0eb]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-[#f5f0eb]/60">{item.subtitle}</p>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-4 right-4 h-8 w-8 border-t border-r border-[#c9a87c]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-[#c9a87c]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
