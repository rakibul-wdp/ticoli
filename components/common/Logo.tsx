"use client";

import Image from "next/image";
import Link from "next/link";

import { ILogo } from "@/interface";
import { logo, logoMob, logoWhite } from "@/public/assets";

export const Logo = ({ link = "/", variant = "black" }: ILogo) => (
  <Link href={link}>
    {variant === "black" ? (
      <>
        <Image src={logoMob} className="block lg:hidden" alt="ticoli" />
        <Image src={logo} className="hidden lg:block" alt="ticoli" />
      </>
    ) : (
      <Image src={logoWhite} alt="ticoli" />
    )}
  </Link>
);
