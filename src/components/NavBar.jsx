import { useState } from "react";
import PrimaryButton from "./PrimaryButton"; // ← the button we made earlier

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="navbar bg-white shadow-md fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          {mobileMenuOpen && (
            <ul className="menu menu-compact dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-64 gap-2">
              <li>
                <a className="font-semibold">Categories</a>
              </li>
              <li>
                <a>Udemy Business</a>
              </li>
              <li>
                <a>Teach on Udemy</a>
              </li>
              <li className="mt-4">
                <PrimaryButton className="w-full">Log in</PrimaryButton>
              </li>
              <li>
                <button className="btn btn-outline btn-primary w-full">
                  Sign up
                </button>
              </li>
            </ul>
          )}
        </div>

        <a
          href="/"
          className="btn btn-ghost normal-case text-2xl font-bold text-[#a435f0] hover:bg-transparent pl-4"
        >
          Udemy
        </a>
      </div>

      <div className="navbar-center hidden lg:flex flex-1 px-8">
        <div className="dropdown dropdown-hover">
          <label
            tabIndex={0}
            className="btn btn-ghost hover:text-white text-blacks font-semibold text-sm"
          >
            Categories
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-4 shadow bg-base-100 rounded-box w-80"
          >
            <li>
              <a>Development</a>
            </li>
            <li>
              <a>Business</a>
            </li>
            <li>
              <a>Design</a>
            </li>
            <li>
              <a>Marketing</a>
            </li>
            <li>
              <a>Photography</a>
            </li>
          </ul>
        </div>

        <div className="flex-1 max-w-2xl mx-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for anything"
              className="input input-bordered w-full pl-12 pr-4 py-3 rounded-full text-sm border-gray-300 focus:border-[#a435f0]"
            />
            <svg
              className="absolute left-4 top-3.5 h-5 w-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="navbar-end gap-2 pr-4">
        <a className="hidden lg:flex hover:text-white text-black btn btn-ghost  text-sm font-semibold">
          Udemy Business
        </a>
        <a className="hidden lg:flex hover:text-white text-black btn btn-ghost text-sm font-semibold">
          Teach on Udemy
        </a>

        <button className="btn btn-ghost hover:text-white text-black btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-2 8m10-8v6a2 2 0 11-4 0v-6"
            />
          </svg>
        </button>

        <button className="hidden lg:flex btn bg-white text-[#a435f0] border border-[#a435f0] hover:bg-purple-50 font-bold px-6">
          Log in
        </button>

        {/* Register Button - Uses our PrimaryButton */}
        <div className="hidden lg:flex">
          <PrimaryButton>Sign up</PrimaryButton>
        </div>

        {/* Language Globe */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12h18m-9-9v18"
              />
              <circle
                cx="12"
                cy="12"
                r="8"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>English</a>
            </li>
            <li>
              <a>العربية</a>
            </li>
            <li>
              <a>Español</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
