"use client";

import { Space } from "@/components";
import { AnimatedCards, OurFriends } from "@/components/Home";
import { Hero, Tailored } from "@/components/Product/Parents";
import { SubHero } from "@/components/Product/Publishers";

const Parents = () => (
  <main className="overflow-x-hidden">
    <Space topSpace />
    <Hero />
    <SubHero />
    <Tailored />
    <AnimatedCards />
    <OurFriends />
  </main>
);

export default Parents;
