"use client";

import { twMerge } from "tailwind-merge";

import { IClassName } from "@/interface";
import { CommonText, Title } from "@/universal";
import { InputGroup } from ".";

export const JoinCommunity = ({ className }: IClassName) => (
  <section
    className={twMerge(
      "flex flex-col justify-center items-center gap-4",
      className
    )}
  >
    <Title variant="H3" color="surface">
      Join Our Community
    </Title>

    <CommonText fontWeight="700" className="mb-4 text-center">
      Stories to keep our children learning and engaged
    </CommonText>

    <InputGroup />
  </section>
);
