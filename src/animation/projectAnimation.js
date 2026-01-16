import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const projectsSectionAnimation = (section) => {
  const heading = section.querySelector("h2");
  const subtitle = section.querySelector("p");
  const cards = section.querySelectorAll(".project-card");
  const rightPanel = section.querySelector(".projects-visual");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });

  // Header
  tl.from(heading, {
    y: 24,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  });

  // Subtitle
  tl.from(
    subtitle,
    {
      y: 16,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    },
    "-=0.5"
  );

  // Project cards (smooth stacked reveal)
  tl.from(
    cards,
    {
      y: 28,
      opacity: 0,
      duration: 0.7,
      stagger: 0.18,
      ease: "power3.out",
      clearProps: "transform,opacity",
    },
    "-=0.3"
  );

  // Right animation (slight delayed glide)
  tl.from(
    rightPanel,
    {
      x: 40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    },
    "-=0.6"
  );

  return tl;
};
