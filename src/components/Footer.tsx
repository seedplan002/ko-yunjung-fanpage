export default function Footer() {
  return (
    <footer className="relative border-t border-[#c9a87c]/10 py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h3 className="gradient-text mb-4 text-2xl font-light tracking-wider">
            고윤정
          </h3>
          <p className="text-xs tracking-[0.3em] text-[#f5f0eb]/30 uppercase">
            Ko Yun-jung Fan Page
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-8">
          <a
            href="#home"
            className="text-xs tracking-widest text-[#f5f0eb]/40 uppercase transition-colors hover:text-[#c9a87c]"
          >
            홈
          </a>
          <a
            href="#about"
            className="text-xs tracking-widest text-[#f5f0eb]/40 uppercase transition-colors hover:text-[#c9a87c]"
          >
            프로필
          </a>
          <a
            href="#filmography"
            className="text-xs tracking-widest text-[#f5f0eb]/40 uppercase transition-colors hover:text-[#c9a87c]"
          >
            필모그래피
          </a>
          <a
            href="#gallery"
            className="text-xs tracking-widest text-[#f5f0eb]/40 uppercase transition-colors hover:text-[#c9a87c]"
          >
            갤러리
          </a>
          <a
            href="#awards"
            className="text-xs tracking-widest text-[#f5f0eb]/40 uppercase transition-colors hover:text-[#c9a87c]"
          >
            수상내역
          </a>
        </div>

        {/* Divider */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-[#c9a87c]/10" />
          <svg
            className="h-4 w-4 text-[#c9a87c]/20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <span className="h-px w-16 bg-[#c9a87c]/10" />
        </div>

        {/* Bottom */}
        <div className="text-center">
          <p className="text-xs text-[#f5f0eb]/20">
            This is a fan-made website. Not affiliated with Ko Yun-jung or her
            agency.
          </p>
          <p className="mt-2 text-xs text-[#f5f0eb]/15">
            &copy; 2024 Ko Yun-jung Fan Page. Made with love by fans.
          </p>
        </div>
      </div>
    </footer>
  );
}
