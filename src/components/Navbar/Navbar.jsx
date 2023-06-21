import React, { useContext } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import "./navbar.css";
import ProductsPage from "../ProductsPage/ProductsPage";
import { isLoginContext } from "../../loginContext";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "../../App";
import { counterContext } from "../../App";

export default function Navbar() {
  const activeLink =
    "block py-2 pl-3 pr-4 text-gray-900 bg-[#867070] rounded md:bg-transparent md:text-[#867070] md:p-0 md:dark:text-[#867070]";
  const normalLink =
    "block py-2 pl-3 pr-4 text-white focus:border-b-2 focus:border-[#867070]  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#867070] md:p-0 md:dark:hover:text-[#867070] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
  const { counter, setCounter } = useContext(counterContext);

  const navigate = useNavigate();
  const { isLogin, setIsLogin } = useContext(isLoginContext);
  return (
    <>
      <header>
        <nav className=" fixed w-full z-20 top-0 left-0 border-b bg-nav dark:border-gray-600 z-50	 ">
          <div className=" relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center">
              <img
                src="./Images/logo.png"
                className="h-8 "
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                aper clip
              </span>
            </Link>
            <div className="flex md:order-2">
              {/* cart button ---------------------------------- */}
              <div className="dropdown dropdown-end mr-4">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">
                      {counter}
                    </span>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">{counter} Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <Link to="/cartPage">
                        {" "}
                        <button className="btn text-white bg-[#867070] hover:bg-[#867070]/80 focus:ring-4 focus:outline-none focus:ring-[#867070]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#D5B4B4]/80 dark:focus:ring-[#D5B4B4]/40 btn-block">
                          View cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* end of cart button---------------------------------- */}

              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.sessionStorage.clear();
                  // setIsLogin(false);
                  navigate("/login");
                }}
                type="button"
                className="text-white bg-[#867070] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 h-9 text-center mr-3 md:mr-0 dark:bg-[#867070] dark:hover:bg-[#bea9a9] dark:focus:ring-[#867070]"
              >
                {JSON.parse(window.sessionStorage.getItem("isLogin"))
                  ? "Logout"
                  : "Sign In"}
              </button>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="bg-nav flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="ProductsPage"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="aboutAsPage"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="contactUsPage"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    Contact us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}