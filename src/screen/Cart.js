import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer'
import ListProductCart from '../components/listProductCart'

import './App.css';


const Cart = () => {
  return (
    <div className="Cart">
        <Header></Header>
        <ListProductCart></ListProductCart>
        <Footer></Footer>
    </div>
  );
}


export default Cart;
