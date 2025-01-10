import React from 'react';

export default function LoginForm() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[400px] h-auto shadow-md border rounded-lg p-6 bg-white">
        <h1 className="text-3xl text-center text-indigo-400 font-bold mb-4">Login</h1>
        <p className="text-gray-500 mb-4 text-center">
          Please login using your account details below.
        </p>
        <form>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Address"
            className="w-full bg-gray-100 text-gray-700 rounded px-4 py-2 mb-4 border focus:outline-indigo-400"
          />
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="w-full bg-gray-100 text-gray-700 rounded px-4 py-2 mb-4 border focus:outline-indigo-400"
          />
          <div className="text-center">
            <a href="#" className="text-indigo-400 hover:underline text-sm">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-400 text-white rounded px-4 py-2 mt-4 hover:bg-pink-500 transition"
          >
            Sign In
          </button>
        </form>
        <p className="text-center mt-4 text-gray-500">
          Don’t have an account?{' '}
          <a href="#" className="text-indigo-400 hover:underline">
            Create account
          </a>
        </p>
      </div>
    </div>
  );
}
