import React, { useEffect } from 'react';
import styled from 'styled-components';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { Button } from './Button';
import Aos from 'aos';
import "aos/dist/aos.css";

function NewOffer() {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <div>

        </div>
    )
}

export default NewOffer
