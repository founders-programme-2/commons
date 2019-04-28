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
          <div key={elements.id}>
            <WrapperTitlte>
              <Img src={elements.img} alt="keyhub" />
              <Title>{elements.title}</Title>
            </WrapperTitlte>
            <Paragraph>{elements.content}</Paragraph>
          </div>
        );
      })}
      <Footer backLink="/" nextLink="/howTo" reviewScenario={false} />
    </div>
  );
};

export default KeyTerms;
