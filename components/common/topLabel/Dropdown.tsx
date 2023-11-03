"use client";

import Image from "next/image";
import Link from "next/link";

import { IDropdown } from "@/interface";
import { Space } from "../Space";

export const Dropdown = ({
  link,
  label,
  isActive,
  dropdownItems,
  activeLink,
  setActiveLinkAndCloseMenu,
}: IDropdown) => (
  <div className="group inline-block relative">
    <button
      className={`${
        activeLink.toLocaleLowerCase().includes(label.toLocaleLowerCase()) &&
        isActive(link)
          ? "text-surface-accent"
          : "text-black group-hover:text-surface-accent"
      } text-center font-lato inline-flex items-center text-[42px] lg:text-sm font-normal lg:font-bold`}
    >
      {label}
    </button>

    <div className="absolute -top-7 lg:top-6 -right-[125%] lg:-right-[100%] hidden pt-1 group-hover:block w-[180px] lg:w-[172px]">
      <Space className="py-5 w-full" />
      <div className="bg-white text-black rounded-md pb-2.5 border lg:border-none border-surface-accent border-opacity-50">
        {dropdownItems.map((item, i) => (
          <Link
            href={item.link}
            key={i}
            onClick={() => setActiveLinkAndCloseMenu(item.link)}
            className={`  hover:bg-surface-accent hover:bg-opacity-20 whitespace-no-wrap px-2.5 flex justify-start items-center gap-2.5 font-lato text-2xl lg:text-sm font-normal lg:font-bold ${
              i === 0 ? "rounded-t-md pt-2.5 pb-[9px]" : "py-[9px]"
            } ${
              activeLink.toLowerCase().includes(item.label.toLowerCase())
                ? "bg-surface-accent bg-opacity-20"
                : "bg-transparent"
            }`}
          >
            <Image src={item.icon} alt={item.label + " Ticoli"} />
            {item.label}
          </Link>
        ))}
        <p className="px-2.5 text-center mt-[9px] text-[#1C1917] opacity-40 text-sm font-lato leading-6">
          Can&rsquo;t find you here? <br />
          <span className="underline cursor-pointer"> Contact us</span>
        </p>
      </div>
    </div>
  </div>
);
