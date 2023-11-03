"use client";

import Image from "next/image";

import { SectionHeader } from "@/components";
import {
  child1,
  child2,
  child3,
  dotSheep,
  mobFriendSheep,
  sheep3,
  sheepPrimary,
  sheepSmall,
} from "@/public/assets/images";
import { AbsoluteImg, Button, Container, MainContainer } from "@/universal";
import { FriendsCard } from "./FriendsCard";
import { FriendSlider } from "./FriendsSlider";
import { friendsData } from "./data";
export const OurFriends = () => (
  <MainContainer className="relative lg:mb-40">
    <AbsoluteImg
      img={child3}
      className="-top-[113px] left-[10%] z-0 hidden lg:block"
    />
    <AbsoluteImg img={dotSheep} className="-top-[260px] right-[25%] z-0" />
    <AbsoluteImg
      img={child2}
      className="-top-[584px] right-[10%] z-0 hidden lg:block"
    />
    <AbsoluteImg
      img={child1}
      className="-top-[840px] right-[21.8%] xl:right-[23%] z-0 hidden lg:block"
    />

    <AbsoluteImg
      img={sheepSmall}
      className="top-60 -left-[4%] z-0 hidden lg:block "
    />
    <AbsoluteImg
      img={sheep3}
      className="top-28 -right-[15%] z-0 hidden lg:block"
    />

    <Container className="relative">
      <SectionHeader
        className="pt-[252px] relative"
        label="OUR FRIENDS"
        title="Meet some of the parents that are helping us to improve"
        titleMaxWidth="max-w-[761px]"
        btn={<Button>Join Now</Button>}
      />

      <div className=" relative overflow-hidden min-h-[660px] flex lg:hidden justify-center items-start mt-20">
        <Image
          src={mobFriendSheep}
          className="absolute -left-5 -bottom-[10%] z-0"
          alt=""
        />
        <FriendSlider />
      </div>

      <section className="lg:min-h-[980px] relative hidden lg:block">
        <Image
          src={sheepPrimary}
          className="absolute -left-2 bottom-60 z-0"
          alt=""
        />

        {friendsData.map((item, i) => (
          <FriendsCard key={i} {...item} />
        ))}
      </section>
    </Container>
  </MainContainer>
);
