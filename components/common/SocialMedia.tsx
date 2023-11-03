"use client";

import Image from "next/image";
import Link from "next/link";

import { socialMedia } from "@/public/data";

export const SocialMedia = () => (
  <div className="flex justify-between items-center gap-[5px]">
    {socialMedia.map(({ icon, link }, i) => (
      <Link
        key={i}
        href={link}
        className="w-8 h-8 flex justify-center items-center border rounded border-[#ffffff33]"
      >
        <Image src={icon} alt="" />
      </Link>
    ))}
  </div>
);
