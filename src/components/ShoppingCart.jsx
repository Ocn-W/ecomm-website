import React from "react";
import { atom, useAtom } from "jotai";
import "../css/ShoppingCart.scss";
import { Link } from "react-router-dom";
import shirt from "../assets/shoppingPage/Shirt.jpg";
import jeans from "../assets/shoppingPage/Jeans.jpg";
import sneakers from "../assets/shoppingPage/Sneakers.jpg";
import sweater from "../assets/shoppingPage/Sweater.jpg";

export const showCartAtom = atom(false);
export const addToCartAtom = atom([]);

export default function ShoppingCart() {
  const [showCart, setShowCart] = useAtom(showCartAtom);
  const insideCart = useAtom(addToCartAtom);
  const cartTotalSum = sumOfProducts();

  function sumOfProducts() {
    const productSum = insideCart[0]
      .map((product) => product.price * product.quantity)
      .reduce((acc, currVal) => acc + currVal, 0);
    return productSum;
  }

  return (
    <>
      {showCart && (
        <div className="shoppingCart">
          <h2>YOUR CART</h2>
          <section className="productSection">
            {insideCart[0].map((product) => {
              return (
                <div className="cartProduct">
                  <img src={product.name === "Shirt" ? shirt : product.name === "Jeans" ? jeans : product.name === "Sneakers" ? sneakers : product.name === "Sweater" && sweater}/>
                  <p>{product.company}</p>
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                  <p>Sz: {product.size}</p>
                  <p>Qty: {product.quantity}</p>
                </div>
              );
            })}
          </section>
          <section className="checkoutSection">
            <p className="cartTotal">TOTAL ${cartTotalSum}</p>
            <p className="continue" onClick={() => setShowCart(!showCart)}>
              Continue Shopping
            </p>
            <Link to='/checkout' onClick={() => setShowCart(false)}>
              PROCEED TO CHECKOUT
            </Link>
          </section>
        </div>
      )}
    </>
  );
}