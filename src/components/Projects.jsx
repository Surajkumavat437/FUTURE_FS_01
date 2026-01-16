import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { projectsSectionAnimation } from "../animation/projectAnimation";

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      projectsSectionAnimation(sectionRef.current);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen bg-[#07070A] text-white flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT */}
        <div className="w-full">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-[#7C7CFF]">
                Projects
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              A few real-world projects I’ve built while learning full stack web development.
            </p>
          </div>

          {/* Project Card */}
          <div className="project-card mb-8 w-full border border-white/10 rounded-xl p-6
                          hover:border-[#7C7CFF]/40
                          hover:shadow-[0_0_30px_rgba(124,124,255,0.15)]
                          transition will-change-transform">
            <h3 className="text-xl font-semibold mb-2">
              <a href="https://re-book.onrender.com/">RE-BOOK</a>
            </h3>

            <p className="text-gray-400 mb-4">
              A full stack book listing application with authentication, CRUD operations,
              search functionality, and image uploads.
            </p>

            <div className="flex flex-wrap gap-2 text-sm text-gray-300 mb-4">
              {["Node.js", "Express", "MongoDB", "EJS"].map(t => (
                <span key={t} className="border border-white/10 px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/Surajkumavat437/RE-BOOK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7C7CFF] hover:underline text-sm"
            >
              GitHub
            </a>
          </div>

          {/* Project Card 2 */}
          <div className="project-card w-full border border-white/10 rounded-xl p-6
                          hover:border-[#7C7CFF]/40
                          hover:shadow-[0_0_30px_rgba(124,124,255,0.15)]
                          transition will-change-transform">
            <h3 className="text-xl font-semibold mb-2">
              <a href="https://sigma-project-jjeb.onrender.com/login">Airbnb Clone</a>
            </h3>

            <p className="text-gray-400 mb-4">
              A full stack Airbnb-style application with listings, authentication,
              image uploads, and map-based location features.
            </p>

            <div className="flex flex-wrap gap-2 text-sm text-gray-300 mb-4">
              {["Node.js", "Express", "MongoDB", "Leaflet"].map(t => (
                <span key={t} className="border border-white/10 px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/Surajkumavat437/Major-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7C7CFF] hover:underline text-sm"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* RIGHT (STACKS BELOW ON MOBILE) */}
        <div className="projects-visual relative flex justify-center mt-12 lg:mt-0">
          <div className="absolute inset-0 max-w-full bg-[#7C7CFF]/20 blur-[120px] rounded-full" />
          <div className="w-64 sm:w-72 md:w-96 aspect-square max-w-full">
            <DotLottieReact
              src="https://lottie.host/23f9e94f-ddcd-49f2-bcce-2eda2204b3eb/uYglqR6xPW.lottie"
              autoplay
              loop
              className="w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
