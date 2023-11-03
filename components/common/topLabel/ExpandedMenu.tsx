"use client";

import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { IActiveLink, IActiveLinkAndCloseMenu, IOpen } from "@/interface";
import { menuClose } from "@/public/assets/icon";
import { heroTop } from "@/public/assets/images";
import { AbsoluteImg } from "@/universal";
import { MenuItems } from ".";
import { AppDownload, Logo } from "..";

export const ExpandedMenu = ({
  open,
  setOpen,
  isActive,
  activeLink,
  setActiveLink,
  setActiveLinkAndCloseMenu,
}: IActiveLink & IOpen & IActiveLinkAndCloseMenu) => {
  const toggle = open;
  const menu = useRef<any>();
  const tl = useRef<any>();

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
    });
    tl.current.to(menu.current, {
      css: { clipPath: "circle(140% at 90% 10%)" },
      duration: 0.3,
    });
  }, []);

  useEffect(() => {
    toggle ? tl.current.play() : tl.current.reverse();
  }, [toggle]);

  return (
    <nav
      ref={menu}
      className="clip-path-animation absolute top-0 left-0 h-screen bg-white z-50 w-full block lg:hidden"
    >
      <div className="flex flex-col justify-between items-start w-[95%] h-[90vh] mx-auto">
        <div className="py-3 flex justify-between items-center w-full">
          <Logo />
          <Image
            src={menuClose}
            className="cursor-pointer"
            onClick={() => setOpen(false)}
            alt=""
          />
        </div>
        <div className="px-3">
          <MenuItems
            activeLink={activeLink}
            isActive={isActive}
            setActiveLink={setActiveLink}
            setActiveLinkAndCloseMenu={setActiveLinkAndCloseMenu}
          />
        </div>

        <div className="flex justify-center items-center w-full relative pb-10">
          <AppDownload small gap="17.5px" mobWidth="w-[158px]" />
          <AbsoluteImg
            img={heroTop}
            className="-top-5 -right-16 -rotate-[30deg] w-[131.5px] -z-10"
          />
        </div>
      </div>
    </nav>
  );
};
