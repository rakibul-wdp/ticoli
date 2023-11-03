"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { IAppDownload } from "@/interface";
import { appDownloads } from "@/public/data";
import Image from "next/image";

export const AppDownload = ({
  small,
  gap = "20px",
  className,
  flex,
  hidden,
  mobWidth,
}: IAppDownload) => (
  <section
    className={twMerge(
      `flex justify-center items-center relative ${
        (gap === "12px" && "gap-3") ||
        (gap === "17.5px" && "gap-[17.5px]") ||
        (gap === "20px" && "gap-5")
      } ${flex && "flex-col md:flex-row"} ${
        (hidden === "mob" && "hidden md:flex") ||
        (hidden === "tab" && "hidden xl:flex") ||
        (hidden === "web" && "flex lg:hidden")
      }`,
      className
    )}
  >
    {appDownloads.map(({ icon, mobIcon, link }, i) => (
      <Link href={link} key={i} className="">
        {small && !flex ? (
          <Image
            className={`${mobWidth ? mobWidth : "w-[123px]"} md:w-auto`}
            src={mobIcon}
            alt=""
          />
        ) : (
          <Image
            className={`${
              flex ? "w-[180px]" : `${mobWidth ? mobWidth : "w-[123px]"}`
            } md:w-auto`}
            src={icon}
            alt=""
          />
        )}
      </Link>
    ))}
  </section>
);
