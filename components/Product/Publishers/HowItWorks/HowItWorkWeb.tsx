"use client";

import { lineShape } from "@/public/assets/images";
import { AbsoluteImg, Container } from "@/universal";
import type { NextPage } from "next";

export const HowItWorkWeb: NextPage = () => (
  <Container className="w-full max-w-5xl min-h-[500px] relative mt-20 hidden lg:block">
    <AbsoluteImg
      img={lineShape}
      className="top-0 w-full max-w-5xl h-[286px] mx-auto"
    />
    <div className="w-full max-w-5xl h-96 absolute -top-8 -left-[2px] flex justify-start gap-10">
      <div className="w-[210px] flex flex-col justify-center items-center gap-2">
        <p className="text-xl font-normal border rounded-full flex justify-center items-center leading-[64px] w-[64px] bg-white">
          1
        </p>
        <div className="flex-1 flex flex-col items-center justify-start gap-[8px] mt-2">
          <h3 className="text-lg leading-[24px] font-sora font-extrabold">
            Book selection
          </h3>
          <p className="text-lg leading-[28px] font-source-sans font-normal text-center">
            We select together what and how to build the book(s)
          </p>
        </div>
      </div>
      <div className="w-[210px] flex flex-col justify-center items-center gap-2">
        <p className="text-xl font-normal border rounded-full flex justify-center items-center leading-[64px] w-[64px] bg-white">
          2
        </p>
        <div className="flex-1 flex flex-col items-center justify-start gap-[8px] mt-2">
          <h3 className="text-lg leading-[24px] font-sora font-extrabold">
            Vector Redraw
          </h3>
          <p className="text-lg leading-[28px] font-source-sans font-normal text-center">
            We are going to redraw the story in a app-friendly format
          </p>
        </div>
      </div>
      <div className="w-[210px] flex flex-col justify-center items-center gap-2">
        <p className="text-xl font-normal border rounded-full flex justify-center items-center leading-[64px] w-[64px] bg-white">
          3
        </p>
        <div className="flex-1 flex flex-col items-center justify-start gap-[8px] mt-2">
          <h3 className="text-lg leading-[24px] font-sora font-extrabold">
            Animation
          </h3>
          <p className="text-lg leading-[28px] font-source-sans font-normal text-center">
            Add micro interactions to keep our readers engaged
          </p>
        </div>
      </div>
      <div className="w-[210px] flex flex-col justify-center items-center gap-2">
        <p className="text-xl font-normal border rounded-full flex justify-center items-center leading-[64px] w-[64px] bg-white">
          4
        </p>
        <div className="flex-1 flex flex-col items-center justify-start gap-[8px] mt-2">
          <h3 className="text-lg leading-[24px] font-sora font-extrabold">
            Sound
          </h3>
          <p className="text-lg leading-[28px] font-source-sans font-normal text-center">
            Add the last layer of immersion with sounds and musics
          </p>
        </div>
      </div>
    </div>
    <div className="w-full max-w-5xl h-96 absolute -bottom-[140px] -right-1.5 flex justify-start gap-10">
      <div className="w-[210px] flex flex-col justify-center items-center gap-2">
        <p className="text-xl font-normal border rounded-full flex justify-center items-center leading-[64px] w-[64px] bg-white">
          5
        </p>
        <div className="flex-1 flex flex-col items-center justify-start gap-[8px] mt-2">
          <h3 className="text-lg leading-[24px] font-sora font-extrabold">
            Development
          </h3>
          <p className="text-lg leading-[28px] font-source-sans font-normal text-center">
            Build the all together in the app and make sure it all works
          </p>
        </div>
      </div>
      <div className="w-[210px] flex flex-col justify-center items-center gap-2">
        <p className="text-xl font-normal border rounded-full flex justify-center items-center leading-[64px] w-[64px] bg-white">
          6
        </p>
        <div className="flex-1 flex flex-col items-center justify-start gap-[8px] mt-2">
          <h3 className="text-lg leading-[24px] font-sora font-extrabold">
            Review
          </h3>
          <p className="text-lg leading-[28px] font-source-sans font-normal text-center">
            We review together the story and perform final adjustments
          </p>
        </div>
      </div>
      <div className="w-[210px] flex flex-col justify-center items-center gap-2">
        <p className="text-xl font-normal border rounded-full flex justify-center items-center leading-[64px] w-[64px] bg-white">
          7
        </p>
        <div className="flex-1 flex flex-col items-center justify-start gap-[8px] mt-2">
          <h3 className="text-lg leading-[24px] font-sora font-extrabold">
            Publish
          </h3>
          <p className="text-lg leading-[28px] font-source-sans font-normal text-center">
            We publish the new story in the app and track usage
          </p>
        </div>
      </div>
      <div className="w-[210px] flex flex-col justify-center items-center gap-2">
        <p className="text-xl font-normal border rounded-full flex justify-center items-center leading-[64px] w-[64px] bg-white">
          8
        </p>
        <div className="flex-1 flex flex-col items-center justify-start gap-[8px] mt-2">
          <h3 className="text-lg leading-[24px] font-sora font-extrabold">
            Promote book
          </h3>
          <p className="text-lg leading-[28px] font-source-sans font-normal text-center">
            We push real books to the parents and promote offline reading
          </p>
        </div>
      </div>
    </div>
  </Container>
);
