import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import ProductCartCard from '../productCartCard'
import StripeCheckout from 'react-stripe-checkout'


const ListProductCart = () => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))
    const [total, setTotal] = useState(0);
    useEffect(()=>{
        cart.forEach(product => {
            setTotal(total + product.price);
            console.log(cart);
        });
    }, [])
 
    return(
       <CartContainer>
            <StyledText>Sous-Total( 1 article) <StyledSpan color= "red">{total.toFixed(2)}€</StyledSpan></StyledText>
            <StyledText color="green">Votre commande est éligible à la livraison Standard gratuite en France métropolitaine. Restrictions applicables</StyledText>
            <StyledButton>Passer la commande</StyledButton>
            {cart.map(product => 
                    <ProductCartCard price={product.price} description={product.description} img={product.image}></ProductCartCard>
            )}
       </CartContainer>
    )
}
const CartContainer = styled.div``
const StyledButton = styled(StripeCheckout)`

    background:#f0c14b;
    color:green;
    margin: 5% 5%;
    width: 90%;
    border-radius: 5px;
    @media screen and (max-width: 840px) and (orientation: landscape){
        height: 15vh;
    }
    @media screen and (max-width: 840px) and (orientation: portrait){
        height: 6vh;
    }
    `
const StyledText = styled.p`
    color:${props => props.color};
    @media screen and (max-width: 840px) and (orientation: landscape){
        font-size: 20px;
    }
    @media screen and (max-width: 840px) and (orientation: portrait){
        font-size: 12px;
    }
    

`
const StyledSpan = styled.span`
    color:${props => props.color};

`

export default ListProductCart;