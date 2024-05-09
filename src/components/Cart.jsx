import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = ({ cart, setCart }) => {
  const handleIncreaseQuantity = (productId) => {
    const updatedCart = cart.map((product) =>
      product.id === productId
        ? { ...product, quantity: (product.quantity || 0) + 1 }
        : product
    );
    setCart(updatedCart);
    toast.success("Increased quantity", {
      position: "top-right",
      autoClose: 1500,
      theme: "dark",
    });
  };

  const handleDecreaseQuantity = (productId) => {
    const updatedCart = cart.map((product) =>
      product.id === productId && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setCart(updatedCart);
    toast.info("Decreased quantity", {
      position: "top-right",
      autoClose: 1500,
      theme: "dark",
    });
  };

  const handleRemoveProduct = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    toast.warn("Removed product from cart", {
      position: "top-right",
      autoClose: 1500,
      theme: "dark",
    });
  };

  const clearCart = () => {
    setCart([]);
    toast.error("Cart cleared", {
      position: "top-right",
      autoClose: 1500,
      theme: "dark",
    });
  };

  // Calculate the total price of all items in the cart
  const totalCartPrice = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <>
      <ToastContainer />
      <div className="container my-5" style={{ width: "54%" }}>
        {cart.length === 0 ? (
          <div className="text-center">
            <h1>Your Cart is Empty</h1>
            <Link to="/" className="btn btn-warning">
              Continue Shopping...
            </Link>
          </div>
        ) : (
          cart.map((product) => (
            <div key={product.id} className="card mb-3 my-5" style={{ width: "700px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={product.imgSrc}
                    className="img-fluid rounded-start"
                    alt={product.title}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <div>
                      <button
                        onClick={() => handleDecreaseQuantity(product.id)}
                        className="btn btn-secondary mx-2"
                      >
                        -
                      </button>
                      {product.quantity}
                      <button
                        onClick={() => handleIncreaseQuantity(product.id)}
                        className="btn btn-secondary mx-2"
                      >
                        +
                      </button>
                    </div>
                    <p className="card-text mt-3">
                      Total: {product.price * product.quantity} ₹
                    </p>
                    <button
                      onClick={() => handleRemoveProduct(product.id)}
                      className="btn btn-danger mx-3"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div
          className="container text-center my-5"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Total Cart Price: {totalCartPrice} ₹</h2>
          <br />
          <button onClick={clearCart} className="btn btn-danger">
            Clear Cart
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
