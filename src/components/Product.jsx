import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard';

export default function Product() {
    const [productList, setProductList] = useState([]);
    const [displayPage, setDisplayPage] = useState(true);

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

        //Generate random values for each product
        product.company =
          companies[Math.floor(Math.random() * companies.length)];
        product.name = prodNames[Math.floor(Math.random() * prodNames.length)];
        product.rating = ratings[Math.floor(Math.random() * ratings.length)];
        const priceRange = 300 - 30 + 1 + 30; //(MaxPrice - MinPrice + 1) + MinPrice
        product.price = Math.floor(Math.random() * priceRange);

        return (product = {
          company: product.company,
          name: product.name,
          price: product.price,
          rating: product.rating,
          id: productId,
        });
      }
      //Create an array of 12 items using the generateProd function
      setProductList(Array.from({ length: 12 }, generateProd));
    }, [setProductList]);
    
  return (
    <>
    {displayPage && productList.map((product, index) => 
    <ProductCard 
        key={index} 
        company={product.company}
        name={product.name}
        price={product.price}
        rating={product.rating}
        id={product.id}/>
    )}
    </>
  )
}
