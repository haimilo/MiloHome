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
`;
const Container = styled.div`

    h1 {
        text-align: center;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }
`;
const Wrapper = styled.div`
    padding: 3rem calc((100vw - 1300px) /2);
    display: flex;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;
const ColumnLeft = styled.div`
    margin-bottom: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '1' : '2')};
    flex-direction: column;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10% 0 10% 0;
        box-shadow: 0 0 3px;

        @media screen and (max-width: 768px) {
            width: 100%;
            height: 100%;
        }
    }

    p {
        margin: 1rem 0;
    }

    @media screen and (max-width: 768px) {
        padding: 0rem 2rem;
        margin-bottom: 1rem;
    }
`;
const ColumnRight = styled.div`
    margin-top: 8rem;
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '2' : '1')};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    object-fit: cover;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0 10% 0 10%;
        box-shadow: 0 0 3px;

        @media screen and (max-width: 768px) {
            width: 100%;
            height: 100%;
        }
    }

    p {
        margin: 1rem 0;
    }

    @media screen and (max-width: 768px) {
        padding: 0rem 2rem;
        margin-top: 1rem;

    }
`;
const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`;

function NewOffer({
    heading,
    title1,
    title2,
    label,
    reverse,
    image1,
    image2 }) {
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])
    return (
        <Section>
            <Container data-aos="fade">
                <h1>{heading}</h1>
                <Wrapper>
                    <ColumnLeft reverse={reverse}>
                        <img data-aos="zoom-out" src={image1} alt="offer" />
                        <p>{title1}</p>
                        <Button data-aos="fade-right" to="/homes">
                            {label}
                            <Arrow />
                        </Button>
                    </ColumnLeft>
                    <ColumnRight reverse={reverse}>
                        <img data-aos="zoom-out" src={image2} alt="offer" />
                        <p>{title2}</p>
                        <Button data-aos="fade-right" to="/homes">
                            {label}
                            <Arrow />
                        </Button>
                    </ColumnRight>
                </Wrapper>
            </Container>
        </Section>
    )
}

export default NewOffer