"use client";

import { publishersWordData } from "@/public/data";
import { CommonText, Container, Title } from "@/universal";
import type { NextPage } from "next";
import Image from "next/image";

export const HowItWorkMob: NextPage = () => (
  <Container className="my-20 flex flex-col justify-center items-center gap-10 lg:hidden">
    {publishersWordData.map(({ des, img, title }, i) => (
      <section
        key={i}
        className="w-full max-w-[327px] flex flex-col justify-start items-center gap-2 rounded-xl border-2 px-4 pt-2 pb-6 relative"
      >
        <hr
          className={`w-10 bg-gray-400 rotate-90 absolute -top-6 left-5 ${
            i === 0 && "hidden"
          }`}
        />
        <div className="absolute -top-4 left-6 w-8 h-8 rounded-full flex justify-center items-center border bg-white">
          {i + 1}
        </div>
        <Image src={img} alt="" />
        <Title variant="H5" className="text-center">
          {title}
        </Title>
        <CommonText className="text-center text-[16px]">{des}</CommonText>
      </section>
    ))}
  </Container>
);
