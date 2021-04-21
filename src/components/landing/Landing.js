import React, { useRef, useEffect, useContext } from "react";
import Context from "../../store/context";
import Cover from "./Cover";
import Ido from "./Ido";
import Who from "./Who";
import Contact from "./Contact";
import Work from "./Work";
import useWindowSize from "../../hooks/useWindowSize";
import useWindowScroll from "../../hooks/useWindowScroll";

export default function Landing() {
  const { state, actions } = useContext(Context);
  const size = useWindowSize();
  const scrollContainer = useRef();
  const windowScroll = useWindowScroll();
  let data = {
    ease: 0.08,
    current: 0,
    previous: state.scroll.y,
    rounded: 0,
  };
  const requests = useRef([]);

  useEffect(() => {
    if (!state.project.isOpened) {
      document.body.style.height = `${
        scrollContainer.current.getBoundingClientRect().height
      }px`;
    }
  }, [size, state.project.isOpened]);

  // Run scrollrender once page is loaded.
  useEffect(() => {
    if (!state.project.isOpened) {
      requests.current.push(requestAnimationFrame(skewScrolling));
    } else {
      requests.current.map((i) => {
        cancelAnimationFrame(i);
      });
    }
  }, [state.project.isOpened]);

  useEffect(() => {
    if (
      document.querySelector("#work > :nth-child(1)[data-scroll='out']") &&
      document.querySelector("#work > :nth-child(2)[data-scroll='out']")
    ) {
      actions({
        type: "setState",
        payload: { ...state, cursor: { type: "default" } },
      });
    }
  }, [windowScroll]);

  const times = [];
  let fps;

  // Scrolling
  const skewScrolling = () => {
    //dynamic frame rate
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }
    times.push(now);
    fps = times.length;

    data.ease = (60 * 0.08) / fps;

    const cta = document.querySelector("#cover .arrow +div");
    const arrow = document.querySelector("#cover .arrow");
    const hello = document.querySelector("#cover p");
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    let skew = velocity * 20;
    //skew limits
    switch (true) {
      case skew > 20:
        skew = 20;
        break;
      case skew < -20:
        skew = -20;
        break;
      case (skew > -0.01 && skew < 0) || (skew < 0.01 && skew > 0):
        skew = 0;
        break;

      default:
        break;
    }

    //Assign skew and smooth scrolling to the scroll container skewY(${skew}deg)
    scrollContainer.current.style.transform = `translateY(-${data.rounded}px)`;
    document
      .querySelectorAll(".project .title > div:not(.static)")
      .forEach((e) => {
        e.style.transform = `translateY(${skew * 0.8}vh)`;
      });
    document
      .querySelectorAll(".project .mockup img:not(.static)")
      .forEach((e) => {
        e.style.transform = `scale(${1 - Math.abs(skew / 200)})`;
      });

    if (window.pageYOffset < window.innerHeight) {
      cta.style.opacity = 1 - (data.rounded * 0.8) / 100;
      cta.style.top = `${data.rounded * 0.25}px`;

      arrow.style.opacity = 1 - data.rounded / 100;
      arrow.style.width = `calc(2rem + ${data.rounded * 2}px)`;
      arrow.style.transform = `translateY(${
        data.rounded * 0.5
      }px) rotate(90deg)`;

      hello.style.opacity = 1 - (data.rounded * 0.2) / 100;
    }

    //make it work on scroll only
    //loop vai raf
    requests.current.push(requestAnimationFrame(skewScrolling));
  };
  return (
    <div
      ref={scrollContainer}
      className={`sections lateral-margin ${
        state.project.isOpened ? "project-open" : ""
      }`}
    >
      <Cover />
      <Work />
      <Ido />
      <Who />
      <Contact />
    </div>
  );
}