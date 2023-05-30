import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const cartData = useSelector((state) => { return state.ecommerce })

  useEffect(()=>{
    localStorage.setItem("product", JSON.stringify(cartData.cart))
  },[cartData.cart]) 
  // console.log(cartData)
  return (
    <>
      <section className='cart'>
        <h2>Cart</h2>
        <div className='cart-list'>
          {
            cartData.cart.map((items, index) => {
              return (
                <div className='cart-item' key={index}>
                  <div className='cart-item-image'>
                    <img src={items.image} alt={items.name} />
                  </div>
                  <div className='cart-item-info'>
                    <h4>{items.title}</h4>
                    <p>{items.description}</p>
                    <p>{items.price}</p>
                  </div>
                </div>
              )
            })

          }

        </div>
      </section>
    </>
  )
}

export default Cart