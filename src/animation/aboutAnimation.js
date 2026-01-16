import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const aboutSectionAnimation = ({
  section,
  left,
  heading,
  subtitle,
  techs,
  points,
}) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });

  // Left illustration (smooth float-in)
  tl.from(left, {
    x: -60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  // Heading reveal
  tl.from(
    heading,
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.6"
  );

  // Subtitle
  tl.from(
    subtitle,
    {
      y: 20,
      opacity: 0,
      duration: 0.6,
    },
    "-=0.5"
  );

  // Tech stack (staggered, premium feel)
  tl.from(
    techs,
    {
      scale: 0.85,
      opacity: 0,
      stagger: 0.08,
      duration: 0.6,
      ease: "back.out(1.4)",
    },
    "-=0.4"
  );

  // Bullet points (clean fade-up)
  tl.from(
    points,
    {
      y: 20,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6,
    },
    "-=0.3"
  );

  return tl;
};
