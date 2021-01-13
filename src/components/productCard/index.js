import React from 'react'
import styled from 'styled-components';


const ProductCard = (props) => {
    return(
        <ProductCardContainer>
            <ImgContainer>
                <ImageProduct src={props.img}>
                </ImageProduct>
            </ImgContainer>
            <DescriptionProductContainer>
                <BoldText>
                    {props.title}
                </BoldText>
                <div>
                    <CategoryProduct>{props.category}</CategoryProduct>
                </div>
                <BoldText>{props.price}€</BoldText>
                <div>
                    <TextDecription>{props.description.substring(0,150)} ...</TextDecription>
                </div>
            </DescriptionProductContainer>
        </ProductCardContainer>
        
    )
}

const TextDecription = styled.p`
    @media screen and (max-width: 840px) and (orientation: portrait){
        font-size: 10px;
    }

`
const CategoryProduct = styled.i`
    @media screen and (max-width: 840px) and (orientation: portrait){
        font-size: 9px;
    }
    @media screen and (max-width: 840px) and (orientation: landscape){
        margin: 10vh 0 !important;
    }
    color:gray;
`
const ProductCardContainer = styled.div`
    width : 98%;
    display: flex;
    border: 1px solid rgb(191 188 188);
    @media screen and (max-width: 840px) and (orientation: portrait){
        width:85vw;
        height: 20vh;
        margin: 3vh 8vw;
    }
    @media screen and (max-width: 840px) and (orientation: landscape){
        height: 65vh;
        margin: 3vh 1vw;
    }
`
const BoldText = styled.b`
     @media screen and (max-width: 840px) and (orientation: portrait){
        font-size: 11px;
    }
`
const ImgContainer = styled.div`
    background: rgb(236 235 235);
    @media screen and (max-width: 840px) and (orientation: portrait){
        height: 100%;
        width:85vw;
    }
    @media screen and (max-width: 840px) and (orientation: landscape){
        width: 35%;
        height: 65vh;
    }

    display: flex;
    justify-content:center;
    align-items: center;

`
const DescriptionProductContainer = styled.div`
    width: 62%;
    display:flex;
    flex-direction: column;
    @media screen and (max-width: 840px) and (orientation: portrait){
        height: 20vh;
        width:95vw;
    }
    @media screen and (max-width: 840px) and (orientation: landscape){
        width: 35%;
        height: 65vh;
        padding: 5vh 5vw;
    }

`
const ImageProduct = styled.img.attrs(props=>({
    src : props.src,
}))`
    width:70%;
    height:100%;
`
export default ProductCard;