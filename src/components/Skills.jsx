import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { skillsSectionAnimation } from "../animation/skillAnimation";

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      skillsSectionAnimation(sectionRef.current);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen bg-[#07070A] text-white flex items-center py-5"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-[#7C7CFF]">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use while building and learning through real-world projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Programming Languages",
              items: ["Java", "JavaScript"],
            },
            {
              title: "Web Technologies",
              items: ["HTML", "CSS", "Tailwind CSS", "React"],
            },
            {
              title: "Backend & APIs",
              items: ["Node.js", "Express.js", "REST APIs","Authentication & Authorization (Sessions, Middleware"],
            },
            {
              title: "Databases",
              items: ["MongoDB", "MySQL"],
            },
            {
              title: "Tools & Platforms",
              items: ["Git & GitHub", "Cloudinary", "Multer", "Render"],
            },
          ].map((card) => (
            <div
              key={card.title}
              className="skill-card border border-white/10 rounded-xl p-6
                         hover:border-[#7C7CFF]/40
                         hover:shadow-[0_0_30px_rgba(124,124,255,0.15)]
                         transition"
            >
              <h3 className="text-lg font-semibold mb-4 text-[#7C7CFF]">
                {card.title}
              </h3>
              <ul className="space-y-2 text-gray-300">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
