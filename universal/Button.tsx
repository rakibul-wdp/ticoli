"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { IButton } from "@/interface";
import { inputSubmitIcon } from "@/public/assets/icon";

export const Button = ({
  children,
  className,
  onClick,
  type = "button",
  disabled,
  mobIcon,
  mobSmall,
}: IButton) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={twMerge(
      `bg-high-contrast ${
        mobIcon
          ? "p-3 lg:p-0 lg:px-8 lg:py-3 text-sm lg:text-base"
          : "px-8 py-3 text-base"
      } rounded-lg text-surface text-center font-sora font-extrabold`,
      className
    )}
  >
    <Image
      src={inputSubmitIcon}
      alt=""
      className={mobIcon ? "block lg:hidden" : "hidden"}
    />

    <span className={mobIcon ? "hidden lg:block" : ""}> {children}</span>
  </button>
);
