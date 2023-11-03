"use client";

import Link from "next/link";

import { IActiveLink, IActiveLinkAndCloseMenu } from "@/interface";
import { menuItems } from "@/public/data";
import { Dropdown } from ".";

export const MenuItems = ({
  activeLink,
  isActive,
  setActiveLink,
  setActiveLinkAndCloseMenu,
}: IActiveLink & IActiveLinkAndCloseMenu) => (
  <div className="flex flex-col  lg:flex-row justify-center items-start lg:items-center gap-4 lg:gap-8 font-sans">
    {menuItems.map(({ label, link, option }, i) =>
      option ? (
        <Dropdown
          key={i}
          link={link}
          label={label}
          dropdownItems={option}
          isActive={isActive}
          activeLink={activeLink}
          setActiveLinkAndCloseMenu={setActiveLinkAndCloseMenu}
          setActiveLink={setActiveLink}
        />
      ) : (
        <Link
          key={i}
          href={link}
          onClick={() => setActiveLinkAndCloseMenu(label)}
          className={`${
            activeLink === label && isActive(link)
              ? "text-surface-accent"
              : "text-black"
          }  text-center font-lato text-[42px] lg:text-sm font-normal lg:font-bold`}
        >
          {label}
        </Link>
      )
    )}
  </div>
);
