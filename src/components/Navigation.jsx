import React, { useState } from "react";
import "../css/Navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMagnifyingGlass,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <section className="navUpper">
        <Link to='/'>Retail Site</Link>
        <div className="navIcons">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ cursor: "pointer" }}
          />
          <FontAwesomeIcon icon={faHeart} style={{ cursor: "pointer" }} />
          <div className="navCart">
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ cursor: "pointer" }}
            />
            <p>0</p>
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
  );
}
