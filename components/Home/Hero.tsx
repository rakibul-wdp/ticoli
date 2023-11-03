"use client";

import { HeroBg2, InputGroup, Space } from "@/components";
import { kingIconBig } from "@/public/assets/icon";
import {
  coloredShape2,
  heroBg,
  heroRightImg,
  mobColorShape,
  mobHeroBg,
  mobHeroImg,
} from "@/public/assets/images";
import {
  AbsoluteImg,
  BackgroundImg,
  CommonText,
  Container,
  MainContainer,
  Title,
} from "@/universal";
import Image from "next/image";
import { Slider } from "./Slider";

export const Hero = () => (
  <HeroBg2
    lowerBg={<Space className="py-[505px] md:py-[350px]" />}
    shapeImg={coloredShape2}
    shapeImgMob={mobColorShape}
    coloredShapePosition="-bottom-[150px] -right-[30px] md:-bottom-[250px] md:-right-[150px] lg:-bottom-32 lg:-right-[100px] w-[320px] md:w-[620px] lg:w-[740px]"
    lineStarePosition="-bottom-[151%] -left-[40px] lg:-bottom-[180px] w-[143px] md:w-auto"
  >
    <Container className="flex flex-col justify-center items-center gap-4 md:gap-5 pt-[32px] md:pt-[100px] relative">
      <Title
        variant="H1"
        color="surface"
        className="text-start md:text-center max-w-[792px]"
      >
        Burst the <br className="block md:hidden" /> reading motivation from our
        little ones
      </Title>

      <CommonText className="block md:hidden text-lg pb-4">
        You are going to receive at first hand new stories and share your
        feedback with us.
      </CommonText>

      <InputGroup />

      <CommonText className="hidden md:block">
        You are going to receive at first hand new stories and share your
        feedback with us.
      </CommonText>

      <Space className="h-[270px] md:h-[472px]" />

      <div className="absolute min-w-[622px] max-w-[940px] -bottom-[376px] md:-bottom-[157px]">
        <div className="relative ">
          <Image
            src={kingIconBig}
            className="absolute -top-[10px] -left-[45px] z-50"
            alt=""
          />
          <Slider />
        </div>
      </div>
    </Container>
  </HeroBg2>
);

export const Hero1 = () => (
  <BackgroundImg
    img={heroBg}
    mobImg={mobHeroBg}
    topLabel
    className="bg-[#EDEDE6]"
  >
    <MainContainer>
      <AbsoluteImg
        img={heroRightImg}
        className="-top-2.5 -right-[8.5%] w-[61.5%] hidden md:block"
      />

      <Container className="relative">
        <section className="max-w-xs lg:max-w-[660px] pt-10 pb-96 md:pb-32 lg:pb-52 w-full z-20 mx-auto md:mx-0">
          <Title variant="H1" color="surface" className="text-start">
            Join other parents to create
            <span className="text-outline"> better content</span> <br /> for our
            kids
          </Title>

          <CommonText className="mt-2 mb-10 max-w-[543px] text-start">
            We develop reading interest talking about nature, teaching social
            skills, music, cooking, sports and much more.
          </CommonText>

          <InputGroup />

          <div className="relative w-full hero-img pt-44 block md:hidden ">
            <AbsoluteImg
              img={mobHeroImg}
              className="pt-10 top-2.5 -bottom-20 -right-[30%] w-[128%]"
            />
          </div>
        </section>
      </Container>
    </MainContainer>
  </BackgroundImg>
);
