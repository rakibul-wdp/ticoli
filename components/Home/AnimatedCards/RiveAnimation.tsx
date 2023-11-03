"use client";

import { elephantMain } from "@/public/assets/images";
import { BackgroundImg } from "@/universal";
import { Elephant } from "./Elephant";

export const RiveAnimation = () => (
  <section className="w-[305px] h-[593px] relative mx-auto">
    <BackgroundImg
      img={elephantMain}
      className="w-[305px] h-[593px] rounded-[32px] overflow-hidden border-[8px] border-surface-accent-sunken"
    >
      <div className="-rotate-[74.5deg] -mr-4 mt-[27px]">
        <Elephant />
      </div>
    </BackgroundImg>
  </section>
);
