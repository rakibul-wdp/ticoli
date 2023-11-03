"use client";

import { footerBgImg, footerSheep } from "@/public/assets/images";
import {
  AbsoluteImg,
  BackgroundImg,
  Container,
  Label,
  MainContainer,
} from "@/universal";
import { AppDownload, JoinCommunity, Logo, SocialMedia } from "..";

export const Footer = () => (
  <BackgroundImg img={footerBgImg}>
    <MainContainer className="py-12 relative">
      <Container className="flex flex-col justify-center items-center ">
        <AbsoluteImg
          img={footerSheep}
          className="hidden lg:block -top-6 -left-[5.5%]"
        />

        <JoinCommunity className="w-full" />

        <div className="py-10 border border-x-0 border-surface w-full border-opacity-[0.23999999463558197] my-10">
          <AppDownload />
        </div>

        <section className="flex justify-between items-center flex-col gap-6 w-full">
          <div className="w-full flex justify-between items-center gap-3 ">
            <Logo variant="white" />

            <Label
              color="surface"
              fontWeight="400"
              fontFamily="source-sans"
              className="hidden lg:block text-center"
            >
              Ticoli is a DPRODUCT LDT. Company. All Rightrs Reserved &reg;
              {new Date().getFullYear()}
            </Label>

            <SocialMedia />
          </div>
          <Label
            color="surface"
            fontWeight="400"
            fontFamily="source-sans"
            className="lg:hidden text-center"
          >
            Ticoli is a DPRODUCT LDT. Company. All Rightrs Reserved &reg;
            {new Date().getFullYear()}
          </Label>
        </section>
      </Container>
    </MainContainer>
  </BackgroundImg>
);
