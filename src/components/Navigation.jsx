import React from "react";
import "../css/Navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart,faMagnifyingGlass,faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import ShoppingCart, { addToCartAtom, showCartAtom } from "./ShoppingCart";

export default function Navigation() {
  const cart = useAtom(addToCartAtom);
  const [checkout, setCheckout] = useAtom(showCartAtom);
  const [showCart, setShowCart] = useAtom(showCartAtom);
  const cartTotal = totalQuantity();

  function totalQuantity() {
    const productQuantities = cart[0].map(product => product.quantity).reduce((acc, currVal) => acc + currVal, 0); 
    return productQuantities;
  }

  return (
    <>
    <nav>
      <section className="navUpper">
        <Link to='/'>Retail Site</Link>
        <div className="navIcons">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ cursor: "pointer" }}
          />
          <FontAwesomeIcon icon={faHeart} style={{ cursor: "pointer" }} />
            <div className="navCart" >
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ cursor: "pointer",fontSize:'16px'}}
              onClick={() => setShowCart(!showCart)}
            />
            <p>{cartTotal}</p>
          </div>
        </div>
      </section>
      <ul>
        <li>
          <Link to="shop">Mens</Link>
        </li>
        <li>
          <Link to="/shop">Womens</Link>
        </li>
        <li>
          <Link to="/shop">Accessories</Link>
        </li>
        <li>
          <Link to="/shop">Sale</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
      </ul>
    </nav>
  {showCart && <ShoppingCart/>}
  </>);
}
