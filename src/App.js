import React from 'react';
import styled from 'styled-components';
import Listings from './Listings';

const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    width: 95%;
    font-family: 'Source Sans Pro', sans-serif;
`;

const Nav = styled.nav`
    background-color: #fff;
    @media (max-width: 900px) {
        text-align: center;
    }
`;

const Logo = styled.img`
    width: 75px;
    vertical-align: middle;
`;

const Main = styled.main`
    margin-top: 25px;
`;

const Footer = styled.footer`
    height: 80px;
    background-color: #808080;
`;

const Copyright = styled.p`
    color: #fff;
    padding-top: 7px;
`;

const App = () => {
    return (
        <div>
            <header>
            <Nav>
                <Container class="container">
                <Logo src="clayton.png" alt="Clayton Logo" />
                </Container>
            </Nav>
            </header>
            <Main>
            <Container class="container">
                <Listings />
            </Container>
            </Main>
            <Footer className="valign-wrapper">
                <Container class="container">
                    <Copyright>Copyright 2020 Clayton Homes. All Rights Reserved.</Copyright>
                </Container>
            </Footer>
        </div>
    )
}

export default App