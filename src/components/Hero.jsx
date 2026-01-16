import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-36 bg-[#07070A] text-white flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative">

        {/* Glow background */}
        <div className="absolute -top-40 -left-40 w-lg h-128 bg-[#7C7CFF]/20 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 -right-40 w-104 h-104 bg-[#7C7CFF]/10 rounded-full blur-[140px] pointer-events-none" />

        {/* LEFT */}
        <div className="relative z-10">
          <p className="text-sm tracking-widest text-[#7C7CFF] uppercase">
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
            and authentication, and I focus on writing clean, well-structured
            code while learning industry best practices.
          </p>

          {/* Actions */}
          <div className="mt-10 flex gap-6">
             <a href="#contact">
            <button className="px-8 py-3 cursor-pointer rounded-md bg-[#7C7CFF] text-black font-medium shadow-[0_0_30px_rgba(124,124,255,0.5)] hover:scale-[1.03] active:scale-95 transition-transform duration-200">
             Contact Me
            </button>
            </a>

            <a
              href="/resume/LatestResume2026.pdf"
              download
              className="inline-flex items-center px-8 py-3 rounded-md border border-white/20 text-white hover:border-[#7C7CFF]/60 active:scale-95 transition-transform duration-200"
            >
              ↓ Resume
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative z-10 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#7C7CFF]/20 blur-[90px]" />
            <div className="w-88 md:w-md aspect-square">
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
