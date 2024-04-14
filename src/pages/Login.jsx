import React from 'react'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="relative h-screen">
    <section className="flex flex-col items-center justify-center h-full relative z-10 ">
      <img
        className="absolute left-0 right-0 w-full h-full object-cover z-[-1] "
        src="/assets/login_1.jpg"
        alt=""
      />

      <div className="p-6 space-y-4 md:space-y-6 sm:p-8  md:w-4/12 bg-black bg-opacity-75 rounded-lg">
        <h1 className="text-xl leading-tight tracking-tight text-white font-bold md:text-3xl ">
          Login to your account
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-xl  text-white font-bold "
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-black font-bold sm:text-sm rounded-lg  block w-full p-2.5 placeholder-black"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-xl  text-white font-bold "
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-black font-bold sm:text-sm rounded-lg  block w-full p-2.5 placeholder-black"
              required=""
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-white font-bold ">
                  Remember me
                </label>
              </div>
            </div>
            <a
              href="#"
              className="text-sm text-white hover:underline dark:text-primary-500 font-bold"
            >
              Forgot password?
            </a>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 w-60 font-kanit bg-teal-700 hover:bg-teal-600 text-white  py-4 px-4 mt-2 rounded-lg font-light   text-xl text-center "
            >
              Sign In
            </button>
          </div>

          <div className="flex gap-3">
            <p className="text-xl  text-white font-bold">
              Don’t have an account yet?
            </p>
            <Link to="/register">
              <a
                href="#"
                className="font-bold hover:underline text-xl  text-teal-700"
              >
                Sign Up
              </a>
            </Link>
          </div>
        </form>
      </div>
    </section>
  </div>
  )
}

export default Login
