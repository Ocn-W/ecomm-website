import React, {useState} from 'react';
import { useAtom } from 'jotai';
import { displayProdAtom } from './ProductCard';
import '../css/Product.scss';

export default function ProductBanner({productCompany, productName, productRating, productPrice, productId}) {
    const [numOfProduct, setProductNum] = useState(0);
    const [closeDisplay, setCloseDisplay] = useAtom(displayProdAtom)

    function IncrCount(prevCount){
        return prevCount + 1
    }
    function DecrCount(prevCount){
        if(prevCount > 0){
            return prevCount - 1;
        } else {
            return 0;
        }
    }

  return (
    <section className="productView">
      <button
        className="closeBtn"
        onClick={() => setCloseDisplay(!closeDisplay)}>X</button>
      <section className="productImages">
        <img src="#" />
        <div className="imageCarousel">
          <p>Mapped Images</p>
        </div>
      </section>
      <section className="productDetails">
        <div>
          <p>{productCompany}</p>
          <h1>{productName}</h1>
          <aside>{productRating}</aside>
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
          <button>Add to cart</button>
        </section>
      </section>
    </section>
  );
}
