"use client";

import { Space } from "@/components";
import { AnimatedCards, Hero, OurFriends, Tailored } from "@/components/Home";

const Home = () => (
  <main>
    <Space topSpace />
    <Hero />
    <Tailored />
    <AnimatedCards />
    <OurFriends />
  </main>
);

export default Home;
