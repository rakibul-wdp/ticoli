"use client";

import { goodNightOwl } from "@/public/assets";
import { Player } from "@lottiefiles/react-lottie-player";

export const OwlCard = () => (
  <section className="w-[305px] h-[593px] mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl border-[8px] border-surface-accent-sunken">
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
  </section>
);
