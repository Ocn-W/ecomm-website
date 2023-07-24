import React from 'react';
import '../css/CheckoutPage.scss'
import { useAtom } from 'jotai';
import { addToCartAtom } from './ShoppingCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function CheckoutPage() {
  const [cartProductList, updateCartProductList] = useAtom(addToCartAtom);
  const itemTotal = sumOfProducts();
  const taxes = taxCalc(itemTotal);
  const total = itemTotal + taxes;

  function sumOfProducts() {
    const productSum = cartProductList
      .map((product) => product.price * product.quantity)
      .reduce((acc, currVal) => acc + currVal, 0);
    return productSum;
  }
//Random "sales" tax rate up to 7%
  function taxCalc(itemTotal) {
    const taxRate = (Math.random() * 3 + 4) / 100;
    return Math.floor(taxRate * itemTotal);
  };

  function removeProduct(id, size) {
    console.log(id)
    console.log('im trying to remove ' + id)
    return updateCartProductList(cartProductList.filter((product) => product.id !== id || product.size !== size));
  }

  return (
    <div className='checkout'>      
    <section className='checkoutForm'>
      {/* PAAYPAL API STUFF AND CHECKOUT FORM */}
      </section>
      <section className='checkoutProducts'>
        <div className='checkoutTotal'>
          <div>
            <FontAwesomeIcon icon={faShoppingCart}/>
            <p>Your Order</p>
          </div>
          <ul className='checkoutTotalInfo'>
            <li><p>Items</p><p>${itemTotal}</p></li>
            <li><p>Taxes</p><p>${taxes}</p></li>
            <li><p>Total</p><p>(USD) ${total}</p></li>
          </ul>
        </div>
        <div className='productSection'>
      {cartProductList.map((product) => {
              return (
                <div className='products'>
                  <img src="#" />
                  <p>{product.company}</p>
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                  <p>Sz: {product.size}</p>
                  <p>Qty: {product.quantity}</p>
                  <button style={{color:'rgba(206, 29, 29, 0.5)'}} onClick={() => removeProduct(product.id, product.size)}>Remove</button>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  )
}
