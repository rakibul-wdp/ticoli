import { IAppDownloads, ILinkIcon, IMenuItem } from "@/interface";
import {
  babyLight,
  bookLight,
  fbOutline,
  instOutline,
  mobAppStore,
  mobGooglePlay,
  twOutline,
} from "../assets/icon";
import { appStore, googlePlay } from "../assets/images";

export const appDownloads: IAppDownloads[] = [
  {
    link: "/",
    mobIcon: mobAppStore,
    icon: appStore,
  },
  {
    link: "/",
    mobIcon: mobGooglePlay,
    icon: googlePlay,
  },
];

export const menuItems: IMenuItem[] = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/product",
    label: "Product",
    option: [
      {
        icon: babyLight,
        link: "/product/parents",
        label: "Parents",
      },
      {
        icon: bookLight,
        link: "/product/publishers",
        label: "Publishers",
      },
    ],
  },
  {
    link: "/blog",
    label: "Blog",
  },
  {
    link: "/about",
    label: "About",
  },
  {
    link: "/contact",
    label: "Contact",
  },
];

export const socialMedia: ILinkIcon[] = [
  {
    icon: fbOutline,
    link: "/",
  },
  {
    icon: instOutline,
    link: "/",
  },
  {
    icon: twOutline,
    link: "/",
  },
];
