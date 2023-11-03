import { IClassName, ILinkIcon, ILinkLabel } from "./common";

export interface IAppDownloads extends ILinkIcon {
  mobIcon: StaticImageData;
}

export interface ICard {
  img: StaticImageData;
  title: string;
  des: string;
}

export interface ITailored extends IClassName, ICard {
  width?: "sm" | "md";
}

export interface ICardData {
  id: number;
  imageURL: StaticImageData | string;
}

export interface IMenuItem extends ILinkLabel {
  label: string;
  option?: IMenuOption[];
}
