import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { productAtom } from '../components/Product';
import '../css/ShoppingPage.scss';
import Product from './Product';

export default function ShoppingPage() {
  const [priceFilter, showPriceFilter] = useState(false);
  const [ratingFilter, showRatingFilter] = useState(false);
  const [priceFilterVal, setPriceFilterVal] = useState(0);
  const [ratingFilterVal, setRatingFilterVal] = useState('');
  const [product] = useAtom(productAtom);

  function togglePriceFilter(priceFilter) {
    return showPriceFilter(!priceFilter);
  }
  function toggleRatingFilter(ratingFilter) {
    return showRatingFilter(!ratingFilter)
  }

  console.log(product)

  function filterByPrice() {
    priceFilterVal <= product.price && product.map(product => {return product})
  }
  function filterByRating() {
    ratingFilterVal === product.rating && product.map(product => {return product})
  }

  return (
    <div className='shoppingPage'>
        <section className='filterBar'>
          <h2>FILTER</h2>
          <div className='filterPrice'>
            <div className='fPInfo'>
              <p>Pricing</p>
              <button onClick={() => togglePriceFilter(priceFilter)}>{priceFilter ? '-' : '+'}</button>
            </div>
            {priceFilter && (
              <div className='fPRange'>
              <label htmlFor='price-filter-low'>$0</label>
                <input type='range' name='price-filter' min={0} max={300} onChange={filterByPrice}/>
              <label htmlFor='price-filter-high'>$300</label>
            </div>)}
          </div>
          <div className='filterRating'>
            <div className='fRInfo'>
              <p>Rating</p>
              <button onClick={() => toggleRatingFilter(ratingFilter)} onChange={() => setRatingFilterVal(e.target.value)}>{ratingFilter ? '-' : '+'}</button>
            </div>
            {ratingFilter && (
              <ul>
                <li><input type='radio' name='rating-filter' value='★✩✩✩✩' id='one-star' onChange={filterByRating}/><label htmlFor='one-star'>★✩✩✩✩</label></li>
                <li><input type='radio' name='rating-filter' value='★★✩✩✩' id='two-star' onChange={filterByRating}/><label htmlFor='two-star'>★★✩✩✩</label></li>
                <li><input type='radio' name='rating-filter' value='★★★✩✩' id='three-star' onChange={filterByRating}/><label htmlFor='three-star'>★★★✩✩</label></li>
                <li><input type='radio' name='rating-filter' value='★★★★✩' id='four-star' onChange={filterByRating}/><label htmlFor='four-star'>★★★★✩</label></li>
                <li><input type='radio' name='rating-filter' value='★★★★★' id='five-star' onChange={filterByRating}/><label htmlFor='five-star'>★★★★★</label></li>
              </ul>
            )}
          </div>
        </section>
        <section className='clothingSection'>
          <Product/>
          <div className='changePage'>
            <button>Previous</button>
            <button>Next</button>
          </div>
        </section>
    </div>
  )
}
