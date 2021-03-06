import React, { useState } from 'react';
import ContentOption from './components/ContentOption';
import DropDown from './components/DropDown';
import Footer from './components/Footer';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import NewOffer from './components/NewOffer';
import { InfoData, InfoDataTwo, InfoDataThree, InfoDataFour } from './data/infoData';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyle';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Navbar toggle={toggle} />
        <DropDown isOpen={isOpen} toggle={toggle} />
        <Hero slides={SliderData} />
        <InfoSection {...InfoData} />
        <NewOffer {...InfoDataFour} />
        <ContentOption {...InfoDataThree} />
        <InfoSection {...InfoDataTwo} />
        <Footer />
      </>
    </div>
  );
}

export default App;
