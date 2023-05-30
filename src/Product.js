import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdata, setCart } from './slices/Slice';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './product.css';



function Product() {
    const dispatch = useDispatch();
    const initialProduct = useSelector((state) => { return state.ecommerce })
    useEffect(() => {
        dispatch(fetchdata())
    }, [dispatch])
    if (initialProduct.loading) {
        return "...Loading"
    }

    function trimTitle(title) {
        return (
            title.length > 30 ? title.slice(0, 30) + "..." : title)
    }

    function trimDescription(desc) {
        return (
            desc.length > 70 ? desc.slice(0, 70) + "..." : desc
        )
    }

    function handleAddCart(e,items){
        e.preventDefault();
        dispatch(setCart(items))
        console.log(items)
    }



    return (
        <section>
            <h1>Products</h1>
            <div className='wrapper'>
                {
                    initialProduct.products.map((items, index) => {
                        return (
                            <div className='box' key={index}>
                                <img src={items.image} ></img>
                                <div className='text-content'>
                                    <div className='text-about'>
                                        <h2>{trimTitle(items.title)}</h2>
                                        <strong><span><CurrencyRupeeIcon /></span>{items.price}</strong>
                                        <details>
                                            {trimDescription(items.description)}
                                        </details>
                                    </div>
                                    <div className='text-anchor'>
                                        <a href='' className='anchor' onClick={(e) => handleAddCart(e, items)}>Add Cart</a>
                                    </div>

                                </div>
                            </div>

                        )
                    })


                }
            </div>
        </section>
    )
}

export default Product