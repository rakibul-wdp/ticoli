"use client";

import { CommonText, Container, MainContainer } from "@/universal";
import { AppDownload, BottomShape, Space } from "..";
import { TailorsAbout } from "./TailorsAbout";

export const TailorsAndAppDownload = () => (
  <MainContainer className="relative -mt-[630px] md:-mt-[328px] z-50">
    <Container className="flex justify-center items-center flex-col w-full px-6 md:px-0">
      <p className="max-w-[289px] md:max-w-[489px] mb-[26px] md:mb-[40px] text-high-contrast text-center font-sora text-[26px] font-normal leading-normal">
        “What if we create interactive stories for kids? We could be the Netflix
        for a new way of reading!”
      </p>

      <CommonText className="max-w-[555px] text-center">
        We offer parents the opportunity to learn more about their kid&rsquo;s
        interests, control the content, and make sure that whenever the kids are
        trying to use the phone, they will have constructive and helpful screen
        time. For that, we have our 3 pillars that not only the kids but the
        parents and the team should consider:
      </CommonText>

      <TailorsAbout />
      <AppDownload hidden="mob" flex />

      <Space className="md:h-[96px]" />

      <BottomShape />
    </Container>
  </MainContainer>
);
