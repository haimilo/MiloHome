import React, { useEffect } from 'react';
import styled, { css } from 'styled-components/macro';
import { footerData, footerDataTwo } from '../data/MenuData';
import { Button } from '../components/Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Aos from 'aos';

const MyFooter = styled.div`
    height: 100%;
    width: 100%;
    z-index: 100;
    padding: 4rem 0rem;
    positon: relative;
    bottom: 0;
    background: #000;
`;
const FooterWrapper = styled.div`
    display: flex;
    padding: 3rem 6rem;
    justify-content: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;
const FooterLeft = styled.div`
    color: #fff;
    flex: 6;
`;
const FooterSlogan = styled.div`
    padding: 2rem 0;
    font-size: clamp(1.5rem, 2.5vw, 2rem);
`;
const FooterSocial = styled.div`
    display: flex;
    font-size: clamp(1.5rem, 2vw, 2rem);
    justify-content: space-evenly;
    align-items: center;
`;
const IconCss = css`
    color: #cd853f;
    cursor: pointer;
    transition: 0.3s;
    
    &:hover {
        transform: translateY(-2px);
    }
`;
const Youtube = styled(FaYoutube)`
 ${IconCss};
`;
const Facebook = styled(FaFacebook)`
 ${IconCss};
`;
const Instagram = styled(FaInstagram)`
 ${IconCss};
`;
const LinkedIn = styled(FaLinkedin)`
 ${IconCss};
`;
const FooterRight = styled.div`
    color: #fff;
    flex: 4;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        align-items: center;
    }
`;
const ContactUs = styled.div`
    padding: 1rem 2rem;
    flex: 1;

    @media screen and (max-width: 768px) {
        padding: 0.8rem 0;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`;
const Offices = styled.div`
    padding: 1rem 2rem;
    flex: 1;

    @media screen and (max-width: 768px) {
        padding: 0.8rem 0;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`;
const Title = styled.div`
    font-weight: bold;
    padding: 0.8rem 0;
`;
const ContactLink = styled.div`
    padding: 0.2rem 0;
    transition: .5s ease;
    cursor: pointer;

    &:hover {
        color: #cd853f;
    };
    @media screen and (max-width: 768px) {
        padding: 0.5rem 0;
    }
`;
const OfficesContact = styled.div`

`;
const KeepInTouch = styled.div`

`;
const ConnectInput = styled.div`
    display: flex;
    justify-content: center;

    input {
        outline: none;
        border: none;
        padding: 0 18px;
    }
`;
const ContactWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;
const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`;

const Footer = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'easeOut',
            delay: 300
        })
    })
    return (
        <MyFooter>
            <FooterWrapper>
                <FooterLeft>
                    <FooterSlogan data-aos="fade">
                        <h2>Everything about</h2>
                        <h1>Your Dream Home</h1>
                    </FooterSlogan>
                    <FooterSocial>
                        <a data-aos="fade-up" href='https://www.youtube.com/channel/UCwT8YRIm_z3ftI2rnt6DGzw' target="blank">
                            <Youtube />
                        </a>
                        <a data-aos="fade-up" href="https://www.facebook.com/ngo.tuehai97/" target="blank">
                            <Facebook />
                        </a>
                        <a data-aos="fade-up" href="https://www.instagram.com/_painiag_/" target="blank">
                            <Instagram />
                        </a>
                        <a data-aos="fade-up" href="https://www.linkedin.com/in/h%E1%BA%A3i-ng%C3%B4-tu%E1%BB%87-455635204/" target="blank">
                            <LinkedIn />
                        </a>
                    </FooterSocial>
                </FooterLeft>
                <FooterRight>
                    <ContactWrapper>
                        <ContactUs data-aos="fade-left" >
                            <Title>Contact Us</Title>
                            {footerData.map((item, index) => {
                                return (
                                    <ContactLink to={item.link} key={index}>
                                        {item.title}
                                    </ContactLink>
                                )
                            })}
                        </ContactUs>
                        <Offices data-aos="fade-left">
                            <OfficesContact>
                                <Title>Offices</Title>
                                {footerDataTwo.map((item, index) => {
                                    return (
                                        <ContactLink to={item.link} key={index}>
                                            {item.title}
                                        </ContactLink>
                                    )
                                })}
                            </OfficesContact>
                        </Offices>
                    </ContactWrapper>
                    <KeepInTouch data-aos="fade-up">
                        <ConnectInput>
                            <input required type="email" placeholder="Enter your email..." />
                            <Button>
                                Keep In Touch
                                <Arrow />
                            </Button>
                        </ConnectInput>
                    </KeepInTouch>
                </FooterRight>
            </FooterWrapper>
        </MyFooter>
    )
}

export default Footer
