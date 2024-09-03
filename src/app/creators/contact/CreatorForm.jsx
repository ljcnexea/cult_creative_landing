"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import * as yup from "yup";
import { phoneRegExp, validateOtherField } from "@/app/components/BrandForm.jsx";
import { Formik, Form, Field } from "formik";
import FormInput from "@/app/components/FormInput.jsx";
import countries from "@/app/contants/countries.json";
import MultiSelect from "@/app/components/MultiSelect.jsx";
import { motion } from "framer-motion";

const color = "#006D53";

const languages = [
  { name: "English" },
  { name: "Malay" },
  { name: "Mandarin" },
  { name: "Cantonese" },
  { name: "Tamil" },
  { name: "Hindi" },
  { name: "Korean" },
  { name: "Others" },
];

const interests = [
  { name: "Lifestyle" },
  { name: "Beauty" },
  { name: "F&B" },
  { name: "Motherhood and Family" },
  { name: "Sports" },
  { name: "Health and Wellness" },
  { name: "Fashion" },
  { name: "Finance" },
  { name: "Education" },
  { name: "Technology" },
  { name: "Music" },
  { name: "Skincare" },
  { name: "Comedy" },
  { name: "Fitness" },
  { name: "Gaming" },
  { name: "Travel" },
  { name: "Dance" },
  { name: "Entrepreneurship" },
  { name: "Art" },
  { name: "Entertainment" },
  { name: "Home Decor" },
  { name: "Others" },
];

