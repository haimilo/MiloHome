import React, { useEffect } from 'react';
import styled from 'styled-components';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { Button } from './Button';
import Aos from 'aos';
import "aos/dist/aos.css";

const Section = styled.div`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
    background-color: #000;
`;
const Container = styled.div`
    background-color: #fff;
    padding: 3rem calc((100vw - 1300px) /2);
    display: flex;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;
const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '1' : '2')};

    h1 {
        margi-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom: 2rem;
    }
`;
const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '2' : '1')};
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 120%;
        height: 140%;
        object-fit: cover;

        @media screen and (max-width: 768px) {
            width: 100%;
            height: 100%;
        }
    }
`;

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`;

function ContentOption({ heading, paragraphOne, paragraphTwo, label, reverse, image }) {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <Section>
            <Container data-aos="fade">
                <ColumnLeft data-aos="fade-right">
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button data-aos="fade-up" to="/homes">
                        {label}
                        <Arrow />
                    </Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img data-aos="zoom-out" src={image} alt="interior" />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default ContentOption
