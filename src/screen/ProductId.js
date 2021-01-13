import React from 'react';
import Header from '../components/header';
import ProductIdCard from '../components/productIdCard'
import Footer from '../components/footer'

import './App.css';

const ProductId = props=> {
  console.log(props)
  return (
    <div className="App">
      <Header></Header>
      <ProductIdCard idProduct = {props.match.params.id}></ProductIdCard>
      <Footer></Footer>
    </div>
  );
}


export default ProductId;
