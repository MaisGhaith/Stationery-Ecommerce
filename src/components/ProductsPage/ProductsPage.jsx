import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
// import Products from '../Products.json'
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Products from "../JsonFiels/Products.json";
import { Link } from "react-router-dom";
import { ItemContext } from "../../App";
import { counterContext } from "../../App";
import "./ProductsPage.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#867070", // replace with your desired color
    },
  },
});

const ProductsPage = () => {
  let { category } = useParams();
  console.log(category);
  const [selectedCategory, setSelectedCategory] = useState(category);
  useEffect(() => {
    // Update the selected category if the category parameter changes
    setSelectedCategory(category);
  }, [category]);
  let filteredCategory;
  // const location = useLocation();

  // useEffect(() => {
  //   const searchParams = new URLSearchParams(location.search);
  //   const autoClick = searchParams.get("autoClick");

  //   if (autoClick === "true") {
  //     const anchorElement = document.getElementById("Paper Products");
  //     if (anchorElement) {
  //       anchorElement.click();
  //     }
  //   }
  // }, [location.search]);
  useEffect(() => {
    if (category && !selectedCategory) {
      filteredCategory = Products.filter(
        (product) => product.category === category
      );
    } else if (selectedCategory && selectedCategory !== "all") {
      filteredCategory = Products.filter(
        (product) => product.category === selectedCategory
      );
    } else {
      filteredCategory = Products;
    }
    setAbc(filteredCategory.length > 2 ? filteredCategory : Products);
  }, [category, selectedCategory]);

  const navigate = useNavigate();
  const { item, setItem } = useContext(ItemContext);
  const { counter, setCounter } = useContext(counterContext);
  const [abc, setAbc] = useState(Products);
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

  function AddToProductDetails(event) {
    event.preventDefault();
    const selectedProduct1 = Products.filter(
      (product) => product.id === event.target.id
    );
    let [array] = selectedProduct1;
    // Retrieve previous items from local storage

    // Add the new item to the array of stored items

    sessionStorage.setItem("newItem", JSON.stringify(array));
    navigate("/ProductDetailsPage");
  }
  // function filterCategory(event) {
  //   event.preventDefault();

  //   const categoryName = event.target.id;
  //   setSelectedCategory(categoryName);

  //   filteredCategory = Products.filter(
  //     (product) => product.category === categoryName
  //   );
  //   setAbc(filteredCategory.length > 2 ? filteredCategory : Products);
  // }

  const [search, setsearch] = useState("");

  const Cards = filteredCategory?.map((product, index) => {
    return (
      <div
        key={index}
        className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col bg-[#867070] m-5 rounded-md"
      >
        <a href="#">
          <img
            id={product.id}
            onClick={AddToProductDetails}
            className="hover:grow hover:shadow-lg"
            src={product.img}
          />
          <div className="flex items-center mt-5 justify-between">
            <p className="">{product.title}</p>
            <p className="ml-20  text-gray-900">{product.price} JD</p>
          </div>

          <div className="flex flex-wrap mt-3">
            <button
              className="btn btn-sm btn-outline "
              id={product.id}
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
            <button
              className="btn btn-sm text-[12px] btn-outline-blue"
              id={product.id}
              onClick={AddToProductDetails}
            >
              {" "}
              Details
            </button>
          </div>
        </a>
      </div>
    );
  });
  const CardsFiltered = abc
    .filter((product) => {
      const searchLowerCase = search.toLowerCase();
      const searchUpperCase = search.toUpperCase();
      const titleLowerCase = product.title.toLowerCase();
      const titleUpperCase = product.title.toUpperCase();

      return searchLowerCase === ""
        ? product
        : titleLowerCase.includes(searchLowerCase) ||
        titleUpperCase.includes(searchUpperCase);
    })
    .map((product, index) => {
      return (
        <div
          key={index}
          className=" text-black-900 w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col bg-[#F5EBEB] m-5 rounded-md"
        >
          <a href="#">
            <img
              id={product.id}
              onClick={AddToProductDetails}
              className="hover:grow hover:shadow-lg"
              src={product.img}
            />
            <div className="flex flex-wrap  items-center mt-5 justify-around">
              <p className="">{product.title}</p>
              <p className="  text-black-900">{product.price} JD</p>
            </div>

            <div className="flex flex-wrap justify-center mt-3 gap-2">
              <button
                className="btn btn-sm text-[12px] btn-outline "
                id={product.id}
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
              <button
                className="btn btn-sm text-[12px] btn-outline-blue detailsButton"
                id={product.id}
                onClick={AddToProductDetails}
              >
                {" "}
                Details
              </button>
            </div>
          </a>
        </div>
      );
    });
  console.log(CardsFiltered);
  return (
    <div>
      <div className="text-base breadcrumbs ml-10 my-10 font-bold text-black">
        <ul>
          <li><Link onClick={() => { navigate(-1) }}>Home</Link></li>
          <li>Products Page</li>
          {selectedCategory && <li>{selectedCategory}</li>}
        </ul>
      </div>
      <>
        <section className="bg-white ">
          <div className="container px-6 py-8 mx-auto">
            <div className="lg:flex lg:-mx-2  ">
              <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4 sticky top-24" style={{ height: "fit-content" }}>
                <h1 className="text-2xl">Categories</h1>
                <a
                  href="#"
                  className="block font-medium text-gray-500 dark:text-gray-500 hover:none"
                  onClick={(e) => {
                    console.log(e.target.id);
                    setSelectedCategory("all");
                  }}
                  id="all"
                >
                  View All{" "}
                </a>
                {/* <a
                  href="#"
                  className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                >
                  Writing Instruments{" "}
                </a> */}
                <a
                  href="#"
                  className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                  onClick={(e) => setSelectedCategory(e.target.id)}
                  id="Paper Products"
                >
                  Paper Products
                </a>
                <a
                  href="#"
                  className="block font-medium text-gray-500 dark:text-gray-500 hover:underline"
                  onClick={(e) => setSelectedCategory(e.target.id)}
                  id="Desk Accessories"
                >
                  Desk Accessories
                </a>
                <a
                  href="#"
                  className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                  onClick={(e) => setSelectedCategory(e.target.id)}
                  id="Art Supplies"
                >
                  Art Supplies
                </a>
                <a
                  href="#"
                  className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                  onClick={(e) => setSelectedCategory(e.target.id)}
                  id="School Supplies"
                >
                  School Supplies
                </a>
                <a
                  href="#"
                  className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                  onClick={(e) => setSelectedCategory(e.target.id)}
                  id="Presentation"
                >
                  Presentation Supplies
                </a>
                <a
                  href="#"
                  className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                  onClick={(e) => setSelectedCategory(e.target.id)}
                  id="Calendars and Planners"
                >
                  Calendars and Planners
                </a>
                <a
                  href="#"
                  className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                  onClick={(e) => setSelectedCategory(e.target.id)}
                  id="Filing and Organization"
                >
                  Filing and Organization
                </a>
              </div>
              <div className="flex flex-col ">
                <div className="flex flex-wrap justify-around gap-x-52">
                  <div className="flex flex-col justify-end">
                    <h1 className="text-3xl text-black mt-5">
                      Stasionary Shop
                    </h1>
                  </div>
                  <form className="flex justify-end  mt-10">
                    <label htmlFor="simple-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative ">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="simple-search"
                        className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#867070] focus:border-[#867070] block w-20vw pl-10 p-2.5  dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-[#c4b2b2] dark:focus:border-[#867070]"
                        placeholder="Search"
                        required=""
                        onChange={(e) => setsearch(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="p-2.5 ml-1 text-sm font-medium text-white bg-[#867070] rounded-lg border border-gray-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#867070] dark:hover:bg-[#c2afaf] dark:focus:ring-[#867070]"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>
                  </form>
                </div>

                <section className="bg-white py-8 ">
                  <div className="container mx-auto flex items-center justify-center flex-wrap pb-12">
                    {abc === false ? Cards : CardsFiltered}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>

        {/* <Pagination count={2} color="primary" /> */}
        {/* <Pagination count={10} color="primary" className='flex justify-center mb-5' /> */}
        {/* <Pagination count={10} variant="outlined" color="secondary" className='flex justify-center mb-5' /> */}
        {/* <ThemeProvider theme={theme}>
          <Pagination
            count={2}
            color="primary"
            className="flex justify-center mb-5"
          />
        </ThemeProvider> */}
      </>
    </div>
  );
};

export default ProductsPage;