const schema = yup.object({
  name: yup.string().required("Name is required"),
  pronoun: yup.string().required("Pronouns are required"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is invalid")
    .required("Phone number is required"),
  email: yup
    .string()
    .email("Email address is invalid")
    .required("Email address is required"),
  nationality: yup.string().required("Nationality is required"),
  location: yup.string().required("Location is required"),
  dateOfBirth: yup
    .date()
    // Five-digit years can cause a form error
    .max("9999-12-31", "Too long")
    .required("Date of birth is required"),
  languages: yup
    .array()
    .min(1, "Must have at least 1")
    .required("Languages are required"),
  interests: yup
    .array()
    .min(3, "Must have exactly 3")
    .max(3, "Must have exactly 3")
    .required("Interests are required"),
  employmentType: yup.string().required("Employment type is required"),
  instaUsername: yup.string().required("Instagram username is required"),
  // Optional
  tiktokUsername: yup.string(),
});

export const CreatorForm = () => {
  const [loading, setLoading] = useState();
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);

  const onSubmit = async (value, resetForm) => {
    setLoading(true);
    await fetch("/api/submit-creator", {
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
        setSelectedLanguages([]);
        setSelectedInterests([]);
        resetForm();
      })
      .catch((err) => alert(JSON.stringify(err)))
      .finally(() => setLoading(false));
  };

  return (
    <Formik
      initialValues={{
        name: "",
        pronoun: "",
        phoneNumber: "",
        email: "",
        nationality: "",
        location: "",
        dateOfBirth: "",
        languages: [],
        otherlanguagesString: "",
        interests: [],
        otherinterestsString: "",
        employmentType: "",
        otherEmploymentType: "",
        instaUsername: "",
        tiktokUsername: "",
      }}
      onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
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
                  placeholder="What’s your name?"
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
                      className={`block w-full rounded-full border-2 py-2 px-4 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 bg-[${color}] ${errors.pronoun &&
                        touched.pronoun &&
                        "border-red-500"
                        }`}
                    >
                      <option value="">Select one...</option>
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
                  placeholder="What’s your phone number?"
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
                placeholder="What’s your email address?"
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
                      className={`block w-full rounded-full border-2 py-2 px-4 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 bg-[${color}] ${errors.nationality &&
                        touched.nationality &&
                        "border-red-500"
                        }`}
                    >
                      <option value="">Select one...</option>
                      {countries.map((elem) => (
                        <option key={elem.code}>{elem.name}</option>
                      ))}
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
        <input
          type="text"
          name="location"
          {...field}
          className={`block w-full rounded-full border-2 py-2 px-4 shadow-sm placeholder:text-gray-400 placeholder:italic focus:outline-none sm:text-sm sm:leading-6 bg-[${color}] ${errors.location && touched.location ? "border-red-500" : "border-gray-300"
            }`}
          placeholder="Where's your location?"
        />
      </div>

      {errors.location && touched.location && (
        <p className="text-red-500 text-xs mx-2 my-1">
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
          <div className="sm:col-span-3">
            <Field name="languages">
              {({ field, form: { errors, touched, setFieldValue } }) => (
                <>
                  <MultiSelect
                    fieldName="languages"
                    label="Languages"
                    placeholder="Select at least one..."
                    curData={languages}
                    selectedItem={selectedLanguages}
                    setSelectedItem={setSelectedLanguages}
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                  />
                  {errors.languages && touched.languages && (
                    <p class="text-red-500 text-xs mx-2 my-1">
                      {errors.languages}
                    </p>
                  )}
                  {field.value.includes("Others") && (
                    <Field
                      name="otherlanguagesString"
                      validate={validateOtherField}
                    >
                      {({ field, form: { errors, touched } }) => (
                        <>
                          <FormInput
                            placeholder="Please specify..."
                            type="text"
                            {...field}
                            color={color}
                            errors={touched.otherlanguagesString && errors.otherlanguagesString}
                          />
                        </>
                      )}
                    </Field>
                  )}
                </>
              )}
            </Field>
          </div>
          <div className="sm:col-span-3">
            <Field name="interests">
              {({ field, form: { errors, touched, setFieldValue } }) => (
                <>
                  <MultiSelect
                    fieldName="interests"
                    label="Interests"
                    placeholder="Select three..."
                    curData={interests}
                    selectedItem={selectedInterests}
                    setSelectedItem={setSelectedInterests}
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                  />
                  {errors.interests && touched.interests && (
                    <p class="text-red-500 text-xs mx-2 my-1">
                      {errors.interests}
                    </p>
                  )}
                  {field.value.includes("Others") && (
                    <Field
                      name="otherinterestsString"
                      validate={validateOtherField}
                    >
                      {({ field, form: { errors, touched } }) => (
                        <>
                          <FormInput
                            placeholder="Please specify..."
                            type="text"
                            {...field}
                            color={color}
                            errors={touched.otherinterestsString && errors.otherinterestsString}
                          />
                        </>
                      )}
                    </Field>
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
                      className={`block w-full rounded-full border-2 py-2 px-4 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 bg-[${color}] ${errors.employmentType &&
                        touched.employmentType &&
                        "border-red-500"
                        }`}
                    >
                      <option value="">Select one...</option>
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
                  {errors.employmentType && touched.employmentType && (
                    <p class="text-red-500 text-xs mx-2 my-1">
                      {errors.employmentType}
                    </p>
                  )}
                  {field.value.includes("Others") && (
                    <Field
                      name="otherEmploymentType"
                      validate={validateOtherField}
                    >
                      {({ field, form: { errors, touched } }) => (
                        <>
                          <FormInput
                            placeholder="What’s your employment type?"
                            type="text"
                            {...field}
                            color={color}
                            errors={touched.otherEmploymentType && errors.otherEmploymentType}
                          />
                        </>
                      )}
                    </Field>
                  )}
                </>
              )}
            </Field>
          </div>
          <Field name="instaUsername">
            {({ field, form: { errors, touched } }) => (
              <FormInput
                label="Instagram Username"
                type="text"
                placeholder="What’s your Instagram username?"
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
                placeholder="What’s your TikTok username?"
                field={field}
                color={color}
                errors={touched.tiktokUsername && errors.tiktokUsername}
              />
            )}
          </Field>
        </div>
        <div className="mt-10 text-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            type="submit"
            disabled={loading}
            className={`${loading ? "bg-slate-300" : "bg-slate-100 "}
            py-2 px-12 rounded-full text-[${color}] font-aileron font-bold uppercase inline-flex items-center gap-5`}
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
  );
};
