import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';  // Import eye icons

const Login = () => {
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
            Login to your account
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label htmlFor="email" className="block mb-2 text-xl text-white font-bold">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-black font-bold sm:text-sm rounded-lg block w-full p-2.5 placeholder-black"
                placeholder="name@company.com"
                required
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
                className="bg-gray-50 border border-gray-300 text-black font-bold sm:text-sm rounded-lg block w-full p-2.5 placeholder-black"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                onClick={togglePasswordVisibility}
              >
                {passwordShown ? <FaEyeSlash className='text-xl  mt-8' /> : <FaEye className='text-xl mt-8' />}
              </button>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="font-bold bg-teal-700 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 w-60 py-4 px-4 mt-2 rounded-lg text-xl text-center text-white"
              >
                Sign In
              </button>
            </div>
            <div className="flex gap-3">
              <p className="text-xl text-white font-bold">
                Don’t have an account yet?
              </p>
              <Link to="/register">
                <span className="font-bold hover:underline text-xl text-teal-700">
                  Sign Up
                </span>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
