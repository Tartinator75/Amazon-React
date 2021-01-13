import React from 'react';
import Header from '../components/header';
import ListProduct from '../components/listProduct'

import './App.css';

const Home = () => {
  return (
    <div className="App">
      <Header></Header>
      <ListProduct></ListProduct>
    </div>
  );
}


export default Home;
