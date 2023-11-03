"use client";

import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Input } from "..";

interface IFormValue {
  name: string;
  email: string;
  message: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Email is required!"),
  email: Yup.string()
    .email("Invalid email address!")
    .required("Email is required!"),
  message: Yup.string().required("Message is required!"),
});

export const ContactForm = () => {
  const initialValues: IFormValue = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = (
    values: IFormValue,
    { resetForm }: FormikHelpers<IFormValue>
  ) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col justify-center items-center gap-2.5 mt-[60px] pb-[150px] lg:pb-[217px]">
          <Input name="name" type="text" placeholder="Name" />
          <Input name="email" type="email" placeholder="Enter your email" />
          <Input
            name="message"
            as="textarea"
            placeholder="Message"
            withBtn
            btnLabel="Send"
            isSubmitting={isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
};
