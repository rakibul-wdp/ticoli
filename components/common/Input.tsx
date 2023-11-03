"use client";

import { IInput } from "@/interface";
import { Button } from "@/universal";
import { Field } from "formik";
import { FormikError } from "./FormikError";

export const Input = ({
  as,
  name,
  type,
  placeholder,
  withBtn,
  btnLabel = "Sign Up",
  isSubmitting,
}: IInput) => {
  const allClassName = `bg-surface outline-none text-subtle-contrast text-base md:text-lg w-full ${
    withBtn && "lg:max-w-[343px]"
  } ${as === "textarea" ? "h-full" : "h-7"}`;

  return (
    <section
      className={`w-full input-group-with lg:w-[512px] lg:max-w-[512px] flex justify-between gap-4 bg-surface rounded-xl p-2 pl-4 relative ${
        as === "textarea" ? "h-[267px] items-end" : "h-16 items-center"
      }`}
    >
      {as === "textarea" ? (
        <Field
          as="textarea"
          name={name}
          placeholder={placeholder}
          className={allClassName}
        />
      ) : (
        <Field
          type={type}
          name={name}
          placeholder={placeholder}
          className={allClassName}
        />
      )}

      {withBtn && (
        <Button type="submit" disabled={isSubmitting} mobIcon>
          {btnLabel}
        </Button>
      )}
      <FormikError name={name} component="div" />
    </section>
  );
};
