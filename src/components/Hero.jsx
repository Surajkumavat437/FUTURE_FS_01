import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-28 bg-[#07070A] text-white flex items-center overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* ===== GLOWS (CENTERED, NO OVERFLOW) ===== */}
        <div className="absolute top-[-6rem] left-1/2 -translate-x-1/2 w-64 h-64 md:w-[32rem] md:h-[32rem] bg-[#7C7CFF]/20 blur-[140px] rounded-full pointer-events-none" />

        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 w-56 h-56 md:w-[26rem] md:h-[26rem] bg-[#7C7CFF]/10 blur-[120px] rounded-full pointer-events-none" />

        {/* ===== LEFT ===== */}
        <div className="relative z-10">
          <p className="text-xs tracking-widest text-[#7C7CFF] uppercase">
            Full Stack Developer
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            Building <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-[#7C7CFF]">
              digital products
            </span>
            <br />
            for the web
          </h1>

          <p className="mt-6 max-w-xl text-gray-400 leading-relaxed">
            I build practical web applications by working with APIs, databases,
            and authentication, while focusing on clean, well-structured code
            and industry best practices.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact">
              <button className="px-8 py-3 rounded-md bg-[#7C7CFF] text-black font-medium shadow-[0_0_30px_rgba(124,124,255,0.5)] hover:scale-[1.03] active:scale-95 transition-transform">
                Contact Me
              </button>
            </a>

            <a
              href="/resume/LatestResume2026.pdf"
              download
              className="inline-flex items-center px-8 py-3 rounded-md border border-white/20 text-white hover:border-[#7C7CFF]/60 active:scale-95 transition-transform"
            >
              ↓ Resume
            </a>
          </div>
        </div>

        {/* ===== RIGHT ===== */}
        <div className="relative z-10 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#7C7CFF]/20 blur-[90px]" />
            <div className="w-64 sm:w-72 md:w-[26rem] aspect-square max-w-full">
              <DotLottieReact
                src="https://lottie.host/b19eb720-9f1a-4e7e-bf3a-4b22b32afe1a/VYmMQKLyp1.lottie"
                autoplay
                loop
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
