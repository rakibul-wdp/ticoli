"use client";

import Image from "next/image";

import { kingIcon } from "@/public/assets/icon";
import { aboutDesktop } from "@/public/assets/images";
import { CommonText, Container, Title } from "@/universal";
import { HeroBg2, Space } from "..";

export const Hero = () => (
  <HeroBg2
    lowerBg={<Space className="py-[360px] md:py-[250px]" />}
    coloredShapePosition="w-[400px] md:w-[620px] lg:w-[740px] -bottom-40 -right-[105px] md:-bottom-[250px] md:-right-[150px] lg:-bottom-[280px] lg:-right-[170px]"
    lineStarePosition="-bottom-[110%] -left-[40px] lg:-bottom-[180px] w-[143px] md:w-auto"
  >
    <Container className="flex flex-col justify-center items-center gap-2">
      <Title
        variant="H1"
        color="surface"
        className="text-center pt-8 md:pt-[100px]"
      >
        Get to know us!
      </Title>
      <CommonText className="text-surface max-w-[555px] text-center pb-[413px] md:pb-[250px] text-lg md:text-base font-normal leading-7 px-2.5">
        A group of tech and artist enthusiasts working to build a better way to
        motivate, teach kids to develop an interest in reading and learning. Our
        little ones often find themselves spending time in front of the screen
        with programs that consume their desire to learn and interact. Thinking
        about it, we found a way to work closely with creativity and art to
        provide a better, more fun education for our children.
      </CommonText>

      <div className="absolute min-h-[320px] min-w-[810px] pb-[200px] md:pb-0 -bottom-[140px]">
        <div className="relative ">
          <Image src={kingIcon} className="absolute -top-10 -left-10" alt="" />
          <Image src={aboutDesktop} className="static" alt="" />
        </div>
      </div>
    </Container>
  </HeroBg2>
);
