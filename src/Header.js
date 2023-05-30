import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { useSelector } from 'react-redux';

function Header() {
  const data=useSelector((state)=>{return state.ecommerce})
  return (
    <>
    <navbar>
        <h1>Ecommerce</h1>
        <ul>
            <li><Link to='./home'>Home</Link></li>
            <li><Link to='./about'>About</Link></li>
            <li><Link to='./cart'>Add Cart<span>{data.cart.length}</span></Link></li>
        </ul>
    </navbar>
    </>
  )
}

export default Header