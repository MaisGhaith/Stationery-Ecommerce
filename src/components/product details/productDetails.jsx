import React, { useState, useEffect, useContext } from "react";
import { ItemContext } from "../../App";
import { counterContext } from "../../App";

import Products from "../JsonFiels/Products.json";

import { Link, useNavigate } from "react-router-dom";

export const ProductDetails = () => {
  const { counter, setCounter } = useContext(counterContext);

  const { item, setItem } = useContext(ItemContext);
  function AddToCart(event) {
    event.preventDefault();
    const selectedProduct = Products.find(
      (product) => product.id === event.target.id
    );
    setCounter(counter + 1);
    // Retrieve previous items from local storage
    const storedItems = JSON.parse(localStorage.getItem("newItem")) || [];
    // Add the new item to the array of stored items
    const updatedItems = [...storedItems, selectedProduct];

    setItem(() => [...updatedItems]);

    localStorage.setItem("newItem", JSON.stringify(updatedItems));
  }
  const navigate = useNavigate();
  //     const [productDetails, setproductDetails] = useState(null)
  //     useEffect(() => {

  //         setproductDetails((prevproduct) => {
  //             return (
  //                 prevproduct=  JSON.parse(window.sessionStorage.getItem("newItem")
  //                 )
  //         )
  //     })
  // },[])
  // let thisproduct =productDetails.pop();

  let prevproduct = JSON.parse(
    window.sessionStorage.getItem("newItem") || "[]"
  );
  return (
    <>
      <section className="mb-10 mt-10">
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div>
            <h1 className="text-2xl text-black font-bold lg:text-3xl">
              {prevproduct.title}
            </h1>

            <div>
              <p className="mt-1 text-sm text-gray-500">Id:{prevproduct.id}</p>
              <div className="text-sm breadcrumbs">
                <ul>
                  <li>
                    <Link onClick={() => { navigate(-2) }}>Home</Link>
                  </li>
                  <li>
                    <Link onClick={() => { navigate(-1) }} >Products Page</Link>
                  </li>
                  <li>Product Details</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
            <div className="lg:col-span-3">
              <div className="relative mt-4">
                <img
                  alt="Tee"
                  src={prevproduct.img}
                  className="h-72 w-full rounded-xl object-cover lg:h-[540px]"
                />
              </div>
            </div>

            <div className="lg:sticky lg:top-0">
              <form className="space-y-4 lg:pt-8">
                <fieldset>
                  <legend className="text-lg font-bold">Category</legend>

                  <div className="mt-2 flex flex-wrap gap-1">
                    <label htmlFor="material_cotton" className="cursor-pointer">
                      <input
                        type="radio"
                        id="material_cotton"
                        name="material"
                        className="peer sr-only"
                        checked
                      />

                      <span className="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100">
                        {prevproduct.category}
                      </span>
                    </label>

                    <label htmlFor="material_wool" className="cursor-pointer">
                      <input
                        type="radio"
                        id="material_wool"
                        name="material"
                        className="peer sr-only"
                        checked
                      />
                    </label>
                  </div>
                </fieldset>

                <div className="rounded border bg-gray-100 p-4">
                  <p className="">
                    <span className="block text-black text-base mb-2">
                      {" "}
                      Description{" "}
                    </span>

                    {/* <a href="" className="mt-1 inline-block underline"> Find out more </a> */}
                    <p className="text-sm">{prevproduct.description}</p>
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold">JD 19.99</p>
                </div>

                <button
                  type="submit"
                  className="w-full rounded bg-[#867070] hover:shadow-lg px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
                  id={prevproduct.id}
                  onClick={AddToCart}
                >
                  Add to cart
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <hr className="h-1 mb-20 mx-8  bg-gray-200 border-0 dark:bg-gray-400" />
      <section className="mx-10">
        <h1 className="text-3xl text-black ml-[5vw] mb-5 ">
          You might also like
        </h1>
        <div className="flex justify-around flex-wrap mb-12">
          <div
            key=""
            className="w-full sm:w-1/2 md:w-1/4 xl:w-1/5 p-6 flex flex-col bg-[#F5EBEB] m-5 rounded-md"
          >
            <a href="#">
              <img
                className="hover:grow hover:shadow-lg"
                src="https://img.ltwebstatic.com/images3_pi/2022/09/30/1664514937ae81a71bbbd41ede792f992b6586ebe4.webp"
              />
              <div className="flex items-center mt-5 justify-between">
                <p className="">paper clips</p>
                <p className="ml-20  text-gray-900">25 JD</p>
              </div>

              <div className="flex justify-center mt-3">
                <button
                  className="btn btn-outline "
                  id={prevproduct.id}
                  onClick={AddToCart}
                >
                  Add to cart
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="file: ml-2 h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </button>
              </div>
            </a>
          </div>
          <div
            key=""
            className="w-full sm:w-1/2 md:w-1/4 xl:w-1/5 p-6 flex flex-col bg-[#F5EBEB] m-5 rounded-md"
          >
            <a href="#">
              <img
                className="hover:grow hover:shadow-lg"
                src="https://img.ltwebstatic.com/images3_pi/2022/09/30/1664514937ae81a71bbbd41ede792f992b6586ebe4.webp"
              />
              <div className="flex items-center mt-5 justify-between">
                <p className="">paper clips</p>
                <p className="ml-20 text-gray-900">25 JD</p>
              </div>

              <div className="flex justify-center mt-3">
                <button
                  className="btn btn-outline "
                  id={prevproduct.id}
                  onClick={AddToCart}
                >
                  Add to cart
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="file: ml-2 h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </button>
              </div>
            </a>
          </div>
          <div
            key=""
            className="w-full sm:w-1/2 md:w-1/4 xl:w-1/5 p-6 flex flex-col bg-[#F5EBEB] m-5 rounded-md"
          >
            <a href="#">
              <img
                className="hover:grow hover:shadow-lg"
                src="https://img.ltwebstatic.com/images3_pi/2022/09/30/1664514937ae81a71bbbd41ede792f992b6586ebe4.webp"
              />
              <div className="flex items-center mt-5 justify-between">
                <p className="">paper clips</p>
                <p className="ml-20  text-gray-900">25 JD</p>
              </div>

              <div className="flex justify-center mt-3">
                <button
                  className="btn btn-outline "
                  id={prevproduct.id}
                  onClick={AddToCart}
                >
                  Add to cart
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="file: ml-2 h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </button>
              </div>
            </a>
          </div>
          <div
            key=""
            className="w-full sm:w-1/2 md:w-1/4 xl:w-1/5 p-6 flex flex-col bg-[#F5EBEB] m-5 rounded-md"
          >
            <a href="#">
              <img
                className="hover:grow hover:shadow-lg"
                src="https://img.ltwebstatic.com/images3_pi/2022/09/30/1664514937ae81a71bbbd41ede792f992b6586ebe4.webp"
              />
              <div className="flex items-center mt-5 justify-between">
                <p className="">paper clips</p>
                <p className="ml-20  text-gray-900">25 JD</p>
              </div>

              <div className="flex justify-center mt-3">
                <button
                  className="btn btn-outline "
                  id={prevproduct.id}
                  onClick={AddToCart}
                >
                  Add to cart
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="file: ml-2 h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </button>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
