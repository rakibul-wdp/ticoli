"use client";

import { goodNightOwl } from "@/public/assets";
import {
  augustine,
  elephantMain,
  helloRene,
  parentsArea,
} from "@/public/assets/images";
import { BackgroundImg } from "@/universal";
import { Player } from "@lottiefiles/react-lottie-player";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Elephant } from "./Elephant";

export const AnimatedCards = () => {
  const containerRef = useRef(null);
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);
  const img5 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1,
        },

        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: true,
        },
      });
      tl.to(img1.current, { y: "-100%" })
        .to(img2.current, { y: "0", delay: -1 })
        .to(img3.current, { css: { clipPath: "circle(140% at 90% 10%)" } })
        .to(img4.current, { x: "0" })
        .to(img5.current, { x: "0" });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="main-container h-full flex flex-col items-center overflow-hidden scroll-hidden"
    >
      <div className="h-screen flex items-center">
        <div className="relative w-[305px] h-[593px] rounded-3xl flex items-center overflow-hidden">
          <div
            ref={img1}
            className="absolute w-[305px] h-[593px] flex justify-center items-center overflow-hidden rounded-3xl border-[8px] border-surface-accent-sunken"
          >
            <Player
              autoplay
              loop
              src={goodNightOwl}
              className="w-[505px] h-[593px] mx-auto"
            ></Player>
            <div className="w-full h-full absolute top-[37%]">
              <h1 className="text-[#FEFFFF] text-center text-[55.496px] font-normal leading-[49.473px] font-luckiest-guy">
                Good Night
              </h1>
              <h1 className="text-[#FEFFFF] text-end pr-[15%] text-[68.402px] font-normal leading-[49.473px] font-luckiest-guy">
                Owl
              </h1>
            </div>
          </div>
          <div
            ref={img2}
            className="absolute w-[305px] h-[593px] translate-y-full mx-auto flex justify-center items-center overflow-hidden rounded-3xl border-[8px] border-surface-accent-sunken"
          >
            <BackgroundImg
              img={elephantMain}
              className="w-[305px] h-[593px] rounded-[32px]"
            >
              <div className="-rotate-[74.5deg] -mr-4 mt-[27px]">
                <Elephant />
              </div>
            </BackgroundImg>
          </div>
          <div
            ref={img3}
            className="clip-path-animation absolute w-[305px] h-[593px] mx-auto flex justify-center items-center overflow-hidden rounded-3xl border-[8px] border-surface-accent-sunken"
          >
            <Image src={parentsArea} alt="parents-area" className="h-full" />
          </div>
          <div
            ref={img4}
            className="absolute w-[305px] h-[593px] translate-x-full mx-auto flex justify-center items-center overflow-hidden rounded-3xl z-50"
          >
            <Image src={helloRene} alt="parents-area" className="h-full" />
          </div>
          <div
            ref={img5}
            className="absolute w-[305px] h-[593px] translate-x-full mx-auto flex justify-center items-center overflow-hidden rounded-3xl z-50"
          >
            <Image src={augustine} alt="parents-area" className="h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
