import React, { useContext, useState } from "react";
import { CartContext } from "../ContextAPI/CartContext";

const SingleProduct = ({ product, cartPage, count, setCount }) => {
  const { cart, setCart } = useContext(CartContext);
  const [productTotal, setProductTotal] = useState(null);

  const Addtotals = () => {
    setProductTotal(product.price * (count + 1));
    setCount(count + 1);
  };
  // console.log(product.price);
  const RemoveTotal = () => {
    setProductTotal(product.price * (count - 1));
    setCount(count - 1);
  };
  return (
    <div key={product.id}>
      <div className="products">
        {/* Product details */}
        <img className="img" src={product.images[0]} alt="product images" />
        <div className="productDesc">
          <span style={{ fontWeight: 700 }}>{product.title}</span> <br />
          <span>
            <b>Price:</b>
            <i className="fa fa-inr"></i>
            {product.price}
          </span>
        </div>

        {/* Increment and decrement buttons */}
        {cartPage ? (
          <div className="button-container ">
            <div className="Total-price">
              <b>TotalPrice:</b>{`₹${productTotal || product.price}`}
            </div>
            
            <button
              className="decrement-button button1"
              onClick={() => {
                if (count > 0) {
                  RemoveTotal();
                  // console.log(count);
                }
              }}
            >
              -
            </button>
            <span className="quantity-display">{count || 1}</span>
            <button
              className="increment-button buttons"
              onClick={() => {
                // console.log(count);
                Addtotals();
              }}
            >
              +
            </button>
          </div>
        ) : (
          ""
        )}

        {/* Add to Cart or Remove from Cart button */}
        {cart.find((item) => item.id === product.id) ? (
          <button
            className="add"
            onClick={() => {
              setCart(cart.filter((c) => c.id !== product.id));
            }}
          >
            Remove From Cart
          </button>
        ) : (
          <button
            className="add"
            onClick={() => {
              setCart([...cart, product]);
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
