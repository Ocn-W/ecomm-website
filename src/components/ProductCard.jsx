import React, { useState } from 'react';
import { atom, useAtom } from 'jotai';
import '../css/Product.scss';
import ProductBanner from './ProductBanner';

export const displayProdAtom = atom(false);

export default function ProductCard({company, name, rating, price, id}) {  
  const [showProduct, setShowProduct] = useAtom(displayProdAtom);
  const [selectedProdId, setSelectedProdId] = useState(null);

  function displayProduct(selectedId){
    setSelectedProdId(selectedId);
    setShowProduct(true);
  }

  return (
    <section className='product'>
        <img src='#'/>
        <a onClick={() => displayProduct(id)}>{company}</a>
        <a onClick={() => displayProduct(id)}>{name}</a>
        <p>${price}</p>
        <div className='productBtns'>
            <button onClick={() => displayProduct(id)}>Add to Cart</button>
            <button>Favorite</button>
        </div>
        {showProduct && selectedProdId === id && (
        <ProductBanner 
          productCompany={company} 
          productName={name} 
          productRating={rating} 
          productPrice={price} 
          productId={id}
        />
        )}
    </section>

  )
}
