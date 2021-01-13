import React from 'react'
import styled from 'styled-components';


const ProductCartCard = props => {
    return(
        <ProductCartContainer>
            <InfoProductCart>
                <StyledImg src={props.img}></StyledImg>
                <StyledText>{props.description}<br></br>
                <StyledSpan color="red">{props.price.toFixed(2)}€</StyledSpan><br></br>
                <StyledSpan color="green">En stock</StyledSpan>
                </StyledText>
            </InfoProductCart>
        </ProductCartContainer>
        
    )
}

const ProductCartContainer = styled.div`
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
`
const InfoProductCart = styled.div`
    display: flex;
`
const StyledText = styled.p`
@media screen and (max-width: 840px) and (orientation: landscape){
    font-size: 25px;
    margin: 5% ;
    }
@media screen and (max-width: 840px) and (orientation: portrait){
       font-size: 12px
    }
`
const StyledImg = styled.img`
@media screen and (max-width: 840px) and (orientation: landscape){
        width: 30%;
    }
@media screen and (max-width: 840px) and (orientation: portrait){
        width: 30%;
    }
    
`
const StyledSpan = styled.span`
    color:${props => props.color};

`

export default ProductCartCard;