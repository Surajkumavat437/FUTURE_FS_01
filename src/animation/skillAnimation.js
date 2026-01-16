import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const skillsSectionAnimation = (section) => {
  const heading = section.querySelector("h2");
  const subtitle = section.querySelector("p");
  const cards = section.querySelectorAll(".skill-card");

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

  // Subtitle (overlap)
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

  // Cards — smooth stagger (About-style)
  tl.from(
    cards,
    {
      y: 28,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.12,
      clearProps: "transform,opacity",
    },
    "-=0.3"
  );

  return tl;
};
