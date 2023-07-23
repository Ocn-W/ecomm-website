import React, { useState } from 'react';
import { atom, useAtom } from 'jotai';
import '../css/Product.scss';
import ProductBanner from './ProductBanner';

export const displayProdAtom = atom(false);

export default function ProductCard({company, name, rating, price, id}) {  
  const [showProduct, setShowProduct] = useAtom(displayProdAtom);
  const productList = [{
    company: company,
    name: name,
    rating: rating,
    price: price,
    id: id
  }];
  const selected = productList.find(product => product.id === id);

  function displayProduct(selected){
    console.log(selected)
    setShowProduct(true)
  }

  return (
    <section className='product'>
        <img src='#'/>
        <a onClick={() => displayProduct(selected)}>{company}</a>
        <a onClick={() => displayProduct(selected)}>{name}</a>
        <p>${price}</p>
        <div className='productBtns'>
            <button onClick={() => displayProduct(selected)}>Add to Cart</button>
            <button>Favorite</button>
        </div>
        {showProduct && (
        <ProductBanner 
          company={selected.company} 
          name={selected.name} 
          rating={selected.rating} 
          price={selected.price} 
          id={selected.id}
        />
        )}
    </section>

  )
}
