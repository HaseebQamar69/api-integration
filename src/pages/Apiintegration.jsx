import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
function Apiintegration() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };

    useEffect(() => {
      getProducts();
    }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-5">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <a href="#" className="flex justify-center p-5">
                <img
                  className="rounded-t-lg w-48 h-48 object-contain"
                  src={item.image}
                  alt={item.title}
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                    {item.title}
                  </h5>
                </a>
                <p className="mt-2 text-lg font-bold text-gray-800">
                  ${item.price.toFixed(2)}
                </p>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center px-4 py-2 w-full text-center text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-300"
                >
                  View Product
                  <svg
                    className="ml-2 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Apiintegration