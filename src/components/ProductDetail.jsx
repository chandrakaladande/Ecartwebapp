import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filteredProduct = items.find((item) => item.id === parseInt(id));
    setProduct(filteredProduct);

    if (filteredProduct) {
      const related = items.filter(
        (item) =>
          item.category === filteredProduct.category &&
          item.id !== filteredProduct.id
      );
      setRelatedProducts(related);
    }
  }, [id]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // Increase quantity if the product is already in the cart
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
      toast.success("Increased quantity in cart", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
      });
    } else {
      // Add new product with quantity 1
      const newItem = { ...product, quantity: 1 };
      setCart([...cart, newItem]);
      toast.success("Item added to cart", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
      });
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    toast.warn("Product removed from cart", {
      position: "top-right",
      autoClose: 1500,
      theme: "dark",
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="img">
          <img src={product.imgSrc} alt={product.title} />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price} ₹</button>
          <button
            onClick={() => addToCart(product)}
            className="btn btn-warning"
          >
            Add To Cart
          </button>
          {cart.some((item) => item.id === product.id) && (
            <button
              onClick={() => removeFromCart(product.id)}
              className="btn btn-danger mx-3"
            >
              Remove
            </button>
          )}
        </div>
      </div>

      <h1 className="text-center">Related Products</h1>
      <div className="related-products">
        {relatedProducts.map((relatedProduct) => (
          <div key={relatedProduct.id}>
            <h2>{relatedProduct.title}</h2>
            <p>{relatedProduct.description}</p>
            <button
              className="btn btn-primary"
              onClick={() => addToCart(relatedProduct)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductDetail;
