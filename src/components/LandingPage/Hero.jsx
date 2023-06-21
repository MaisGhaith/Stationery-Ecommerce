import React from "react";
import { Link } from "react-router-dom";
import LandingPage from "./LandingPage";
export default function Hero() {
  return (
    <>
      <div
        id="default-carousel123"
        className="hero-landing relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-screen overflow-hidden rounded-lg  ">
          {" "}
          {/* md:h-96 */}
          <div
            className="hidden duration-700 ease-in-out flex justify-center items-center"
            data-carousel-item
          >
            <div className="paragraph-hero">
              <h1> Paper Clip store</h1>
              <p>
                Always expect to pay less and get more with PaperClip Family
              </p>
            </div>

            <img
              src="./images/pexels-dominika-roseclay-4300394.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:h-full md:object-cover sm:h-full sm:object-cover"
              alt="image"
            />
          </div>
          <div
            className="hidden duration-700 ease-in-out flex justify-center items-center"
            data-carousel-item
          >
            {" "}
            <div className="paragraph-hero">
              <h1> Paper Clip store</h1>
              <p>
                Always expect to pay less and get more with PaperClip Family
              </p>
            </div>

            <img
              src="./images/pexels-olia-danilevich-5088012.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:h-full md:object-cover sm:h-full sm:object-cover"
              alt="image"
            />
          </div>
          <div
            className="hidden duration-700 ease-in-out flex justify-center items-center"
            data-carousel-item
          >
            {" "}
            <div className="paragraph-hero">
              <h1> Paper Clip store</h1>
              <p>
                Always expect to pay less and get more with PaperClip Family
              </p>
            </div>

            <img
              src="./images/pexels-olia-danilevich-5088011.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:h-full md:object-cover sm:h-full sm:object-cover"
              alt="image"
            />
          </div>
          {/* <div
            className="hidden duration-700 ease-in-out flex justify-center items-center"
            data-carousel-item
          >
            {" "}
            <div className="paragraph-hero">
              <h1> Paper Clip store</h1>
              <p>
                Always expect to pay less and get more with PaperClip Family
              </p>
              <button>Discover our collection</button>
            </div>

            <img
              src="./Images/bg-7.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:h-full md:object-cover sm:h-full sm:object-cover"
              alt="image"
            />
          </div> */}
          {/* <div
            className="hidden duration-700 ease-in-out flex justify-center items-center"
            data-carousel-item
          >
            {" "}
            <div className="paragraph-hero">
              <h1> Paper Clip store</h1>
              <p>
                Always expect to pay less and get more with PaperClip Family
              </p>
              <button>Discover our collection</button>
            </div>

            <img
              src="./Images/bg-4.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:h-full md:object-cover sm:h-full sm:object-cover"
              alt="image"
            />
          </div> */}
        </div>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          {/* <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button> */}
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
}
