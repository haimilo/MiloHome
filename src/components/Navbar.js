//rafce
import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from '../components/Button';
import Bars from '../images/bars.svg';
// import { FaBars } from 'react-icons/fa';

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: rgba(64, 64, 64, 0.5);
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    cursor: pointer;
    text-decoration: none;
`

const Logo = styled(Link)`
    ${NavLink};
    font-style: italic;
`;
// const MenuBars = styled(FaBars)`
//     display: none;

//     @media screen and (min-width: 768px) {
//         display: block;
//     }
// `;
const MenuBars = styled.i`
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
        
    @media screen and (min-width: 768px) {        
        display: none;
    }
`;
const NavMenu = styled.div`
    display: none;


    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        margin-right: -48px;
    }
`;
const NavMenuLinks = styled(Link)`
    ${NavLink}
`;
const NavBtn = styled.div`
    display: none;

    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        margin-right: 24px;
    }
`;

const Navbar = ({ toggle }) => {
    return (
        <Nav>
            <Logo to="/">MiloHome</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/login" primary='true'>Login/ Join</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
