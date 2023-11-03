"use client";

import { twMerge } from "tailwind-merge";

import { ISectionHeader } from "@/interface";
import { CommonText, Label, Title } from "@/universal";

export const SectionHeader = ({
  label,
  text,
  textMaxWidth,
  title,
  titleMaxWidth,
  btn,
  className,
}: ISectionHeader) => (
  <section
    className={twMerge(
      `w-full flex justify-center items-center flex-col gap-2`,
      className
    )}
  >
    <Label uppercase>{label}</Label>

    <Title variant="H2" className={`text-center mx-auto ${titleMaxWidth}`}>
      {title}
    </Title>

    <div className={btn ? "mt-7" : "mt-4"}>
      {btn ? (
        btn
      ) : (
        <CommonText className={`text-center ${textMaxWidth}`}>
          {text}
        </CommonText>
      )}
    </div>
  </section>
);
