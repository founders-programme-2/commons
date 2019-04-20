import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import key from '../../../assets/key.svg';

const KeyTerms = () => {
  return (
    <div>
      <Header headerImg={key} titleText="Key Terms" />
      <h3>Hub</h3>
      <p>
        - An organising group that may have access to a physical space that
        fosters communication and collaboration
      </p>
      <br />
      <p>
        - An example might be a community center or a charity with an office
      </p>
      <Footer />
    </div>
  );
};

export default KeyTerms;
