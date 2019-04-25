import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import key from '../../../assets/key.svg';
import { WrapperTitlte, Img, Paragraph, Title } from './index.style';
import keyTerms from '../../../fakeData/keyTerms';


const KeyTerms = () => {
  return (
    <div>
      <Header headerImg={key} titleText="Key Terms" />
      {keyTerms.map(elements => {
        return (
          <div>
            <WrapperTitlte>
              <Img src={elements.img} alt="keyhub" key={elements.id} />
              <Title>{elements.title}</Title>
            </WrapperTitlte>
            <Paragraph>{elements.content}</Paragraph>
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default KeyTerms;
