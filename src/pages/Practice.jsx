import React, { useState, useEffect } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader"; // Importing the spinner

function Practice() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 }); // Custom cursor state

  // Function to update cursor position
  const updateCursorPosition = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    // Add event listener for mouse movement
    window.addEventListener("mousemove", updateCursorPosition);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  const getData = async () => {
    try {
      setLoading(true); // Set loading to true before making the API call
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data); // Store the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Stop loading when data is fetched or an error occurs
    }
  };

  useEffect(() => {
    getData(); // Fetch data when component mounts
  }, []);

  return (
    <>
      <section className="py-2">
        <div className="min-h-screen bg-gray-100 p-5 relative">
          <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
            Featured Jewelry
          </h1>

          {/* Custom Cursor */}
          <div
            className="custom-cursor"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              position: "fixed",
              width: "20px",
              height: "20px",
              backgroundColor: "#4A90E2",
              borderRadius: "50%",
              pointerEvents: "none", // So it doesn't interfere with clicking
              transform: "translate(-50%, -50%)", // Centers the cursor on the pointer
              zIndex: 9999, // Ensure it's above other elements
              transition: "transform 0.1s ease-in-out", // Smooth transition for cursor movement
            }}
          ></div>

          {/* Show the loading spinner when data is being fetched */}
          {loading ? (
            <div className="flex justify-center items-center min-h-[50vh]">
              {/* Spinner with custom size and color */}
              <ClipLoader color={"#4A90E2"} loading={loading} size={50} />
            </div>
          ) : (
            // Render the data once loading is false
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.isArray(data) &&
                data.map((item) => (
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
          )}
        </div>
      </section>
    </>
  );
}

export default Practice;
