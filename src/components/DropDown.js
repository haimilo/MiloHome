import React from 'react';
import styled from 'styled-components/macro';
import { Button } from './Button';
import { menuData } from '../data/MenuData';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DropDownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%; 
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    left: 0;
    transition: 0.5s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;
const CloseIcon = styled(FaTimes)`
    color: #000d1a;
    border-radius: 50%;
    transition: 1s ease-in-out;
    
    &:hover { 
        background: #000d1a;
        color: #fff;
        transform: rotate(180deg);
    }
`;
const DropDownWrapper = styled.div`

`;
const DropDownMenu = styled.div`
    display: grid;
    gird-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
    }
`;
const DropDownLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    list-style-type: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #000d1a;
    }
`;
const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

const DropDown = ({ isOpen, toggle }) => {
    return (
        <DropDownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropDownWrapper>
                <DropDownMenu>
                    {menuData.map((item, index) => (
                        <DropDownLink to={item.link} key={index}>
                            {item.title}
                        </DropDownLink>
                    ))}
                </DropDownMenu>
                <BtnWrap>
                    <Button primary="true" round="true" big="true" to="/contact">
                        Contact Us
                    </Button>
                </BtnWrap>
            </DropDownWrapper>
        </DropDownContainer>
    )
}

export default DropDown
