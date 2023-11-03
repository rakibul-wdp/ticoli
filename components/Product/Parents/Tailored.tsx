"use client";

import {
  AppDownload,
  JoinCommunity,
  SectionHeader,
  TailoredCard,
} from "@/components";
import { joinCommunityBgImg } from "@/public/assets/images";
import { tailors } from "@/public/data";
import { BgContainer, Container, MainContainer } from "@/universal";

export const Tailored = () => (
  <MainContainer className="mt-[100px]">
    <Container className="relative">
      <SectionHeader
        label="Stories to keep our children learning and engaged"
        title="Playful learning reading experiences"
        titleMaxWidth="max-w-[649px]"
      />

      <main className="w-full mt-[54px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-12 gap-y-14">
        {tailors.map(({ img, title, des }, i) => (
          <TailoredCard key={i} img={img} title={title} des={des} />
        ))}
      </main>

      <AppDownload className="mt-8 md:mt-[138px]" />
    </Container>

    <BgContainer img={joinCommunityBgImg}>
      <JoinCommunity className="p-8" />
    </BgContainer>
  </MainContainer>
);
