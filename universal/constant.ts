import { IColor, IFontFamily, IFontWeight } from "@/interface";

export const findTextColor = (color: IColor) =>
  (color === "surface" && "text-surface") ||
  (color === "surface-sunken" && "text-surface-sunken") ||
  (color === "surface-accent" && "text-surface-accent") ||
  (color === "surface-accent-sunken" && "text-surface-accent-sunken") ||
  (color === "high-contrast" && "text-high-contrast") ||
  (color === "low-contrast" && "text-low-contrast") ||
  (color === "subtle-contrast" && "text-subtle-contrast");

export const findFontWeight = (font: IFontWeight) =>
  (font === "400" && "font-normal") ||
  (font === "500" && "font-medium") ||
  (font === "600" && "font-semibold") ||
  (font === "700" && "font-bold") ||
  (font === "800" && "font-extrabold") ||
  (font === "900" && "font-black");

export const findFontFamily = (fontFamily: IFontFamily) =>
  (fontFamily === "lato" && "font-lato") ||
  (fontFamily === "sora" && "font-sora") ||
  (fontFamily === "source-sans" && "font-source-sans");
