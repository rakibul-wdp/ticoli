import { ICardData, IFriend, ITailored } from "@/interface";
import {
  birdLight,
  bookOpenTextLight,
  smileyWinkLight,
  userLight,
} from "../assets/icon";
import {
  goodMorning,
  goodNightOwlCard,
  parson1,
  parson2,
  parson3,
  parson4,
  parsonBg1,
  parsonBg2,
  parsonBg3,
  parsonBg4,
  parsonMob1,
  parsonMob3,
  parsonMob4,
  tales,
} from "../assets/images";

export const sliderData: ICardData[] = [
  {
    id: 0,
    imageURL: goodNightOwlCard,
  },
  {
    id: 1,
    imageURL: goodMorning,
  },
  {
    id: 2,
    imageURL: tales,
  },
  {
    id: 3,
    imageURL: goodNightOwlCard,
  },
  {
    id: 4,
    imageURL: goodMorning,
  },
  {
    id: 5,
    imageURL: tales,
  },
];

export const friendsData: IFriend[] = [
  {
    img: parson1,
    bgImage: parsonBg1,
    position: "left-0 -top-20 z-0",
    minWidth: "w-[252px]",
    minHeight: "h-[328px]",
    bgPosition: "top-[24px]",
  },
  {
    img: parson2,
    bgImage: parsonBg2,
    position: "left-20 top-24 z-10",
    minWidth: "w-[315px]",
    minHeight: "h-[414px]",
    bgPosition: "top-[61px]",
    playButton: true,
  },
  {
    img: parson3,
    bgImage: parsonBg3,
    position: "bottom-64 right-48 z-10",
    minWidth: "w-[365px]",
    minHeight: "h-[507px]",
    bgPosition: "top-[70px]",
    rattingCard: true,
  },
  {
    img: parson4,
    bgImage: parsonBg4,
    position: "right-0 -top-20 z-0",
    minWidth: "w-[315px]",
    minHeight: "h-[458px]",
    bgPosition: "top-[137px]",
  },
];

export const friendsSlidesData = [
  {
    url: parsonMob1,
    title: "Rene Braun 1",
    des: `It's engaging, fun, and motivates them to read more. Their enthusiasm for reading has grown, and so has their vocabulary and comprehension. As a dad, I couldn't be happier. Highly recommended!`,
    ratting: 3,
  },
  {
    url: parsonMob3,
    title: "Rene Braun 2",
    des: `It's engaging, fun, and motivates them to read more. Their enthusiasm for reading has grown, and so has their vocabulary and comprehension. As a dad, I couldn't be happier. Highly recommended!`,
    ratting: 5,
  },
  {
    url: parsonMob4,
    title: "Rene Braun 3",
    des: `It's engaging, fun, and motivates them to read more. Their enthusiasm for reading has grown, and so has their vocabulary and comprehension. As a dad, I couldn't be happier. Highly recommended!`,
    ratting: 4,
  },
];

export const tailors: ITailored[] = [
  {
    img: bookOpenTextLight,
    title: "Reading",
    des: "Slowly building up richer literature routine while less distraction",
  },
  {
    img: birdLight,
    title: "Nature",
    des: "Understand nature, animals and how to be respectful with our planet",
  },
  {
    img: userLight,
    title: "Social",
    des: "Emotional inteligence and first steps to complex social interactions",
  },
  {
    img: smileyWinkLight,
    title: "Fun",
    des: "Enjoy and have fun while learning and be curious about everything",
  },

  {
    img: bookOpenTextLight,
    title: "Real-Life",
    des: "Slowly building up richer literature routine while less distraction",
  },
  {
    img: birdLight,
    title: "Music",
    des: "Learn new instrument or understand the basics of music of different genres",
  },
  {
    img: userLight,
    title: "Sports & Health",
    des: "Building interest in sports and health while learning about the topics",
  },
  {
    img: smileyWinkLight,
    title: "Cooking",
    des: "Discover the joy of cooking through interactive adventures in the culinary world",
  },
];

export const tailorsAbout: ITailored[] = [
  {
    img: smileyWinkLight,
    title: "Fun",
    des: "Children, parents and team! Not having fun is not an option! We want to make it truly different, build a strong and happy community.",
  },
  {
    img: bookOpenTextLight,
    title: "Art",
    des: "Explore interactivity and content creation to navigate through different types of arts and media.",
  },
  {
    img: birdLight,
    title: "Learning",
    des: "For children to learn the basics, for parents to learn curiosities and art, for the team to grow as professionals and experiment ideas.",
  },
];
