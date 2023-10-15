"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="hidden md:block md:w-1/2 h-full overflow-hidden">
        <div
          className="hidden md:block md:w-2/2 bg-cover min-h-screen bg-center"
          style={{
            backgroundImage: "url('/img/login.jpg')",
          }}
        />
      </div>
      <div className="flex justify-center items-center md:w-1/2 p-6">
        <div className="w-80">
          <div>
            <h1 className="text-left text-1xl font-medium text-gray-500">
              API Test By Heshan @ Genesiis
            </h1>
            <h2 className="mt-6 mb-3 text-left text-1xl font-medium text-gray-900">
              Sign in with your email
            </h2>
          </div>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="text-xs text-black text-gray-400">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full px-3 py-2 mb-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-md focus:outline-none  focus:z-10 sm:text-sm md:text-xs"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-xs text-black text-gray-400">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:z-10 sm:text-sm md:text-xs"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="my-5">
              <button
                type="submit"
                className="group items-center relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition delay-150 duration-300 ease-in-out"
              > Sign In
              </button>
            </div>
            <div>
              <button
                type="submit"
                onClick={() => signIn("google")}
                className="group items-center relative w-full flex justify-center py-2 px-4 border border-solid border-2 border-black-500 text-sm font-medium rounded-md text-black bg-white-600 hover:bg-gray-100 transition delay-150 duration-300 ease-in-out"
              >
                <img className="h-4 mx-2" src="/google-color-icon.svg" alt="Google logo"/> Sign in With Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
