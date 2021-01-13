import React from 'react'
import styled from 'styled-components';


const Footer = () => {
    return(
        <FooterContainer>
            <FirstContainer>
                <StyledLink>Retour en haut</StyledLink>
            </FirstContainer>
            <SecondContainer>
                <StyledContainer>
                    <StyledLinkFooter>Page d'accueil d'Amazon.fr</StyledLinkFooter>
                    <StyledLinkFooter>Chez vous</StyledLinkFooter>
                    <StyledLinkFooter>Vos commandes</StyledLinkFooter>
                    <StyledLinkFooter>vendre sur Amazon</StyledLinkFooter>
                    <StyledLinkFooter>Devenez client Amazon Business</StyledLinkFooter>
                    <StyledLinkFooter>Vendez sur Amazon Business</StyledLinkFooter>
                    <StyledLinkFooter>Information sur notre Markeplace</StyledLinkFooter>
                    <StyledLinkFooter>Gérer vos abonnements</StyledLinkFooter>
                    <StyledLinkFooter>Coordonnées 1-Click</StyledLinkFooter>
                    <StyledLinkFooter>Accéssibilité</StyledLinkFooter>
                </StyledContainer>
                <StyledContainer>
                    <StyledLinkFooter>Retour</StyledLinkFooter>
                    <StyledLinkFooter>Service client</StyledLinkFooter>
                    <StyledLinkFooter>Votre compte</StyledLinkFooter>
                    <StyledLinkFooter>Vos listes</StyledLinkFooter>
                    <StyledLinkFooter>Trouver une liste</StyledLinkFooter>
                    <StyledLinkFooter>Trouver un cadeau</StyledLinkFooter>
                    <StyledLinkFooter>Article que vous avez consultés récemment</StyledLinkFooter>
                    <StyledLinkFooter>Télécharger l'application Amazon</StyledLinkFooter>
                    <StyledLinkFooter>Recyclage (y compris les équipements éléctriques et électroniques</StyledLinkFooter>
                    <StyledLinkFooter>Site Amazon pour ordinateur</StyledLinkFooter>
                </StyledContainer>
            </SecondContainer>
            <ThirdContainer>
                <StyledLink>Déja client(e)? se connecter</StyledLink>
                <SubContainer>
                    <StyledText color="#999">Conditions générales de vente</StyledText>
                    <StyledText color="#999">Conditions de participation au programme Marketplace</StyledText>
                    <StyledText color="#999">Vos informations personnelles, coockies</StyledText>
                    <StyledText color="#999">Annonces basées sur vos centres d'intérêts</StyledText><br></br>
                    <StyledText color="#999">© 1996-2021 Amazon.com, Inc.</StyledText>
                </SubContainer>
            </ThirdContainer>
        </FooterContainer>
        
    )
}


const FooterContainer = styled.div`
    margin-top: 5%;
`

const StyledContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 5vh 5vw;
`
const FirstContainer = styled.div`
    width: 100%;
    background: #37475A;
    display:flex;
    justify-content:center;
    padding: 5vh 0;
`
const SecondContainer = styled.div`
    display: flex;
    background: #232F3E;

`
const ThirdContainer = styled.div`
    background: #131A22;
    display:flex;
    justify-content: space-between;
    align-items:center;
    flex-direction: column;
    padding: 3% 0;


`
const SubContainer = styled.div`
    margin: 2% 0;
    text-align: center;
`
const StyledLink = styled.a`
    color: white;
    font-weight:bold;
`
const StyledLinkFooter = styled.a`
    color: white;
    font-weight:bold;
    margin: 3% 0;
`
const StyledText = styled.p`
    color : ${props => props.color};
    margin: 1% 0;
`

export default Footer;