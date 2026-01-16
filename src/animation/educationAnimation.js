import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const educationSectionAnimation = (section) => {
  const heading = section.querySelector("h2");
  const subtitle = section.querySelector("p");
  const cards = section.querySelectorAll(".education-card");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });

  // Heading
  tl.from(heading, {
    y: 22,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  });

  // Subtitle (overlap)
  tl.from(
    subtitle,
    {
      y: 14,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    },
    "-=0.5"
  );

  // Cards — calm, academic feel
  tl.from(
    cards,
    {
      y: 24,
      opacity: 0,
      scale: 0.98,
      duration: 0.7,
      stagger: 0.18,
      ease: "power3.out",
      clearProps: "transform,opacity",
    },
    "-=0.3"
  );

  return tl;
};
