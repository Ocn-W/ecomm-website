import React from "react";
import { atom, useAtom } from "jotai";
import "../css/Favorites.scss";
import shirt from "../assets/shoppingPage/Shirt.jpg";
import jeans from "../assets/shoppingPage/Jeans.jpg";
import sneakers from "../assets/shoppingPage/Sneakers.jpg";
import sweater from "../assets/shoppingPage/Sweater.jpg";

export const favoriteDisplayAtom = atom(false);
export const addToFavoritesAtom = atom([]);

export default function Favorites() {
  const [showFavorites, setShowFavorites] = useAtom(favoriteDisplayAtom);
  const [insideFavorites, updateFavoritesList] = useAtom(addToFavoritesAtom);

  function removeProduct(id) {
    return updateFavoritesList(insideFavorites.filter((product) => product.id !== id));
  }

  return (
    <>
      {showFavorites && (
        <div className="favoriteCart">
          <h2>FAVORITES</h2>
          <section className="favoriteSection">
            {insideFavorites.map((product, index) => {
              return (
                <div className="faveProduct">
                  <img src={product.name === "Shirt" ? shirt : product.name === "Jeans" ? jeans : product.name === "Sneakers" ? sneakers : product.name === "Sweater" && sweater}/>
                  <p>{product.company}</p>
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                  <button style={{color:'rgba(206, 29, 29, 0.5)'}} onClick={() => removeProduct(insideFavorites[index].id)}>Remove</button>
                </div>
              );
            })}
            
          </section>
          <div>
            <p
              className="continue"
              onClick={() => setShowFavorites(!showFavorites)}>
              Continue Shopping
            </p>
          </div>
        </div>
      )}
    </>
  );
}
