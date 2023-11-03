"use client";

import { SectionHeader } from "@/components/common";
import {
  lineStare,
  mobSubHeroBg,
  subHero,
  subHeroLeftImg,
  subHeroRightImg,
} from "@/public/assets/images";
import {
  AbsoluteImg,
  BackgroundImg,
  Container,
  MainContainer,
} from "@/universal";

export const SubHero = () => (
  <BackgroundImg
    img={subHero}
    mobImg={mobSubHeroBg}
    className="-mt-10 lg:-mt-24"
  >
    <MainContainer>
      <AbsoluteImg
        img={lineStare}
        width="w-full"
        className="-bottom-9 md:bottom-7 lg:top-20 -left-[6.2%]"
      />
      <AbsoluteImg
        img={subHeroLeftImg}
        className="top-[45%] -left-[3%] hidden lg:block"
      />
      <AbsoluteImg
        img={subHeroRightImg}
        className="top-[60%] right-0  hidden lg:block"
      />

      <Container className="relative">
        <SectionHeader
          className="pt-[220px] md:pt-[300px] pb-32 md:pb-52"
          label="designed For them"
          title="Immersive interactive reading experiences that teaches what matters"
          titleMaxWidth="max-w-[697px]"
          text="Stories to keep our children learning and engaged."
          textMaxWidth="max-w-[283px] md:max-w-[543px]"
        />
      </Container>
    </MainContainer>
  </BackgroundImg>
);
