import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { aboutSectionAnimation } from "../animation/aboutAnimation";

const About = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const techRef = useRef([]);
  const pointRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      aboutSectionAnimation({
        section: sectionRef.current,
        left: leftRef.current,
        heading: headingRef.current,
        subtitle: subtitleRef.current,
        techs: techRef.current,
        points: pointRef.current,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen bg-[#07070A] text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT */}
        <div ref={leftRef} className="flex justify-center relative">
          <div className="absolute w-95 h-95 bg-[#7C7CFF]/20 blur-[120px] rounded-full" />
          <div className="w-90 md:w-120 aspect-square">
            <DotLottieReact
              src="https://lottie.host/e5cb4c2d-1b31-4a73-9c34-cb46d85ffbeb/YcRZFRRo6B.lottie"
              autoplay
              loop
              className="w-full h-full"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h2
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-[#7C7CFF]">
              About ME
            </span>
          </h2>

          <p
            ref={subtitleRef}
            className="text-gray-400 uppercase tracking-wide text-sm mb-8"
          >
            Full Stack Web Developer focused on building practical web applications
          </p>

          {/* Tech stack */}
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-6 mb-10 opacity-80 mr-5">
            {[
              "html",
              "css3",
              "tailwind",
              "javascript",
              "react",
              "nodejs",
              "expressjs",
              "mysql",
              "mongoDb",
              "aws",
            ].map((tech, i) => (
              <div
                key={tech}
                ref={(el) => (techRef.current[i] = el)}
                className="flex flex-col items-center gap-2 text-xs text-gray-400"
              >
                <img src={`/images/${tech}.png`} alt={tech} className="w-8 h-8" />
                {tech}
              </div>
            ))}
          </div>

          {/* Points */}
          <ul className="space-y-4 text-gray-300 mr-6">
            {[
              "Develop complete web applications with authentication, APIs, and database integration",
              "Work on real-world projects while following structured and maintainable coding practices",
              "Continuously improve technical and problem-solving skills through hands-on development",
            ].map((text, i) => (
              <li
                key={i}
                ref={(el) => (pointRef.current[i] = el)}
                className="flex gap-3"
              >
                <span className="text-[#7C7CFF]">⚡</span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
