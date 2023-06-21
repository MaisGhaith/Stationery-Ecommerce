import React from 'react'
import './AboutUs.css'

export const AboutUs = () => {
    return (
        <>

            <div className="py-16 bg-white">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-5/12">
                            <img
                                src="https://media.discordapp.net/attachments/1103602220144017474/1104916891136438272/image-removebg-preview_1.png"
                                alt="image"
                                loading="lazy"
                                width=""
                                height=""
                            />
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                                Always expect to pay less and get more with PaperClip Family                                </h2>
                            <p className="mt-6 text-gray-600">
                                At PaperClip Family, we're committed to delivering top-notch stationery tools at affordable prices to our customers. We began as a humble Facebook page, and have since grown to become one of the largest companies in the Middle East. Our focus is to offer our customers high-quality stationery products that won't break the bank, and we take pride in delivering exceptional value for every purchase. With our commitment to providing superior products at unbeatable prices.
                            </p>
                            <p className="mt-4 text-gray-600">
                                {" "}

                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <>
                {/* component */}
                <div className="mb-16">
                    {/* Code block starts */}
                    <dh-component>
                        <div className="container flex justify-center mx-auto pt-16">
                            <div>
                                <p className="text-gray-500 text-lg text-center font-normal pb-3">
                                    OUR TEAM
                                </p>
                                <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                                    The Talented People Behind the Scenes of the Website
                                </h1>
                            </div>
                        </div>
                        <div className="w-full  bg-gray-100 px-10 pt-10">
                            <div className=" container mx-auto">
                                <div
                                    role="list"
                                    aria-label="Behind the scenes People "
                                    className="lg:flex md:flex sm:flex items-center xl:justify-evenly flex-wrap md:justify-around sm:justify-around lg:justify-around"
                                >
                                    <div
                                        role="listitem"
                                        className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                                    >
                                        <div className="rounded overflow-hidden shadow-md bg-white">
                                            <div className="absolute -mt-20 w-full flex justify-center">
                                                <div className="h-32 w-32">
                                                    <img
                                                        src="/Images/me.jpg"
                                                        alt="Display Picture of Andres Berlin"
                                                        role="img"
                                                        className="rounded-full object-cover h-full w-full shadow-md"
                                                    />
                                                </div>

                                            </div>
                                            <div className="px-6 mt-16">
                                                <h1 className="font-bold text-3xl text-center mb-1">
                                                    Mais Ghaith
                                                </h1>
                                                <p className="text-gray-800 text-sm text-center">
                                                    Scrum Master
                                                </p>
                                                {/* <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                                  
                                                </p> */}
                                                <div className="w-full flex justify-center pt-5 pb-5">
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div aria-label="Github" role="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#718096"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-github"
                                                            >
                                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div aria-label="Twitter" role="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#718096"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-twitter"
                                                            >
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div aria-label="Instagram" role="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#718096"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-instagram"
                                                            >
                                                                <rect
                                                                    x={2}
                                                                    y={2}
                                                                    width={20}
                                                                    height={20}
                                                                    rx={5}
                                                                    ry={5}
                                                                />
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        role="listitem"
                                        className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                                    >
                                        <div className="rounded overflow-hidden shadow-md bg-white">
                                            <div className="absolute -mt-20 w-full flex justify-center">
                                                <div className="h-32 w-32">
                                                    <img
                                                        src="/Images/bushra.png"
                                                        alt="Display Picture of Silene Tokyo"
                                                        role="img"
                                                        className="rounded-full object-cover h-full w-full shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="px-6 mt-16">
                                                <h1 className="font-bold text-3xl text-center mb-1">
                                                    Bushra Ghazi
                                                </h1>
                                                <p className="text-gray-800 text-sm text-center">
                                                    Product owner
                                                </p>

                                                <div className="w-full flex justify-center pt-5 pb-5">
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div aria-label="Github" role="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#718096"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-github"
                                                            >
                                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div aria-label="Twitter" role="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#718096"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-twitter"
                                                            >
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div aria-label="Instagram" role="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#718096"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-instagram"
                                                            >
                                                                <rect
                                                                    x={2}
                                                                    y={2}
                                                                    width={20}
                                                                    height={20}
                                                                    rx={5}
                                                                    ry={5}
                                                                />
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        role="listitem"
                                        className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                                    >
                                        <div className="rounded overflow-hidden shadow-md bg-white">
                                            <div className="absolute -mt-20 w-full flex justify-center">
                                                <div className="h-32 w-32">
                                                    <img
                                                        src="/Images/majd.png"
                                                        alt="Display Picture of Johnson Stone"
                                                        role="img"
                                                        className="rounded-full object-cover h-full w-full shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="px-6 mt-16">
                                                <h1 className="font-bold text-3xl text-center mb-1">
                                                    Majd foudeh
                                                </h1>
                                                <p className="text-gray-800 text-sm text-center">
                                                    team member                                                </p>

                                                <div className="w-full flex justify-center pt-5 pb-5">
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div aria-label="Github" role="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#718096"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-github"
                                                            >
                                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div aria-label="Twitter" role="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#718096"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-twitter"
                                                            >
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div aria-label="Instagram" role="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#718096"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-instagram"
                                                            >
                                                                <rect
                                                                    x={2}
                                                                    y={2}
                                                                    width={20}
                                                                    height={20}
                                                                    rx={5}
                                                                    ry={5}
                                                                />
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        role="listitem"
                                        className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                                    >
                                        <div className="rounded overflow-hidden shadow-md bg-white">
                                            <div className="absolute -mt-20 w-full flex justify-center">
                                                <div className="h-32 w-32">
                                                    <img
                                                        src="/Images/mohammed.png"
                                                        alt="Display Picture of Dean Jones"
                                                        role="img"
                                                        className="rounded-full object-cover h-full w-full shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="px-6 mt-16">
                                                <h1 className="font-bold text-3xl text-center mb-1">
                                                    Mohammed Zayed
                                                </h1>
                                                <p className="text-gray-800 text-sm text-center">
                                                    team member
                                                </p>
                                                <div className="w-full flex justify-center pt-5 pb-5">
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div aria-label="Github" role="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#718096"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-github"
                                                            >
                                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div aria-label="Twitter" role="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#718096"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-twitter"
                                                            >
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div aria-label="Instagram" role="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#718096"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-instagram"
                                                            >
                                                                <rect
                                                                    x={2}
                                                                    y={2}
                                                                    width={20}
                                                                    height={20}
                                                                    rx={5}
                                                                    ry={5}
                                                                />
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        role="listitem"
                                        className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                                    >
                                        <div className="rounded overflow-hidden shadow-md bg-white">
                                            <div className="absolute -mt-20 w-full flex justify-center">
                                                <div className="h-32 w-32">
                                                    <img
                                                        src="/Images/hamzeh.png"
                                                        alt="Display Picture of Rachel Adams"
                                                        role="img"
                                                        className="rounded-full object-cover h-full w-full shadow-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="px-6 mt-16">
                                                <h1 className="font-bold text-3xl text-center mb-1">
                                                    Hamzeh Dawahreh
                                                </h1>
                                                <p className="text-gray-800 text-sm text-center">
                                                    team member
                                                </p>
                                                <div className="w-full flex justify-center pt-5 pb-5">
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div aria-label="Github" role="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#718096"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-github"
                                                            >
                                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div aria-label="Twitter" role="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#718096"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-twitter"
                                                            >
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-5">
                                                        <div aria-label="Instagram" role="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="#718096"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-instagram"
                                                            >
                                                                <rect
                                                                    x={2}
                                                                    y={2}
                                                                    width={20}
                                                                    height={20}
                                                                    rx={5}
                                                                    ry={5}
                                                                />
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </dh-component>
                    {/* Code block ends */}
                    {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
                </div>
            </>



        </>)
}
