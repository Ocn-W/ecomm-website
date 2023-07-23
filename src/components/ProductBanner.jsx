import React, { useState } from "react";
import { useAtom } from "jotai";
import { displayProdAtom } from "./ProductCard";
import { addToCartAtom } from "./ShoppingCart";
import "../css/Product.scss";
import shirt from "../assets/TShirt.jpg";
import img2 from '../assets/LongSleeve.jpg';
import img3 from '../assets/Sweater.jpg';
import img4 from '../assets/Jacket.jpg';

export default function ProductBanner({company,name,rating,price,id,}) {
  const [numOfProduct, setProductNum] = useState(1);
  const [productSize, setProductSize] = useState('');
  const [insideCart, setInsideCart] = useAtom(addToCartAtom);
  const [closeDisplay, setCloseDisplay] = useAtom(displayProdAtom);
  const [zoomed, setZoomed] = useState(false);
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const [currProdImg, setCurrProdImg] = useState(shirt);

  function addToCart() {
    const product = {
      company:company, 
      name:name,
      rating:rating, 
      price:price, 
      id:id,
    };
    return setInsideCart((prev) => [product, ...prev]);
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

  return (
    <section className="productView">
      <button
        className="closeBtn"
        onClick={() => setCloseDisplay(!closeDisplay)}
      >
        X
      </button>
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
          <img src={currProdImg} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
        </div>
        <div className="imageSelect">
          <img src={shirt} onClick={() => setCurrProdImg(shirt)}/>
          <img src={img2} onClick={() => setCurrProdImg(img2)}/>
          <img src={img3} onClick={() => setCurrProdImg(img3)}/>
          <img src={img4} onClick={() => setCurrProdImg(img4)}/>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius
            sodales justo, in varius ipsum aliquet quis. Nam lorem nulla,
            aliquam id tellus sit amet, tristique fermentum sapien.
          </aside>
          <h2>${price}</h2>
          <label htmlFor="product-size">Size: </label>
          <select id="product-size" name="product-size">
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
        </div>
        <section className="checkout">
          <div>
            <button onClick={() => setProductNum((prev) => DecrCount(prev))}>
              -
            </button>
            <p>{numOfProduct}</p>
            <button onClick={() => setProductNum((prev) => IncrCount(prev))}>
              +
            </button>
          </div>
          <button onClick={() => addToCart()} onSubmit={() => setProductSize(select.option.value)}>ADD TO CART</button>
        </section>
      </section>
    </section>
  );
}
