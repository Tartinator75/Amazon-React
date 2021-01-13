import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import axios from 'axios';


const ProductIdCard = props => {
    const [product, setProduct] = useState([])
    const idProduct = props.idProduct
    useEffect(() =>{
        axios.get(`https://fakestoreapi.com/products/${idProduct}`)
              .then(res => {
                setProduct(res.data)
                console.log(res.data)
            })
    },[])
    const addProduct = ()=>{
        let cart = localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')): [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart))
    }
    return(
       <ProductCardId>
            <StyledText color="#007185">Categorie : {product.category}</StyledText>
            <StyledText color="black">{product.description}</StyledText>
            <StyledImage src={product.image} ></StyledImage>
            <StyledText color="#B12704">Prix : {product.price}€</StyledText>
            <TextContainer>
                <StyledText><a href="#">Livraison GRATUITE</a> en France métropolitaine.</StyledText>
                <StyledText>Tous les prix incluent la tva.</StyledText>
            </TextContainer>
            <StyledText>Livré: <b>mercredi 20 janv.</b> <a href="#">Détails</a></StyledText>
            <StyledText>Livraison accélérée: <b>mardi 19 janv.</b> <a href="#">Détails</a></StyledText>
            <StyledButton onClick= {addProduct}>Ajouter au panier</StyledButton>
       </ProductCardId>
    )
}

const ProductCardId = styled.div`


`
const TextContainer = styled.div`
    margin: 0 0 5% 5%;
    width: 35vw;
`
const StyledButton = styled.button`

    background:#f0c14b;
    margin: 5vh 5%;
    width: 90%;
    border-radius: 10px;
    @media screen and (max-width: 840px) and (orientation: landscape){
        height: 10vh;
    }
    @media screen and (max-width: 840px) and (orientation: portrait){
        height: 5vh;
    }
    `
const StyledImage = styled.img`
    @media screen and (max-width: 840px) and (orientation: portrait){
        width: 50%;
        height: 30vh;
        margin: 10% 25%;
    }
    @media screen and (max-width: 840px) and (orientation: landscape){
        width: 40%;
        height: 50vh;
        margin: 5% 30%;
    }
`
const StyledText = styled.p`

    color: ${props => props.color};
    
    margin: 3vh 5vw;
`
export default ProductIdCard;