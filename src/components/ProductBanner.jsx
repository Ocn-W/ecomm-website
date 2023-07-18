import React, {useState} from 'react';
import '../css/Product.scss';

export default function ProductBanner() {
    const [numOfProduct, setProductNum] = useState(0);

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
    <section className='productView'>
        <section className='productImages'>
            <img src='#'/>
            <div className='imageCarousel'>
            <p>Mapped Images</p>
            </div>
        </section>
        <section className='productDetails'>
            <div>
                <p>Product Company</p>
                <h1>PRODUCT</h1>   
                <aside>product details..</aside>
                <h2>$0</h2>
                <aside>$oldprice</aside>
            </div>
            <section className='checkout'>
                <div>
                    <button onClick={() => setProductNum(prev => DecrCount(prev))}>-</button>
                    <p>{numOfProduct}</p>
                    <button onClick={() => setProductNum(prev => IncrCount(prev))}>+</button>
                </div>
                <button>Add to cart</button>
            </section>
        </section>
    </section>
  )
}
