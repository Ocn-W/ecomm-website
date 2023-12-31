import React, { useState } from "react";
import {useAtom } from "jotai";
import { addToCartAtom } from "./ShoppingCart";
import shirt from "../assets/shoppingPage/Shirt.jpg";
import jeans from "../assets/shoppingPage/Jeans.jpg";
import sneakers from "../assets/shoppingPage/Sneakers.jpg";
import sweater from "../assets/shoppingPage/Sweater.jpg";
import "../css/Product.scss";
import { addToFavoritesAtom } from "./Favorites";

export default function Product({ company, name, rating, price, id }) {
  const [showProduct, setShowProduct] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const [currProdImg, setCurrProdImg] = useState(name === "Shirt" ? shirt : name === "Jeans" ? jeans : name === "Sneakers" ? sneakers : name === "Sweater" && sweater);
  const [numOfProduct, setProductNum] = useState(1);
  const [size, setSize] = useState("XS");
  const [insideFavorites, setInsideFavorites] = useAtom(addToFavoritesAtom);
  const [insideCart, setInsideCart] = useAtom(addToCartAtom);

  function displayProduct() {
    setShowProduct(true);
  }

  //Image-Zoom Feature
  const handleMouseEnter = () => {
    setZoomed(true);
  };
  const handleMouseLeave = () => {
    setZoomed(false);
  };
  const handleMouseMove = (e) => {
    if (zoomed) {
      const imageRect = e.currentTarget.getBoundingClientRect();
      const lensSize = 200;
      const offsetX = e.nativeEvent.offsetX;
      const offsetY = e.nativeEvent.offsetY;
      const x = offsetX - lensSize / 2;
      const y = offsetY - lensSize / 2;

      // Calculate the final lens position
      const lensX = Math.min(Math.max(0, x), imageRect.width - lensSize);
      const lensY = Math.min(Math.max(0, y), imageRect.height - lensSize);

      // Update the lens position
      setLensPosition({ x: lensX, y: lensY });
    }
  };

//Product to Shopping Cart Features
  function IncrCount(prevCount) {
    return prevCount + 1;
  }
  function DecrCount(prevCount) {
    if (prevCount > 1) {
      return prevCount - 1;
    } else {
      return 1;
    }
  }
  function handleSizeSelect(e) {
    setSize(e.target.value);
  }
  function addToCart() {
    const newProduct = {
      company: company,
      name: name,
      rating: rating,
      price: price,
      size: size,
      quantity: numOfProduct,
      id: id,
    };

    // Check if the product with the same id and size is already in the cart
    const productIndex = insideCart.findIndex(
      (product) => product.id === id && product.size === size
    );

    // If the product is already in the cart, update its quantity
    if (productIndex !== -1) {
      setInsideCart((prev) =>
        prev.map((product, index) =>
          index === productIndex
            ? { ...product, quantity: product.quantity + numOfProduct }
            : product
        )
      );
    } else {
      // If the product is not in the cart, add it to the cart
      setInsideCart((prev) => [...prev, newProduct]);
    }
  }

  function addToFavorites(id) {
    // Check if the product with the same id and size already exists in favorites
    const checkFavorites = insideFavorites.some(
      (product) => product.id === id);

    if (checkFavorites) {
      alert('Product already exists in favorites.');
    } else {
      // Product doesn't exist in favorites, add it to the list
      const favoritesProduct = {
        company: company,
        name: name,
        rating: rating,
        price: price,
        id: id
      };
      setInsideFavorites((prevFavorites) => [...prevFavorites, favoritesProduct]);
    }
  }

  return (
    <>
      <section className="product">
        <img src={name === "Shirt" ? shirt : name === "Jeans" ? jeans : name === "Sneakers" ? sneakers : name === "Sweater" && sweater}/>
        <a onClick={() => displayProduct(id)}>{company}</a>
        <a onClick={() => displayProduct(id)}>{name}</a>
        <p>${price}</p>
        <div className="productBtns">
          <button onClick={() => displayProduct(id)}>Add to Cart</button>
          <button onClick={() => addToFavorites(id)}>Favorite</button>
        </div>
      </section>
      {showProduct && (
        <section className="productView">
          <section className="productImages">
            <div className="productImgContainer" onMouseMove={handleMouseMove}>
              <div
                className={`zoom ${zoomed ? "zoomed" : ""}`}
                style={{
                  marginTop: `${lensPosition.y}px`,
                  marginLeft: `${lensPosition.x}px`,
                  backgroundPosition: `-${lensPosition.x}px -${lensPosition.y}px`,
                  backgroundImage: `url(${currProdImg})`,
                }}
              ></div>
              <img
                src={currProdImg}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
            <div className="imageSelect">
              <img src={shirt} onClick={() => setCurrProdImg(shirt)} />
              <img src={jeans} onClick={() => setCurrProdImg(jeans)} />
              <img src={sneakers} onClick={() => setCurrProdImg(sneakers)} />
              <img src={sweater} onClick={() => setCurrProdImg(sweater)} />
            </div>
          </section>
          <section className="productDetails">
            <div>
              <h1>{company}</h1>
              <h2>{name}</h2>
              <aside style={{ color: "gold", textShadow: "0 0 1px black" }}>
                {rating}
              </aside>
              <aside>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                varius sodales justo, in varius ipsum aliquet quis. Nam lorem
                nulla, aliquam id tellus sit amet, tristique fermentum sapien.
              </aside>
              <h2>${price}</h2>
              <label htmlFor="product-size">Size: </label>
              <select
                id="product-size"
                name="product-size"
                value={size}
                onChange={handleSizeSelect}
              >
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <section className="checkout">
              <div>
                <button
                  onClick={() => setProductNum((prev) => DecrCount(prev))}
                >
                  -
                </button>
                <p>{numOfProduct}</p>
                <button
                  onClick={() => setProductNum((prev) => IncrCount(prev))}
                >
                  +
                </button>
              </div>
              <button onClick={() => addToCart()}>ADD TO CART</button>          
              <button style={{background:'none', color:'blue',textDecoration:'underline', fontSize:'18px'}} onClick={() => setShowProduct(false)}>close</button>
            </section>
          </section>
        </section>
      )}
    </>
  );
}