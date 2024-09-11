import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Practice() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section className="border border-red-700">
        <div className="min-h-screen bg-gray-100 p-5">
          <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
            Featured Jewelry
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item) => (
              <div
                key={item.id}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-t-lg w-full h-64 object-contain p-4"
                />
                <div className="px-5 pb-5">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                    {item.title}
                  </h5>
                  <p className="mt-2 text-lg font-bold text-gray-800">
                    ${item.price.toFixed(2)}
                  </p>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Practice;
