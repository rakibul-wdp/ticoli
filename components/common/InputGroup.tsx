"use client";

import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { Input } from "./Input";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

interface EmailValue {
  email: string;
}

export const InputGroup = () => {
  const initialValues: EmailValue = { email: "" };

  const handleSubmit = (
    { email }: EmailValue,
    { resetForm }: FormikHelpers<EmailValue>
  ) => {
    console.log(email);
    resetForm();
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {({ isSubmitting }) => (
        <Form>
          <Input
            isSubmitting={isSubmitting}
            name="email"
            placeholder="Enter Your Email"
            type="email"
            withBtn
          />
        </Form>
      )}
    </Formik>
  );
};
