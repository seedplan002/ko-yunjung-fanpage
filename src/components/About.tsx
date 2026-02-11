"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function About() {
  const profileInfo = [
    { label: "본명", value: "고윤정 (Ko Yun-jung)" },
    { label: "생년월일", value: "2002년 4월 22일" },
    { label: "출생지", value: "대한민국 서울특별시" },
    { label: "신체", value: "170cm" },
    { label: "학력", value: "서울공연예술고등학교" },
    { label: "소속사", value: "매니지먼트 숲" },
    { label: "데뷔", value: "2020년 드라마 '녹두전'" },
  ];

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: portraitRef, isVisible: portraitVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <div
          ref={titleRef}
          className={`mb-20 text-center scroll-hidden ${titleVisible ? "scroll-visible" : ""}`}
        >
          <span className="mb-4 inline-block text-xs tracking-[0.4em] text-[#c9a87c]/60 uppercase">
            Profile
          </span>
          <h2 className="text-4xl font-light tracking-tight sm:text-5xl">
            <span className="gradient-text">프로필</span>
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Portrait Placeholder */}
          <div
            ref={portraitRef}
            className={`relative flex items-center justify-center scroll-hidden-left ${portraitVisible ? "scroll-visible-x" : ""}`}
          >
            <div className="relative h-[500px] w-full max-w-[380px] overflow-hidden rounded-2xl mx-auto">
              {/* Elegant gradient placeholder */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, #1a1510 0%, #2a1f15 30%, #1a1510 60%, #0f0d0a 100%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="mb-6 h-32 w-32 rounded-full border-2 border-[#c9a87c]/20 flex items-center justify-center animate-pulse-glow">
                  <svg
                    className="h-16 w-16 text-[#c9a87c]/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <p className="text-sm tracking-widest text-[#c9a87c]/40 uppercase">
                  고윤정
                </p>
                <p className="mt-1 text-xs text-[#c9a87c]/25">Ko Yun-jung</p>
              </div>
              {/* Decorative border */}
              <div className="absolute inset-2 rounded-xl border border-[#c9a87c]/10" />
            </div>
          </div>

          {/* Info */}
          <div
            ref={infoRef}
            className={`flex flex-col justify-center scroll-hidden-right ${infoVisible ? "scroll-visible-x" : ""}`}
          >
            <p className="mb-10 text-base leading-8 text-[#f5f0eb]/60 font-light">
              고윤정은 대한민국의 배우로, 뛰어난 미모와 탄탄한 연기력으로 주목받고
              있습니다. 2020년 드라마 &apos;녹두전&apos;으로 데뷔한 이후,
              &apos;환혼&apos;, &apos;무빙&apos; 등 다양한 작품에서 인상 깊은
              연기를 선보이며 대한민국을 대표하는 차세대 배우로 자리매김했습니다.
              자연스러운 연기와 독보적인 존재감으로 국내외 팬들의 많은 사랑을 받고
              있습니다.
            </p>

            <div className="space-y-4">
              {profileInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center border-b border-[#c9a87c]/10 pb-4 transition-all duration-300 hover:pl-2 hover:border-[#c9a87c]/30"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <span className="w-24 shrink-0 text-xs tracking-widest text-[#c9a87c]/60 uppercase">
                    {item.label}
                  </span>
                  <span className="text-sm text-[#f5f0eb]/80 font-light">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
