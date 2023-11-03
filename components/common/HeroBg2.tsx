"use client";

import { IChildren } from "@/interface";
import {
  coloredShape,
  heroBg,
  lineStare,
  mobColorShape,
  subHero,
} from "@/public/assets/images";
import { AbsoluteImg, BgImg, MainContainer } from "@/universal";
import { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

export interface IHeroBg2 extends IChildren {
  lowerBg?: JSX.Element;
  shapeImg?: StaticImageData;
  shapeImgMob?: StaticImageData;
  lineStarePosition: string;
  coloredShapePosition: string;
}
export const HeroBg2 = ({
  children,
  coloredShapePosition,
  lineStarePosition,
  shapeImgMob,
  shapeImg,
  lowerBg,
}: IHeroBg2) => {
  return (
    <BgImg hero img={subHero} lowerBg={lowerBg}>
      <BgImg hero img={heroBg}>
        <MainContainer>
          <AbsoluteImg img={lineStare} className={lineStarePosition} />
          {shapeImgMob ? (
            <>
              <AbsoluteImg
                img={shapeImgMob || mobColorShape}
                className={twMerge("block md:hidden", coloredShapePosition)}
              />
              <AbsoluteImg
                img={shapeImg || coloredShape}
                className={twMerge("hidden md:block", coloredShapePosition)}
              />
            </>
          ) : (
            <AbsoluteImg
              img={shapeImg || coloredShape}
              className={coloredShapePosition}
            />
          )}
          {children}
        </MainContainer>
      </BgImg>
    </BgImg>
  );
};
