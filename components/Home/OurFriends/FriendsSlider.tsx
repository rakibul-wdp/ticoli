"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { RattingCard } from "./RattingCard";
import { friendsSlidesData } from "./data";

export const FriendSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);

  useEffect(() => {
    setPreviousIndex(
      currentIndex > 0 ? currentIndex - 1 : friendsSlidesData.length - 1
    );
    setNextIndex(
      currentIndex === friendsSlidesData.length - 1 ? 0 : currentIndex + 1
    );

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === friendsSlidesData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="relative flex justify-center items-center flex-col">
      <div className="flex justify-center items-center gap-7 w-full overflow-x-hidden">
        <Image
          className="min-w-[256px] opacity-50"
          src={friendsSlidesData[previousIndex].url}
          alt="gallery image"
        />
        <Image
          className="min-w-[256px]"
          src={friendsSlidesData[currentIndex].url}
          alt="gallery image"
        />
        <Image
          className="min-w-[256px]  opacity-50"
          src={friendsSlidesData[nextIndex].url}
          alt="gallery image"
        />
      </div>

      <RattingCard
        des={friendsSlidesData[currentIndex].des}
        ratting={friendsSlidesData[currentIndex].ratting}
        title={friendsSlidesData[currentIndex].title}
        className="-mt-20 relative mx-auto"
        mob
        currentIndex={currentIndex}
        length={friendsSlidesData.length}
      />
    </div>
  );
};
