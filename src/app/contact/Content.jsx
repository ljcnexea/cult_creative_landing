"use client";

import * as yup from "yup";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import FormInput from "./FormInput.jsx";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

const Content = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      const response = await fetch("/api/submit-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (response.ok) {
        alert("Message sent successfully");
        resetForm();
      } else {
        console.log(result.error);
        alert(result.error);
      }
    } catch (error) {
      console.log(error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center gap-6"
    >
      <h1 className="lg:text-8xl xl:text-8xl text-5xl xl:-tracking-[.3rem] lg:-tracking-[.3rem] -tracking-[.1rem]">
        get{" "}
        <span className="font-times font-medium">
          in <span className="italic xl:-tracking-[.5rem]">touch</span>
        </span>
      </h1>
      <div className="flex xl:flex-row lg:flex-row flex-col justify-center">
        <div className="flex flex-col flex-start justify-items-start p-7 basis-1/2">
          <div className="flex flex-col justify-center items-center align-center p-8">
            <Icon
              icon="icomoon-free:location"
              className="text-6xl text-[#8A5AFE]"
            />
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-4">
            <h3 className="text-3xl font-semibold">address</h3>
            <h3 className="xl:w-[70%] lg:w-[70%] w-[70%] justify-text">
              Lot 4-401 & 4-402, Level 4, The Starling Mall, Jalan SS 21/37,
              Damansara Utama, 47400 Petaling Jaya, Selangor, Malaysia.
            </h3>
          </div>
        </div>
        <div className="flex flex-col flex-start justify-items-start p-7 basis-1/2">
          <div className="flex flex-col justify-center items-center align-center p-8">
            <Icon
              icon="tabler:mail-filled"
              className="text-6xl text-[#8A5AFE]"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-3xl font-semibold">Mail</h3>
            <h3 className="text-xl">hello@cultcreative.asia</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-[80%]">
        <Formik
          initialValues={{ name: "", email: "", subject: "", message: "" }}
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-6">
              <div className="flex xl:flex-row lg:flex-row flex-col gap-5">
                <div className="w-full">
                  <Field name="name">
                    {({ field }) => (
                      <div className="w-full">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium leading-6 text-slate-400"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          {...field}
                          className="w-full p-3 rounded-md shadow-sm bg-[#CFB5F6] text-black"
                        />
                        {touched.name && errors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
                <div className="w-full">
                  <Field name="email">
                    {({ field }) => (
                      <div className="w-full">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-slate-400"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          {...field}
                          className="w-full p-3 rounded-md shadow-sm bg-[#CFB5F6] text-black"
                        />
                        {touched.email && errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
              </div>
              <div className="w-full">
                <Field name="subject">
                  {({ field }) => (
                    <div className="w-full">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium leading-6 text-slate-400"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        {...field}
                        className="w-full p-3 rounded-md shadow-sm bg-[#CFB5F6] text-black"
                      />
                      {touched.subject && errors.subject && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.subject}
                        </p>
                      )}
                    </div>
                  )}
                </Field>
              </div>
              <div className="w-full">
                <Field name="message">
                  {({ field }) => (
                    <div className="w-full">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium leading-6 text-slate-400"
                      >
                        Message
                      </label>
                      <textarea
                        {...field}
                        className="w-full p-3 rounded-md shadow-sm bg-[#CFB5F6] text-black"
                      />
                      {touched.message && errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>
                  )}
                </Field>
              </div>
              <div className="flex justify-center items-center w-full">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  type="submit"
                  disabled={loading}
                  className={`bg-[#8A5AFE] py-2 px-12 rounded-full text-[#F4F4F4] ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Sending..." : "Send message"}
                </motion.button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </motion.div>
  );
};

export default Content;
