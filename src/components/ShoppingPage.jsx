import React, { useState, useEffect } from 'react';
import '../css/ShoppingPage.scss';
import ProductCard from './ProductCard';

export default function ShoppingPage() {
  const [priceFilter, setPriceFilter] = useState(false);
  const [ratingFilter, setRatingFilter] = useState(false);
  const [priceFilterVal, setPriceFilterVal] = useState(30);
  const [ratingFilterVal, setRatingFilterVal] = useState(null);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    function generateProd() {
      let product = {
        company: "",
        name: "",
        price: 0,
        rating: "",
        id: "",
      };
      const companies = [
        "Trendy Trove",
        "Haute Haven",
        "Dapper Finesse",
        "Couture Collective",
        "Luxe Threads",
      ];
      const prodNames = ["Shirt", "Jeans", "Sweater", "Sneakers"];
      const ratings = ["★✩✩✩✩", "★★✩✩✩", "★★★✩✩", "★★★★✩", "★★★★★"];

      //Generate a random 5 character "id" to identify individual products
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const productId = Array.from(
        { length: 5 },
        () => characters[Math.floor(Math.random() * characters.length)]
      ).join("");

      //Generate random values for each product attribute
      product.company = companies[Math.floor(Math.random() * companies.length)];
      product.name = prodNames[Math.floor(Math.random() * prodNames.length)];
      product.rating = ratings[Math.floor(Math.random() * ratings.length)];
      const priceRange = (300 - 30 + 1) + 30; //(MaxPrice - MinPrice + 1) + MinPrice
      product.price = Math.floor(Math.random() * priceRange);

      return (
        product = {
        company: product.company,
        name: product.name,
        price: product.price,
        rating: product.rating,
        id: productId,
      })
    }
    //Create an array of 15 items using the generateProd function
    setProductList(Array.from({ length: 15 }, generateProd));
  }, [setProductList]);

  function togglePriceFilter(priceFilter) {
    setRatingFilter(false);
    return setPriceFilter(!priceFilter);
  }
  function toggleRatingFilter(ratingFilter) {
    setPriceFilter(false);
    return setRatingFilter(!ratingFilter);
  }

  function priceVal(e) {
    setPriceFilterVal(parseInt(e.target.value))
  }
  function ratingVal(e) {
    setRatingFilterVal(e.target.value)
  }

  function filterByPrice(productList) {
    return productList.filter((product) => product.price <= priceFilterVal).map((product, index) => (
      <ProductCard
        company={product.company}
        name={product.name}
        price={product.price}
        rating={product.rating}
        id={product.id}
        key={index}
      />
    ))
  }

  function filterByRating(productList) {
    return productList.filter((product) => product.rating === ratingFilterVal).map((product, index) => (
      <ProductCard
        company={product.company}
        name={product.name}
        price={product.price}
        rating={product.rating}
        id={product.id}
        key={index}
      />
    ))
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
            {priceFilter && (<>
              <p>Sort from: ${priceFilterVal}</p>
            <div className='fPRange'>
              <label htmlFor='price-filter-low'>$30</label>
                <input type='range' name='price-filter' min={30} max={300} value={priceFilterVal} onChange={(e) => priceVal(e)}/>
              <label htmlFor='price-filter-high'>$300</label>
            </div></>)}
          </div>
          <div className='filterRating'>
            <div className='fRInfo'>
              <p>Rating</p>
              <button onClick={() => toggleRatingFilter(ratingFilter)}>{ratingFilter ? '-' : '+'}</button>
            </div>
            {ratingFilter && (
              <ul>
                <li><input type='radio' name='rating-filter' value='★✩✩✩✩' id='one-star' onClick={(e) => ratingVal(e)}/><label htmlFor='one-star'>★✩✩✩✩</label></li>
                <li><input type='radio' name='rating-filter' value='★★✩✩✩' id='two-star' onClick={(e) => ratingVal(e)}/><label htmlFor='two-star'>★★✩✩✩</label></li>
                <li><input type='radio' name='rating-filter' value='★★★✩✩' id='three-star' onClick={(e) => ratingVal(e)}/><label htmlFor='three-star'>★★★✩✩</label></li>
                <li><input type='radio' name='rating-filter' value='★★★★✩' id='four-star' onClick={(e) => ratingVal(e)}/><label htmlFor='four-star'>★★★★✩</label></li>
                <li><input type='radio' name='rating-filter' value='★★★★★' id='five-star' onClick={(e) => ratingVal(e)}/><label htmlFor='five-star'>★★★★★</label></li>
              </ul>
            )}
          </div>
        </section>
        <section className='productSection'>
          <div className='products'>
          {
          priceFilter ? filterByPrice(productList) : 
          ratingFilter ? filterByRating(productList) : 
          productList.map((product, index) => {
            return (
              <ProductCard
                company={product.company}
                name={product.name}
                price={product.price}
                rating={product.rating}
                id={product.id}
                key={index}
              />
            )})
          }
          </div>  
          <div className='changePage'>
            <button>Previous</button>
            <button>Next</button>
          </div>
        </section>
    </div>
  )
}
