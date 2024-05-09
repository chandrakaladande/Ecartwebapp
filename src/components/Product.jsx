import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

const Product = ({ items, cart, setCart }) => {
  const addToCart = (id, price, title, description, imgSrc) => {
    const isItemInCart = cart.some((item) => item.id === id);

    if (isItemInCart) {
      // Display error message if item is already in cart
      toast.error("Item already in cart", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true, // This should be part of the configuration object
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } else {
      const newCartItem = { id, price, title, description, imgSrc };
      setCart([...cart, newCartItem]);

      // Display success message when item is added
      toast.success("Item added to cart", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true, // Ensure this is correctly referenced
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        closeOnClick={true} // Correctly reference this key
        pauseOnHover={true}
        draggable={true}
        theme="dark"
      />
      {/* <div className="container my-5">
        <div className="row">
          {items.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6 my-3 text-center">
              <div className="card" style={{ width: "18rem", height: "35rem" }}>
                <Link
                  to={`/product/${product.id}`}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={product.imgSrc}
                    className="card-img-top"
                    alt={product.title}

                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <button className="btn btn-primary mx-3">
                    {product.price} ₹
                  </button>
                  <button
                    onClick={() =>
                      addToCart(
                        product.id,
                        product.price,
                        product.title,
                        product.description,
                        product.imgSrc
                      )
                    }
                    className="btn btn-warning"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div
        className="container my-5"
        style={{
          maxWidth: "1200px", // Maximum width for the container
          margin: "0 auto", // Centering the container
          padding: "20px", // Padding for spacing
        }}
      >
        <div
          className="row"
          style={{
            display: "flex",
            flexWrap: "wrap", // Wrap columns as needed
            justifyContent: "center", // Center columns in the row
          }}
        >
          {items.map((product) => (
            <div
              key={product.id}
              className="col-lg-4 col-md-6 my-3 text-center"
              style={{
                flex: "0 0 33.333%", // Each column takes 1/3 of the row
                padding: "10px", // Spacing between columns
              }}
            >
              <div
                className="card"
                style={{
                  border: "1px solid #ccc", // Card border
                  borderRadius: "8px", // Rounded corners
                  overflow: "hidden", // No overflow
                  transition: "transform 0.3s", // Smooth hover animation
                  width: "18rem", // Set width
                  height: "35rem", // Set height
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 10px rgba(0, 0, 0, 0.2)"; // Hover shadow effect
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)"; // Reset hover effect
                  e.currentTarget.style.boxShadow = "none"; // Reset shadow
                }}
              >
                <Link
                  to={`/product/${product.id}`}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={product.imgSrc || defaultImage} // Use fallback if imgSrc is undefined
                    className="card-img-top"
                    alt={product.title}
                    style={{
                      width: "100%", // Image takes full width
                      height: "250px", // Fixed height
                      objectFit: "contain", // Ensure entire image is visible without distortion
                      borderRadius: "8px", // Adds slight rounding to the corners
                      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", // Adds a subtle shadow for depth
                    }}
                  />
                </Link>
                <div
                  className="card-body"
                  style={{
                    padding: "15px", // Card body padding
                  }}
                >
                  <h5
                    className="card-title"
                    style={{
                      fontSize: "1.25em", // Larger title font
                      fontWeight: "bold", // Bold title
                      marginBottom: "10px", // Margin below title
                    }}
                  >
                    {product.title}
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      fontSize: "0.9em", // Smaller font for text
                      color: "#555", // Dark gray color
                    }}
                  >
                    {product.description}
                  </p>
                  <button
                    className="btn btn-primary"
                    style={{
                      marginRight: "10px", // Space between buttons
                    }}
                  >
                    {product.price} ₹
                  </button>
                  <button
                    onClick={() =>
                      addToCart(
                        product.id,
                        product.price,
                        product.title,
                        product.description,
                        product.imgSrc
                      )
                    }
                    className="btn btn-warning"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
