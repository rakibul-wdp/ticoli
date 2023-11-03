import {
  IBackgroundImage,
  IChildrenWithClassName,
  IColor,
  IText,
} from "./common";

export interface ITitleVariant {
  variant: "H1" | "H2" | "H3" | "H4" | "H5";
}

export interface ITitle extends IChildrenWithClassName, ITitleVariant {
  color?: IColor;
  lowOpacityMobH3?: boolean;
  lowOpacityWebH4?: boolean;
}

export interface IH extends IChildrenWithClassName, ITitleVariant {}

export interface ICommonText extends IText {
  text?: "common" | "sub";
}

export interface ILabel extends IText {
  color?: IColor;
  uppercase?: boolean;
}

export interface ICTA extends IChildrenWithClassName {}

export interface IButton extends IChildrenWithClassName {
  type?: "button" | "reset" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  mobIcon?: boolean;
  mobSmall?: boolean;
}

export interface IBgContainer
  extends IChildrenWithClassName,
    IBackgroundImage {}
