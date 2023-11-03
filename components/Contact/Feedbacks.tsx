"use client";

import { MainContainer } from "@/universal";
import { AppDownload, BottomShape } from "..";

export const Feedbacks = () => (
  <MainContainer className="-mt-[660px] md:-mt-[52px] relative z-50">
    <section className="flex justify-center items-center flex-col">
      <div className="max-w-[489px] mb-[26px] md:mb-[71px]">
        <h6 className="text-high-contrast text-center font-sora text-[26px] lg:text-2xl font-normal px-7 lg:px-4">
          We will answer you as soon as possible! You can play around with our
          app in the meantime.
        </h6>
      </div>

      <AppDownload flex />

      <p className="text-high-contrast text-center text-[26px] font-medium font-Handlee mt-[35px] md:mt-[33px] mb-[93px] md:mb-[33px] max-w-[233px] md:max-w-full">
        feedbacks are more than welcome!
      </p>

      <BottomShape />
    </section>
  </MainContainer>
);
