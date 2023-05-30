import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { setDeleteItem } from './slices/Slice';

function Cart() {
  const dispatch=useDispatch();
  const cartData = useSelector((state) => { return state.ecommerce });

  function handleDelete (e, items){
    e.preventDefault();
    dispatch(setDeleteItem(items))
  }

  
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
                    <Link onClick={(e)=>handleDelete(e, items)}><DeleteIcon/></Link>
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