import React, { useState } from "react";
import { useAtom } from "jotai";
import { displayProdAtom } from "./ProductCard";
import "../css/Product.scss";
import shirt from "../assets/TShirt.jpg";

export default function ProductBanner({
  productCompany,
  productName,
  productRating,
  productPrice,
  productId,
}) {
  const [numOfProduct, setProductNum] = useState(0);
  const [closeDisplay, setCloseDisplay] = useAtom(displayProdAtom);
  const [zoomed, setZoomed] = useState(false);
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });

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

  function IncrCount(prevCount) {
    return prevCount + 1;
  }
  function DecrCount(prevCount) {
    if (prevCount > 0) {
      return prevCount - 1;
    } else {
      return 0;
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
              backgroundImage: `url(${shirt})`,
            }}
          ></div>
          <img
            src={shirt}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="imageSelect">
          <img src="#" />
          <img src="#" />
          <img src="#" />
          <img src="#" />
        </div>
      </section>
      <section className="productDetails">
        <div>
          <h1>{productCompany}</h1>
          <h2>{productName}</h2>
          <aside style={{ color: "gold", textShadow: "0 0 1px black" }}>
            {productRating}
          </aside>
          <aside>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius
            sodales justo, in varius ipsum aliquet quis. Nam lorem nulla,
            aliquam id tellus sit amet, tristique fermentum sapien.
          </aside>
          <h2>${productPrice}</h2>
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
          <button>ADD TO CART</button>
        </section>
      </section>
    </section>
  );
}
