"use client";
import React, { Suspense } from "react";
import Header from "@/app/components/Header";
import LastSection from "@/app/sections/brandsection/LastSection";
import { motion } from "framer-motion";
import FormInput from "@/app/components/FormInput";
import Image from "next/image";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useState } from "react";

import countries from "../../contants/countries.json";
import toast from "react-hot-toast";

const CreatorForm = () => {
  const color = "#006D53";

  const [loading, setLoading] = useState();

  const onSubmit = async (value, resetForm) => {
    setLoading(true);
    await fetch("/api/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(value),
    })
      .then((res) => res.json())
      .then((val) => {
        toast.success(val.message);
        setLoading(false);
        resetForm();
      })
      .catch((err) => alert(JSON.stringify(err)))
      .finally(() => setLoading(false));
  };

  const schema = yup.object({
    name: yup
      .string()
      .min(5, "At least 5 characters required")
      .required("Required"),
    pronoun: yup.string().required("Required"),
    phoneNumber: yup
      .number()
      .positive("Invalid character “-”")
      .integer("Invalid character “.”")
      .min(100_000_00, "Too short")
      .max(999_99_9999_9999_99, "Too long")
      .required("Required"),
    email: yup.string().email("Invalid email address").required("Required"),
    nationality: yup.string().required("Required"),
    location: yup.string().required("Required"),
    dateOfBirth: yup
      .date()
      // Five-digit years can cause a form error
      .max("9999-12-31", "Too long")
      .required("Required"),
    instaUsername: yup.string(),
    tiktokUsername: yup.string(),
    languages: yup.array().required("Required"),
    interests: yup
      .array()
      .min(3, "Select 3 options")
      .max(3, "Select 3 options")
      .required("Required"),
    employmentType: yup.string().required("Required"),
  });

  const validateOtherField = (value) => (value === "" ? "Required" : "");

  return (
    <main className="flex min-h-screen flex-col">
      <Header logo={"/images/logo.svg"} />
      <Suspense fallback={<p>Loading...</p>}>
        <section
          className={`flex p-10 gap-5 items-center justify-center bg-[${color}]`}
        >
          <div className="basis-1/2 hidden xl:block">
            <Image
              src={
                "https://storage.googleapis.com/landing-cultcreative/creator/Cult%20Creative%202%20(1).jpg"
              }
              alt="creator"
              width={600}
              height={600}
              className="rounded-lg mx-auto"
            />
          </div>
          <div className="flex flex-col gap-5 text-[#F4F4F4]">
            <div className="flex flex-col gap-5">
              <h1 className="sm:text-8xl text-8xl -tracking-[.35rem]">
                get{" "}
                <span className="font-times italic -tracking-[.6rem] text-8xl">
                  started.
                </span>
              </h1>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-xl font-bold -tracking-[.05rem]">
                We’re excited to work together.
                <br />
                Tell us who you are and we’ll get back to you with suitable
                brand deals.
              </h1>
              <Formik
                initialValues={{
                  name: "",
                  pronoun: "",
                  phoneNumber: "",
                  email: "",
                  nationality: "",
                  location: "",
                  dateOfBirth: "",
                  instaUsername: "",
                  tiktokUsername: "",
                  languages: [],
                  otherlanguagesString: "",
                  interests: [],
                  otherinterestsString: "",
                  employmentType: "",
                  otherEmploymentType: "",
                }}
                onSubmit={(values, { resetForm }) => {
                  alert(JSON.stringify(values));
                  onSubmit(values, resetForm);
                }}
                validationSchema={schema}
              >
                <Form>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <Field name="name">
                      {({ field, form: { errors, touched } }) => (
                        <>
                          <FormInput
                            label="Name"
                            type="text"
                            field={field}
                            color={color}
                            errors={touched.name && errors.name}
                          />
                        </>
                      )}
                    </Field>
                    <div className="sm:col-span-3">
                      <Field name="pronoun">
                        {({ field, form: { errors, touched } }) => (
                          <>
                            <label
                              htmlFor="pronoun"
                              className="block text-sm font-medium leading-6"
                            >
                              Pronouns
                            </label>
                            <div className="mt-2">
                              <select
                                name="pronoun"
                                {...field}
                                className={`block w-full rounded-full border-2 py-2 px-4 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 bg-[${color}] ${
                                  errors.pronoun &&
                                  touched.pronoun &&
                                  "border-red-500"
                                }`}
                              >
                                <option value="">...</option>
                                <option>He/Him</option>
                                <option>She/Her</option>
                                <option>They/Them</option>
                                <option>Others</option>
                              </select>
                            </div>
                            {errors.pronoun && touched.pronoun && (
                              <p class="text-red-500 text-xs mx-2 my-1">
                                {errors.pronoun}
                              </p>
                            )}
                          </>
                        )}
                      </Field>
                    </div>
                    <Field name="phoneNumber">
                      {({ field, form: { errors, touched } }) => (
                        <>
                          <FormInput
                            label="Phone Number"
                            type="number"
                            field={field}
                            color={color}
                            errors={touched.phoneNumber && errors.phoneNumber}
                          />
                        </>
                      )}
                    </Field>
                    <Field name="email">
                      {({ field, form: { errors, touched } }) => (
                        <FormInput
                          label="Email Address"
                          type="email"
                          field={field}
                          color={color}
                          errors={touched.email && errors.email}
                        />
                      )}
                    </Field>
                    <div className="sm:col-span-3">
                      <Field name="nationality">
                        {({ field, form: { errors, touched } }) => (
                          <>
                            <label
                              htmlFor="nationality"
                              className="block text-sm font-medium leading-6"
                            >
                              Nationality
                            </label>
                            <div className="mt-2">
                              <select
                                {...field}
                                className={`block w-full rounded-full border-2 py-2 px-4 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 bg-[${color}] ${
                                  errors.nationality &&
                                  touched.nationality &&
                                  "border-red-500"
                                }`}
                              >
                                <option value="">...</option>
                                {countries.map((elem) => {
                                  return (
                                    <option key={elem.code} value={elem.name}>
                                      {elem.name}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                            {errors.nationality && touched.nationality && (
                              <p class="text-red-500 text-xs mx-2 my-1">
                                {errors.nationality}
                              </p>
                            )}
                          </>
                        )}
                      </Field>
                    </div>
                    <div className="sm:col-span-3">
                      <Field name="location">
                        {({ field, form: { errors, touched } }) => (
                          <>
                            <label
                              htmlFor="location"
                              className="block text-sm font-medium leading-6"
                            >
                              Current Location
                            </label>
                            <div className="mt-2">
                              <select
                                name="location"
                                {...field}
                                className={`block w-full rounded-full border-2 py-2 px-4 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 bg-[${color}] ${
                                  errors.location &&
                                  touched.location &&
                                  "border-red-500"
                                }`}
                              >
                                <option value="">...</option>
                                <option>Kuala Lumpur</option>
                                <option>Petaling Jaya</option>
                                <option>Johor Bahru</option>
                                <option>Penang</option>
                              </select>
                            </div>
                            {errors.location && touched.location && (
                              <p class="text-red-500 text-xs mx-2 my-1">
                                {errors.location}
                              </p>
                            )}
                          </>
                        )}
                      </Field>
                    </div>
                    <Field name="dateOfBirth">
                      {({ field, form: { errors, touched } }) => (
                        <FormInput
                          label="Date of Birth"
                          type="date"
                          field={field}
                          color={color}
                          errors={touched.dateOfBirth && errors.dateOfBirth}
                        />
                      )}
                    </Field>
                    <Field name="instaUsername">
                      {({ field, form: { errors, touched } }) => (
                        <FormInput
                          label="Instagram Username"
                          type="text"
                          field={field}
                          color={color}
                          errors={touched.instaUsername && errors.instaUsername}
                        />
                      )}
                    </Field>
                    <Field name="tiktokUsername">
                      {({ field, form: { errors, touched } }) => (
                        <FormInput
                          label="TikTok Username"
                          type="text"
                          field={field}
                          color={color}
                          errors={
                            touched.tiktokUsername && errors.tiktokUsername
                          }
                        />
                      )}
                    </Field>
                    <div className="sm:col-span-3">
                      <Field name="languages">
                        {({ field, form: { errors, touched } }) => (
                          <>
                            <label
                              htmlFor="languages"
                              className="block text-sm font-medium leading-6"
                            >
                              Languages (Ctrl+click to select multiple)
                            </label>
                            <div className="mt-2">
                              <select
                                {...field}
                                multiple={true}
                                className={`block w-full border-2 py-2 px-4 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 bg-[${color}] ${
                                  errors.languages &&
                                  touched.languages &&
                                  "border-red-500"
                                }`}
                              >
                                <option>English</option>
                                <option>Malay</option>
                                <option>Mandarin</option>
                                <option>Cantonese</option>
                                <option>Tamil</option>
                                <option>Korean</option>
                                <option>Hindi</option>
                                <option>Others</option>
                              </select>
                            </div>
                            {field.value.includes("Others") && (
                              <Field
                                name="otherlanguagesString"
                                validate={validateOtherField}
                              >
                                {({ field, form: { errors, touched } }) => (
                                  <>
                                    <FormInput
                                      placeholder="Please specify your languages"
                                      type="text"
                                      {...field}
                                      color={color}
                                      errors={
                                        touched.otherlanguagesString &&
                                        errors.otherlanguagesString
                                      }
                                    />
                                  </>
                                )}
                              </Field>
                            )}
                            {errors.languages && touched.languages && (
                              <p class="text-red-500 text-xs mx-2 my-1">
                                {errors.languages}
                              </p>
                            )}
                          </>
                        )}
                      </Field>
                    </div>
                    <div className="sm:col-span-3">
                      <Field name="interests">
                        {({ field, form: { errors, touched } }) => (
                          <>
                            <label
                              htmlFor="interests"
                              className="block text-sm font-medium leading-6"
                            >
                              Interests (select 3)
                            </label>
                            <div className="mt-2">
                              <select
                                {...field}
                                multiple={true}
                                className={`block w-full border-2 py-2 px-4 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6  bg-[${color}] ${
                                  errors.interests &&
                                  touched.interests &&
                                  "border-red-500"
                                }`}
                              >
                                <option>Lifestyle</option>
                                <option>Beauty</option>
                                <option>F&B</option>
                                <option>Motherhood & Family</option>
                                <option>Sports</option>
                                <option>Health & Wellness</option>
                                <option>Fashion</option>
                                <option>Finance</option>
                                <option>Education</option>
                                <option>Technology</option>
                                <option>Music</option>
                                <option>Skincare</option>
                                <option>Comedy</option>
                                <option>Fitness</option>
                                <option>Gaming</option>
                                <option>Travel</option>
                                <option>Dance</option>
                                <option>Entrepreneur</option>
                                <option>Art</option>
                                <option>Entertainment</option>
                                <option>Home Decor</option>
                                <option>Others</option>
                              </select>
                            </div>
                            {field.value.includes("Others") && (
                              <Field
                                name="otherinterestsString"
                                validate={validateOtherField}
                              >
                                {({ field, form: { errors, touched } }) => (
                                  <>
                                    <FormInput
                                      placeholder="Please specify your interests"
                                      type="text"
                                      {...field}
                                      color={color}
                                      errors={
                                        touched.otherinterestsString &&
                                        errors.otherinterestsString
                                      }
                                    />
                                  </>
                                )}
                              </Field>
                            )}
                            {errors.interests && touched.interests && (
                              <p class="text-red-500 text-xs mx-2 my-1">
                                {errors.interests}
                              </p>
                            )}
                          </>
                        )}
                      </Field>
                    </div>
                    <div className="sm:col-span-3">
                      <Field name="employmentType">
                        {({ field, form: { errors, touched } }) => (
                          <>
                            <label
                              htmlFor="employmentType"
                              className="block text-sm font-medium leading-6"
                            >
                              Employment Type
                            </label>
                            <div className="mt-2">
                              <select
                                name="employmentType"
                                {...field}
                                className={`block w-full rounded-full border-2 py-2 px-4 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 bg-[${color}] ${
                                  errors.employmentType &&
                                  touched.employmentType &&
                                  "border-red-500"
                                }`}
                              >
                                <option value="">...</option>
                                <option>Full-time</option>
                                <option>Freelance</option>
                                <option>Part-time</option>
                                <option>Contract</option>
                                <option>Gig Work</option>
                                <option>Student</option>
                                <option>Changing Jobs</option>
                                <option>Unemployed</option>
                                <option>Others</option>
                              </select>
                            </div>
                            {field.value.includes("Others") && (
                              <Field
                                name="otherEmploymentType"
                                validate={validateOtherField}
                              >
                                {({ field, form: { errors, touched } }) => (
                                  <>
                                    <FormInput
                                      placeholder="Please specify your employment type"
                                      type="text"
                                      {...field}
                                      color={color}
                                      errors={
                                        touched.otherinterestsString &&
                                        errors.otherinterestsString
                                      }
                                    />
                                  </>
                                )}
                              </Field>
                            )}
                            {errors.employmentType &&
                              touched.employmentType && (
                                <p class="text-red-500 text-xs mx-2 my-1">
                                  {errors.employmentType}
                                </p>
                              )}
                          </>
                        )}
                      </Field>
                    </div>
                  </div>
                  <div className="mt-10 text-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.8 }}
                      type="submit"
                      disabled={loading}
                      className={`${loading ? "bg-slate-300" : "bg-slate-100 "}
                      py-2 px-12 rounded-full text-[${color}] font-serif uppercase inline-flex items-center gap-5`}
                    >
                      {loading && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-dasharray="15"
                            stroke-dashoffset="15"
                            stroke-linecap="round"
                            stroke-width="2"
                            d="M12 3C16.9706 3 21 7.02944 21 12"
                          >
                            <animate
                              fill="freeze"
                              attributeName="stroke-dashoffset"
                              dur="0.3s"
                              values="15;0"
                            />
                            <animateTransform
                              attributeName="transform"
                              dur="1.5s"
                              repeatCount="indefinite"
                              type="rotate"
                              values="0 12 12;360 12 12"
                            />
                          </path>
                        </svg>
                      )}
                      Submit
                    </motion.button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </section>
        <LastSection color={color} />
      </Suspense>
    </main>
  );
};

export default CreatorForm;
