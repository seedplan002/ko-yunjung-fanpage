export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(201,168,124,0.15) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 80%, rgba(201,168,124,0.08) 0%, transparent 50%)",
          }}
        />
        {/* Decorative circles */}
        <div className="animate-float absolute top-1/4 left-1/4 h-64 w-64 rounded-full border border-[#c9a87c]/10" />
        <div
          className="animate-float absolute right-1/4 bottom-1/3 h-48 w-48 rounded-full border border-[#c9a87c]/5"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="animate-float absolute top-1/3 right-1/3 h-32 w-32 rounded-full border border-[#c9a87c]/10"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div className="animate-fade-in mb-6">
          <span className="inline-block text-xs tracking-[0.4em] text-[#c9a87c]/80 uppercase">
            Korean Actress
          </span>
        </div>

        <h1
          className="animate-fade-in-up mb-4 text-6xl font-light tracking-tight sm:text-8xl md:text-9xl"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="gradient-text font-extralight">고윤정</span>
        </h1>

        <p
          className="animate-fade-in-up mb-2 text-lg font-light tracking-[0.3em] text-[#f5f0eb]/40 sm:text-xl"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          Ko Yun-jung
        </p>

        <div
          className="animate-fade-in-up mt-8 flex items-center justify-center gap-4"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          <span className="h-px w-12 bg-[#c9a87c]/30" />
          <span className="text-xs tracking-[0.3em] text-[#c9a87c]/60">
            Since 2002
          </span>
          <span className="h-px w-12 bg-[#c9a87c]/30" />
        </div>

        <div
          className="animate-fade-in-up mt-12"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-3 text-sm tracking-widest text-[#c9a87c]/70 uppercase transition-colors hover:text-[#c9a87c]"
          >
            <span>Explore</span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-y-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
