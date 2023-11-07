import  TextField  from "../components/text-field/text-field";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useState, useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../context/auth.context";

const Auth = () => {
  const [auth, setAuth] = useState<"signin" | "signup">("signin");

  const { error, isLoading, signIn, signUp, logout } = useContext(AuthContext);

  const toggleAuth = (state: "signin" | "signup") => {
    setAuth(state);
  };

  const onSubmit = (formData: { email: string; password: string }) => {
    if (auth === "signin") {
      signIn(formData.email, formData.password);
    } else {
      signUp(formData.email, formData.password);
    }
  };

  const validation = Yup.object({
    email: Yup.string()
      .email("Enter your email address")
      .required("Enter is required"),
    password: Yup.string()
      .min(6, "6 minimum characters")
      .required("Password is required"),
  });

  return (
    <div className="flex items-center justify-between">
      <Head>
        <title>Auth</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>


      <div className="flex justify-center items-center flex-col h-screen w-screen bg-[#4623E9]">
        <Image src={"/login-img.png"} alt="login" width={320} height={320} />
        <p className="text-white max-w-[576px]  text-center">
          Lorem ipsum dolor sit amet consectetur. Pretium aliquet ac molestie
          lacus. Faucibus arcu aliquam nullam nunc dictumst.
        </p>
      </div>

     

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={validation}
      >
        <Form className="space-y-4 px-[170px]">
          {error && <p className="text-red-500 font-semibold">{error}</p>}
          <h1 className="font-semibold text-center text-4xl">
          {auth==='signin' ? 'Sign In' : "Sign Up"}
          </h1>
          <div className="space-y-4">
            
            <TextField name="email" placeholder="Email" type={"text"} />
          
            <TextField
              name="password"
              placeholder="Password"
              type={"password"}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full font-semibold rounded bg-[#4623E9] text-white py-3 mt-4"
          >
            {isLoading
              ? "Loading..."
              : auth === "signin"
              ? "Sign In"
              : "Sign Up"}
          </button>

          
          {auth === "signin" ? (
          <div className=" text-[gray]">
            Not yet account?{" "}
            <button
              type="button"
              className=" text-black hover:underline"
              onClick={() => toggleAuth("signup")}
            >
             Sign Up
            </button>
          </div>
        ) : (
          <div className=" text-[gray]">
           Already have account?{" "}
            <button
              type="button"
              className=" text-black hover:underline"
              onClick={() => toggleAuth("signin")}
            >
             Sign In
            </button>

            
          </div>
        )}
        </Form>
      </Formik>
    </div>
  );
};

export default Auth;
