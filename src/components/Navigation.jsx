import React from "react";
import "../css/Navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart,faMagnifyingGlass,faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import Favorites, { favoriteDisplayAtom } from "./Favorites";
import ShoppingCart, { addToCartAtom, showCartAtom } from "./ShoppingCart";
import { addToFavoritesAtom } from "./Favorites";

export default function Navigation() {
  const cart = useAtom(addToCartAtom);
  const favorites = useAtom(addToFavoritesAtom);
  const [showCart, setShowCart] = useAtom(showCartAtom);
  const [showFavorites, setShowFavorites] = useAtom(favoriteDisplayAtom);
  const cartTotal = totalQuantity();

  function totalQuantity() {
    const productQuantities = cart[0]
      .map((product) => product.quantity)
      .reduce((acc, currVal) => acc + currVal, 0);
    return productQuantities;
  }

  return (
    <>
      <nav>
        <section className="navUpper">
          <Link to="/">Retail Site</Link>
          <div className="navIcons">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ cursor: "pointer" }}/>
            <div className="navFave">
              <FontAwesomeIcon 
                icon={faHeart} 
                style={{ cursor: "pointer" }}
                onClick={() => setShowFavorites(!showFavorites)}/>
                <p>{favorites[0].length}</p>
            </div>
            <div className="navCart">
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={{ cursor: "pointer", fontSize: "16px" }}
                onClick={() => setShowCart(!showCart)}/>
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
        </ul>
      </nav>
      {showCart && <ShoppingCart />}
      {showFavorites && <Favorites />}
    </>
  );
}