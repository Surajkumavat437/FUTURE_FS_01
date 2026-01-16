import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { educationSectionAnimation } from "../animation/educationAnimation";

const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      educationSectionAnimation(sectionRef.current);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="min-h-screen bg-[#07070A] text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-[#7C7CFF]">
              Education
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic background that supports my journey into software development.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* PUC */}
          <div
            className="education-card border border-white/10 rounded-xl p-6
                       hover:border-[#7C7CFF]/40
                       hover:shadow-[0_0_30px_rgba(124,124,255,0.15)]
                       transition will-change-transform"
          >
            <p className="text-sm text-[#7C7CFF] mb-2">2021 – 2023</p>
            <h3 className="text-xl font-semibold mb-1">
              Pre-University Course (PUC)
            </h3>
            <p className="text-gray-300 mb-3">
              PCMC (Physics, Chemistry, Mathematics, Computer Science)
            </p>
            <p className="text-gray-400 text-sm">
              Vidyasanskaar Pre-University College, Bangalore
            </p>
            <p className="mt-3 text-gray-300 font-medium">
              Percentage: 90%
            </p>
          </div>

          {/* BCA */}
          <div
            className="education-card border border-white/10 rounded-xl p-6
                       hover:border-[#7C7CFF]/40
                       hover:shadow-[0_0_30px_rgba(124,124,255,0.15)]
                       transition will-change-transform"
          >
            <p className="text-sm text-[#7C7CFF] mb-2">2023 – 2026</p>
            <h3 className="text-xl font-semibold mb-1">
              Bachelor of Computer Applications (BCA)
            </h3>
            <p className="text-gray-300 mb-3">
              Computer Applications & Software Development
            </p>
            <p className="text-gray-400 text-sm">
              Acharya Institute of Graduate Studies, Bangalore
            </p>
            <p className="mt-3 text-gray-300 font-medium">
              CGPA: 9.01
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
