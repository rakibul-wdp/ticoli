"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { menuIcon, menuIconWhite } from "@/public/assets/icon";
import { heroTop } from "@/public/assets/images";
import { menuItems } from "@/public/data";
import { AbsoluteImg, Container, MainContainer } from "@/universal";
import { ExpandedMenu, MenuItems } from ".";
import { AppDownload, Logo } from "..";

export const Navbar = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);
  const isActive = (link: string) => pathname.startsWith(link);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    menuItems.map(({ label, option }) => {
      if (label.toLowerCase() === pathname.split("/")[1].toLowerCase()) {
        if (option) {
          option.map((item) => {
            if (
              item.label.toLowerCase() === pathname.split("/")[2].toLowerCase()
            ) {
              setActiveLink(item.link);
            }
          });
        } else {
          setActiveLink(label);
        }
      }
    });
    pathname === "/" && setActiveLink("Home");
  }, [pathname]);

  const setActiveLinkAndCloseMenu = (label: string) => {
    setActiveLink(label);
    setOpen(false);
  };

  const handleMenuClicked = () => {
    setOpen((prv) => !prv);
  };

  // change nav color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MainContainer navbar isScrolling={isScrolling}>
      <ExpandedMenu
        open={open}
        setOpen={setOpen}
        isActive={isActive}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        setActiveLinkAndCloseMenu={setActiveLinkAndCloseMenu}
      />
      <Container>
        <nav className="flex justify-between items-center h-[72px] lg:h-[100px]">
          <Logo />

          {/* Hamburger Icon */}
          <Image
            src={isScrolling ? menuIcon : menuIconWhite}
            className="cursor-pointer block lg:hidden  transition-all ease-in-out delay-150"
            onClick={handleMenuClicked}
            alt=""
          />

          <section className="hidden lg:flex justify-end items-center gap-8">
            <MenuItems
              activeLink={activeLink}
              isActive={isActive}
              setActiveLink={setActiveLink}
              setActiveLinkAndCloseMenu={setActiveLinkAndCloseMenu}
            />
            <AppDownload small gap="12px" />
          </section>
        </nav>
      </Container>
      <AbsoluteImg
        img={heroTop}
        className="top-[70%] -left-10 hidden lg:block"
        zIndex="z-50"
      />
    </MainContainer>
  );
};
