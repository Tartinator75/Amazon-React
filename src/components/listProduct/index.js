import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import axios from 'axios';
import ProductCard from '../productCard'
import {Link} from 'react-router-dom'


const ListProduct = () => {
    const [productList, setProductList] = useState([])

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
              .then(res => {
                setProductList(res.data)
                console.log(res.data)
            })
    },[])
    
 
            
        
  
    return(
        <ListProductContainer>
            {productList.map(product => 
                <StyledLink to={`/product/${product.id}`}>
                    <ProductCard key={product.id} price={product.price} title={product.title} img={product.image} description = {product.description} category = {product.category} ></ProductCard>
                </StyledLink>
            )}
        </ListProductContainer>
        
    )
}


const ListProductContainer = styled.div`


`
const StyledLink = styled(Link)`
    color: black;
    text-decoration:none;
`

export default ListProduct;