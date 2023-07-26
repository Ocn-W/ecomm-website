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
    return updateCartProductList(cartProductList.filter((product) => product.id !== id || product.size !== size));
  }

  return (
    <div className='checkout'>      
    <section className='checkoutForm'>
      <h1>CHECKOUT</h1>
      <form>
        <section className='paymentSection'>
         <div>
          <input type='radio' id='debit' name='payment_method'/>
          <label htmlFor='debit'>Debit</label>
         </div>
         <div>
          <input type='radio' id='credit' name='payment_method'/>
          <label htmlFor='debit'>Credit</label>
         </div>
         <div>
          <input type='radio' id='paypal' name='payment_method'/>
          <label htmlFor='debit'>PayPal</label>
         </div>
        </section>
        <section className='contactSection'>
          <label htmlFor='email' style={{textDecoration:'underline'}}>Contact Information</label>
          <input type='email' id='email' name='email' placeholder='Email'/>
          <div>
            <input type='checkbox' id='newsletter_sub'/>
            <label>Keep me up to date on news and exclusive offers!</label>
          </div>
        </section>
        <section className='shippingSection'>
          <label htmlFor='shipping-info' style={{textDecoration:'underline'}}>Shipping Information</label>
          <div>
            <input type='text' id='shipping-info' name='first_name' placeholder='First Name'/>
            <input type='text' id='shipping-info' name='last_name' placeholder='Last Name'/>
          </div>
          <input type='text' id='shipping-info' name='company' placeholder='Company (optional)' style={{width:'50%'}}/>
          <input type='text' id='shipping-info' name='address' placeholder='Address' style={{width:'50%'}}/>
          <input type='text' id='shipping-info' name='address_extra' placeholder='Apartment, suite, etc. (optional)' style={{width:'50%'}}/>
          <input type='text' id='shipping-info' name='city' placeholder='City' style={{width:'50%'}}/>
          <div>
            <input type='text' id='shipping-info' name='country' placeholder='Country'/>
            <input type='number' id='shipping-info' name='postal_code' placeholder='Postal Code'/>
          </div>
          <input type='phone' id='shipping-info' name='phone' placeholder='Phone (optional)' style={{width:'50%'}}/>
        </section>
        <button onClick={() => alert('This is a mock form, thank you for using the demo!')}>Continue &#x2192;</button>
      </form>
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
