import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import key from '../../../assets/key.svg';
import logo from '../../../assets/logo.svg';
import { WrapperTitlte, Img, Paragraph } from './index.style';

const KeyTerms = () => {
  return (
    <div>
      <Header headerImg={key} titleText="Key Terms" />
      <WrapperTitlte>
        <Img src={logo} alt="keyhub" />
        <h1>Hub</h1>
      </WrapperTitlte>
      <Paragraph>
        An organising group that may have access to a physical space that
        fosters communication and collaboration.An example might be a community
        center or a charity with an office
      </Paragraph>
      <Footer />
    </div>
  );
};

export default KeyTerms;
