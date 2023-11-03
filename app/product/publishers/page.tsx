"use client";

import { Space } from "@/components";
import { AnimatedCards, OurFriends } from "@/components/Home";
import { Hero, HowItWorks, SubHero } from "@/components/Product/Publishers";

const Publishers = () => (
  <main className="overflow-x-hidden">
    <Space topSpace />
    <Hero />
    <SubHero />
    <HowItWorks />
    <AnimatedCards />
    <OurFriends />
  </main>
);

export default Publishers;
