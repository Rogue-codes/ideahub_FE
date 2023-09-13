"use client";
import { useAuth } from "@/context";
import ApiFetcher from "@/utils/Api/ApiFetcher";
import { loginAuth } from "@/utils/Api/cookie";
import { FormikErrors, useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface AuthProps {
  type: string;
}

type RegisterFormValues = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export default function Auth({ type }: AuthProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const emailRegex = RegExp(/^\S+@\S+\.\S+$/);
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const res = await ApiFetcher.post(`/auth/register`, {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          password: values.password,
          confirm_password: values.confirm_password,
        });
        login(res.data.data);
        loginAuth(res?.data?.token)
        setLoading(false);
        router.push('/welcome')
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    },
    validate: (values) => {
      const errors: FormikErrors<RegisterFormValues> = {};
      if (!values.first_name) {
        errors.first_name = "First name is Required";
      }
      if (!values.last_name) {
        errors.last_name = "Last name is Required";
      }
      if (!values.email) {
        errors.email = "Email is Required";
      } else if (!emailRegex.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "password is Required";
      }
      if (!values.confirm_password) {
        errors.confirm_password = "Confconfirm_password is Required";
      } else if (values.confirm_password !== values.password) {
        errors.confirm_password = "Password does not match";
      }
      return errors;
    },
  });
  return (
    <div className="relative z-40 w-[40%] p-5 rounded-lg border-2 bg-white">
      <form action="" className="p-3" onSubmit={formik.handleSubmit}>
        {type === "register" && (
          <div className="w-full flex justify-between items-center">
            <div className="w-[48%]">
              <input
                type="text"
                value={formik.values.first_name}
                name="first_name"
                onChange={formik.handleChange}
                className={`${
                  formik.touched.first_name &&
                  formik.errors.first_name &&
                  "border border-red-500 bg-red-100"
                } w-full p-4 bg-transparent text-[#333] border  rounded-lg focus:outline-none`}
                placeholder="first name"
              />
              {formik.touched.first_name && formik.errors.first_name ? (
                <p className="text-red-600 text-xs">
                  {formik.errors.first_name}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="w-[48%]">
              <input
                type="text"
                value={formik.values.last_name}
                name="last_name"
                onChange={formik.handleChange}
                className={`${
                  formik.touched.last_name &&
                  formik.errors.last_name &&
                  "border border-red-500 bg-red-100"
                } w-full p-4 bg-transparent text-[#333] border  rounded-lg focus:outline-none`}
                placeholder="last name"
              />
              {formik.touched.last_name && formik.errors.last_name ? (
                <p className="text-red-600 text-xs">
                  {formik.errors.last_name}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        )}

        <div className="w-full">
          <input
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
            className={`${
              formik.touched.email &&
              formik.errors.email &&
              "border border-red-500 bg-red-100"
            } w-full mt-4 p-4 bg-transparent text-[#333] border  rounded-lg focus:outline-none`}
            placeholder="email address"
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-600 text-xs">{formik.errors.email}</p>
          ) : (
            ""
          )}
        </div>

        <div className="w-full">
          <input
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
            className={`${
              formik.touched.password &&
              formik.errors.password &&
              "border border-red-500 bg-red-100"
            } w-full mt-4 p-4 bg-transparent text-[#333] border rounded-lg focus:outline-none`}
            placeholder="password "
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="text-red-600 text-xs">{formik.errors.password}</p>
          ) : (
            ""
          )}
        </div>

        {type === "register" && (
          <div className="w-full">
            <input
              type="password"
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
              name="confirm_password"
              className={`${
                formik.touched.confirm_password &&
                formik.errors.confirm_password &&
                "border border-red-500 bg-red-100"
              } w-full mt-8 p-4 bg-transparent text-[#333]  border rounded-lg focus:outline-none`}
              placeholder="confirm password"
            />
            {formik.touched.confirm_password &&
            formik.errors.confirm_password ? (
              <p className="text-red-600 text-xs">
                {formik.errors.confirm_password}
              </p>
            ) : (
              ""
            )}
          </div>
        )}

        <button className="w-full mt-4 p-4 font-medium text-lg  text-[#fff] bg-[#333] rounded-lg">
          {loading ? 'loading...': "register" }
        </button>
      </form>
    </div>
  );
}
