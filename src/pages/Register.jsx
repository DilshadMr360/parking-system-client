import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="relative h-screen">
      <section className="flex flex-col items-center justify-center h-full relative z-10 ">
        <img
          className="absolute left-0 right-0 w-full h-full object-cover z-[-1]"
          src="/assets/login_1.jpg"
          alt=""
        />

        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 md:w-4/12 bg-black bg-opacity-75 rounded-lg">
          <h1 className="text-xl leading-tight tracking-tight text-white font-bold md:text-3xl">
            Register your account
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label className="block mb-2 text-xl text-white font-bold">
                Your User Name
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="bg-gray-50 border border-gray-300 text-black font-bold sm:text-sm rounded-lg block w-full p-2.5  placeholder-black"
                placeholder="username"
                required=""
              />
            </div>
            <div>
              <label className="block mb-2 text-xl text-white font-bold">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-black font-bold sm:text-sm rounded-lg block w-full p-2.5  placeholder-black"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="block mb-2 text-xl text-white font-bold">
                Password
              </label>
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-black font-bold sm:text-sm rounded-lg block w-full p-2.5  placeholder-black"
                required=""
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 top-1/2 transform -translate-y-1/2"
                onClick={togglePasswordVisibility}
                aria-label="Toggle password visibility"
              >
                {passwordShown ? <FaEyeSlash className="text-xl mt-8" /> : <FaEye className="text-xl mt-8" />}
              </button>
            </div>
            <div className="flex items-center justify-between">
              {/* <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-white font-bold">
                    Remember me
                  </label>
                </div>
              </div> */}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-teal-700 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 w-60 py-4 px-4 mt-2 rounded-lg text-xl text-center text-white font-bold"
              >
                Sign Up
              </button>
            </div>
            <div className="flex gap-3">
              <p className="text-xl text-white font-bold">
                Already have an Account?
              </p>
              <Link to="/">
                <span className="font-bold hover:underline text-xl text-teal-700">
                  Sign In
                </span>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Register;
