"use client";

import { joinCommunityBgImg, sheep1 } from "@/public/assets/images";
import {
  AbsoluteImg,
  BgContainer,
  Container,
  MainContainer,
} from "@/universal";

import { AppDownload, JoinCommunity, SectionHeader } from "@/components/common";
import { HowItWorkMob } from "./HowItWorkMob";
import { HowItWorkWeb } from "./HowItWorkWeb";

export const HowItWorks = () => (
  <MainContainer>
    <AbsoluteImg
      img={sheep1}
      className="bottom-[40%] md:-bottom-[27%] -left-[105%] lg:-left-[27%]"
    />
    <Container className="relative flex flex-col justify-center items-center">
      <SectionHeader
        className="pt-[100px] mb-0 lg:mb-14"
        label="TAILORED BY YOU"
        title="How it works?"
        text="The must-haves real-life skills that we wished had the chance to learn as children"
        textMaxWidth="max-w-[536px]"
        titleMaxWidth="max-w-[649px]"
      />
      <HowItWorkWeb />
      <HowItWorkMob />

      <AppDownload className="mt-12" />
    </Container>

    <BgContainer img={joinCommunityBgImg}>
      <JoinCommunity className="p-8" />
    </BgContainer>
  </MainContainer>
);
