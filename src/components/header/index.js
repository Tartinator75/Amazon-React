import React from 'react'
import styled from 'styled-components';
import menuBurger from '../../assets/list.png'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <HeaderContainer>
            <HeaderTopContainer>
                <HeaderTopHalfContainer>
                    <Image src={menuBurger} width="40" height="50"></Image>
                    <Logo>Amazon.fr</Logo>
                </HeaderTopHalfContainer>
                <HeaderTopHalfContainer>
                    <StyledLink>Se connecter</StyledLink>
                    <StyledLink to="/cart">panier</StyledLink>
                </HeaderTopHalfContainer>
            </HeaderTopContainer>
            <div id="nav-search">
                <form id="nav-search-bar-from">
                    <SearchContainer>
                        <div id="nav-search-left">
                            <Input type="search"></Input>
                        </div>
                        <div id="nav-search-right">
                            <Button color="#febd69">Search</Button>
                        </div>
                    </SearchContainer>
                </form>
            </div>
            <HeaderBottomContainer>
                <StyledLink to="/">VentesFlash</StyledLink>
                <StyledLink to="/">Prime</StyledLink>
                <StyledLink to="/">Musique</StyledLink>
                <StyledLink to="/ProductId">Meilleurs vente</StyledLink>
            </HeaderBottomContainer>
        </HeaderContainer>
        
    )
}



const HeaderContainer = styled.div`
  background-color: #131921;
  color: white;
  width: 100vw;
`
const StyledLink = styled(Link)`
    color: white;
    text-decoration:none;
    @media screen and (max-width: 840px) and (orientation: landscape){
        width: 100vw;
        margin: 3vh 5vw;
    }
    
    @media screen and (max-width: 840px) and (orientation: portrait){
        margin: 1vh 5vw;
        font-size: 9px;
    }
`
const Logo = styled.b`
    color: white;
    margin: 5vh 2vw;
`

const HeaderTopContainer = styled.div`
    display:flex;
    color: white;

    @media screen and (max-width: 640px){
        width: 100vw;
        height: 5vh;

    }
    @media screen and (max-width: 840px) and (orientation: landscape){
        width: 100vw;
        height: 20vh;
    }
`
const HeaderBottomContainer = styled.div`
    display: flex;
    justify-content:space-around;
`

const HeaderTopHalfContainer = styled.div`
    width:50%;
    display:flex;
`
const SearchContainer = styled.div`
    
    display: flex;
    
    @media screen and (max-width: 840px) and (orientation: portrait){
        padding: 3vh 4vw 0 2vw;

    }
    @media screen and (max-width: 840px) and (orientation: landscape){
        padding: 3vh  2vw;

    }
    
`
const Button = styled.button`
    @media screen and (max-width: 640px){
        background-color: ${props => props.color};
        height:3vh;
        width:10vw;

    }
    @media screen and (max-width: 840px) and (orientation: landscape){
        background-color: ${props => props.color};
        height:10vh;
        width:10vw;

    }

`
const Image = styled.img.attrs(props=>({
    src : props.src,
}))`
    @media screen and (max-width: 840px) and (orientation: portrait){
        display : flex;
        height: ${props => props.width} vh ;
        width:${props => props.width} vw ;

    }
    @media screen and (max-width: 840px) and (orientation: landscape){
        display : flex;
        height: ${props => props.width} vh;
        width:${props => props.width} vw;
        margin: 10px

    }
`

const Input = styled.input.attrs(props => ({
    type: props.type || "text",
}))`
    @media screen and (max-width: 840px) and (orientation: portrait){
        height:3vh;
        width:85vw;
    }
    @media screen and (max-width: 840px) and (orientation: landscape){
        display : flex;
        height:10vh;
        width:85vw;

    }
    
`


export default Header;