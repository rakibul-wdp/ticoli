"use client";

import { IChildrenWithClassName } from "@/interface";
import {
  coloredShape,
  heroBg,
  lineStare,
  mobColorShape,
  mobHeroBg,
  mobSubHeroBg,
  subHero,
} from "@/public/assets/images";
import { AbsoluteImg, BackgroundImg, MainContainer } from "@/universal";
import { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

export interface IHeroBg extends IChildrenWithClassName {
  lowerBgPt?: string;
  lowerBgMt?: string;
  img?: StaticImageData;
  mobImg?: StaticImageData;
  lineStarePosition: string;
  lowerBg?: StaticImageData;
  shapeImg?: StaticImageData;
  mobLowerBg?: StaticImageData;
  coloredShapePosition: string;
  shapeImgMob?: StaticImageData;
}

export const HeroBg = ({
  img,
  mobImg,
  lowerBg,
  shapeImg,
  children,
  className,
  lowerBgMt,
  lowerBgPt,
  mobLowerBg,
  shapeImgMob,
  lineStarePosition,
  coloredShapePosition,
}: IHeroBg) => (
  <BackgroundImg
    img={img || heroBg}
    mobImg={mobImg || mobHeroBg}
    lowerBg={lowerBg || subHero}
    mobLowerBg={mobLowerBg || mobSubHeroBg}
    lowerBgMt={lowerBgMt}
    lowerBgPt={lowerBgPt}
    className={className}
  >
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
  </BackgroundImg>
);
