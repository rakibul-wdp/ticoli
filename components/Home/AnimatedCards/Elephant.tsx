"use client";

import { IClassName } from "@/interface";
import Rive from "@rive-app/react-canvas";

export const Elephant = ({ className }: IClassName) => (
  <Rive
    src="./rive_elefant_only_one.riv"
    style={{ height: "30rem" }}
    className={className}
  />
);
