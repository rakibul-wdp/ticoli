"use client";

import { sheep3, subHeroRightImg } from "@/public/assets/images";
import { AbsoluteImg } from "@/universal";

export const BottomShape = () => (
  <>
    <AbsoluteImg
      img={subHeroRightImg}
      className="-bottom-[300px] -right-12  hidden lg:block rotate-[20deg]"
      zIndex="z-50"
    />
    <AbsoluteImg
      img={sheep3}
      className="-bottom-[410px] -left-[26%]  hidden lg:block"
      zIndex="z-0"
    />
  </>
);
