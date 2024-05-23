import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInSuccess } from "../../redux/user/userSlice";

const SignUp = () => {
  const [userType, setUserType] = useState("customer");

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();
  const navigate = useNavigate();
  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const onSubmit = async function (formData) {
    try {
      console.log(formData);

      // reset();
      // return;
      const res = await fetch("/api/auth/signup", {
        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify(formData),

        // Adding headers to the request
        headers: {
          "Content-type": "application/json",
        },
      });

      const resData = await res.json();
      // console.log("From Server");
      console.log(resData);

      if (resData.status === "success") {
        // console.log("In success");
        dispatch(signInSuccess(resData));
        toast.success("Signed Up SuccessFully");
        navigate("/");
        // navigate("/sign-in");
      } else if (resData.status === "fail") {
        // console.log("In fail");
        toast.error(resData.message);
      } else {
        alert("Unhandled reposnse status in SgnUp");
      }
    } catch (err) {
      // alert("Client Side Error in Sign up ");
      console.log(err);
    }
  };

  const onError = function (errors) {
    console.log(errors);
  };

  return (
    <div className=" w-96 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      {/* Sign up form */}
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {/* Username field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Username
          </label>
          <input
            {...register("username")}
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        {/* Email field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        {/* Password field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        {/* User type select field */}
        <div className="mb-4">
          <label htmlFor="userType" className="block text-gray-700 mb-2">
            User Type
          </label>
          <select
            {...register("userType")}
            id="userType"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            value={userType}
            onChange={handleUserTypeChange}
          >
            <option value="customer">Customer</option>
            <option value="vendor">Vendor</option>
          </select>
        </div>
        {/* Other form fields */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

const SignIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async function (formData) {
    try {
      console.log(formData);
      // dispatch(signInStart());
      // reset();
      // return;
      const res = await fetch("/api/auth/signin", {
        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify(formData),

        // Adding headers to the request
        headers: {
          "Content-type": "application/json",
        },
      });

      const resData = await res.json();
      // console.log("From Server");
      console.log(resData);

      if (resData.status === "success") {
        // console.log("In success");
        toast.success("Signed In SuccessFully");
        dispatch(signInSuccess(resData));
        navigate("/");
      } else if (resData.status === "fail") {
        // console.log("In fail");
        toast.error(resData.message);
        // dispatch(signInFailure(resData.message));
      } else {
        alert("Unhandled reposnse status in SgnUp");
      }
    } catch (err) {
      alert("Client Side Error in Sign In ");
      console.log(err);
      // dispatch(signInFailure(err.message));
    }
  };

  const onError = function (errors) {
    console.log(errors);
  };

  return (
    <div className="w-96 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      {/* Sign in form */}
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {/* Email field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        {/* Password field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        {/* Forgot password link */}
        <div className="text-right mb-4">
          <a href="/" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>
        {/* Other form fields */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

const LoginForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const togglePage = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 py-8">
      <div className="h-128 flex flex-col justify-center items-center">
        {isSignIn ? <SignIn /> : <SignUp />}
        <div className="text-center mt-4">
          {isSignIn ? (
            <p>
              Don&apos;t have an account?{" "}
              <button
                className="text-blue-500 hover:underline"
                onClick={togglePage}
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                className="text-blue-500 hover:underline"
                onClick={togglePage}
              >
                Sign In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
