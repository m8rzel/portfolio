import gsap from "gsap";
import Draggable from "gsap/dist/Draggable";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function start() {
  gsap.registerPlugin(ScrollTrigger, Draggable);

  let gallery = document.getElementById("gallery");
  let scroller = document.getElementById("scroller");

  let horizontalScroll = ScrollTrigger.create({
    trigger: gallery,
    pin: true,
    anticipatePin: 1,
    scrub: true,
    invalidateOnRefresh: true,
    start: "top top",
    end: () => scroller.scrollWidth - window.innerWidth - 0,
  });

  let scrollWrapAmount = scroller.offsetWidth;
  let panelDistance = scroller.scrollWidth - window.innerWidth - 0;
  var dragRatio = (scrollWrapAmount / panelDistance) * 10;

  var proxy = document.createElement("div");

  const drag = Draggable.create(proxy, {
    trigger: scroller,
    type: "x",
    onPress() {
      this.startScroll = horizontalScroll.scroll();
    },
    onDrag() {
      horizontalScroll.scroll(
        this.startScroll - (this.x - this.startX) * dragRatio
      );
    },
  });

  // PANEL SCROLLING
  let panels = gsap.utils.toArray(".image");

  panels.forEach((panel, i) => {
    gsap.to(panel, {
      x: () => {
        return -scroller.scrollWidth - 100;
      },
      ease: "none",
      scrollTrigger: {
        trigger: scroller,
        start: "top top",
        scrub: 1.05,
        invalidateOnRefresh: true,
        end: () => "+=" + scroller.scrollWidth,
      },
    });
  });
}
