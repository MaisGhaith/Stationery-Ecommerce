import React from 'react'
import Products from '../JsonFiels/Products.json'
import { ProductsTest } from '../JsonFiels/ProductsTest.js';
import { useState } from 'react';


function Search() {
    // console.log(Products);
    const [search, setsearch] = useState("")
    console.log(search);
    return (
        <>

            <form className="flex items-center justify-center mt-10">
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
                        className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20vw pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search"
                        required=""
                        onChange={(e) => setsearch(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="p-2.5 ml-1 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
            {/* products -------------------------------------------------------------------- */}
            <div className=' flex flex-wrap gap-5 justify-center my-5'>
                {Products.filter((product) => {
                    const searchLowerCase = search.toLowerCase();
                    const searchUpperCase = search.toUpperCase();
                    const titleLowerCase = product.title.toLowerCase();
                    const titleUpperCase = product.title.toUpperCase();

                    return searchLowerCase === '' ? product :
                        titleLowerCase.includes(searchLowerCase) ||
                        titleUpperCase.includes(searchUpperCase);
                }).map((product) => (

                    <div key={product.id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://img.ltwebstatic.com/images3_pi/2023/03/09/16783286956a509b6a69a6f512c2044f9d0405bc01_thumbnail_900x.webp" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.title}!</h2>
                            <p>{product.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                ))}
            </div>

        </>)
}

export default Search






















// import React, { useState } from 'react';
// import Products from '../JsonFiels/Products.json';

// function SearchBar() {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleChange = event => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div>
//       <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} />
//     </div>
//   );
// }

// function MainComponent() {
//   const [searchResults, setSearchResults] = useState([]);

//   const search = term => {
//     const results = Products.filter(item =>
//       item.name.toLowerCase().includes(term.toLowerCase())
//     );
//     setSearchResults(results);
//   };

//   return (
//     <div>
//       <SearchBar onSearch={search} />
//       <ul>
//         {searchResults.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MainComponent;

































// import React, { useState } from 'react'
// import Products from '../JsonFiels/Products.json'




// function SearchBar() {
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleChange = event => {
//         setSearchTerm(event.target.value);
//     };
// }

// const Search = () => {

//     const [searchResults, setSearchResults] = useState([]);

//     const search = term => {
//         const results = Products.filter(item =>
//             item.name.toLowerCase().includes(term.toLowerCase())
//         );
//         setSearchResults(results);
//     }

//     return (
//         <>
//             <div>
//                 <SearchBar onSearch={search} />
//                 <ul>
//                     {searchResults.map(item => (
//                         <li key={item.id}>{item.name}</li>
//                     ))}
//                 </ul>
//             </div>
//         </>



//     )
// }

// export default Search