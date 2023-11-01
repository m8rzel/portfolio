import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const start = () => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    defaults: { ease: "power4.inOut", duration: 1 },
  });

  //H1
  tl.fromTo(".hero-content", { y: 300, opacity: 0 }, { y: 0, opacity: 1 });

  //Hero Line
  const heroLine = document.querySelector("#hero-line");
  tl.set(heroLine, {
    strokeDasharray: heroLine.getTotalLength(),
    strokeDashoffset: heroLine.getTotalLength(),
  });
  tl.to(heroLine, {
    display: "block",
    strokeDashoffset: 0,
    duration: 2,
  });

  //Scroll Animations
  const pathAnimation = gsap.timeline();
  const contactLine = document.querySelector("#contact-line");
  // Set the initial state of the path (hide it)
  pathAnimation.set(contactLine, {
    strokeDasharray: contactLine.getTotalLength(),
    strokeDashoffset: contactLine.getTotalLength(),
  });

  // Define the path animation
  pathAnimation.to(contactLine, {
    strokeDashoffset: 0, // Animate the dash offset to 0 to reveal the path
    duration: 1, // Animation duration
    ease: "power1.inOut", // Easing function
  });

  // Create a ScrollTrigger for your path animation
  ScrollTrigger.create({
    trigger: "#contact-line", // The element that triggers the animation
    start: "-60% center",
      end: "-10% center",
    scrub: true, // Enables scrubbing (smooth scrolling)
    markers: false, // Display markers for debugging (set to true for debugging)
    animation: pathAnimation, // The timeline you want to play when triggered
  });
};
