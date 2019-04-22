import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import Button from '../../Common/Button';


const Play = () => {
  return (
    <div>
      <Header headerImg={null} titleText="Choose your game play" />
      <div>
        <Button />
        <Button />
      </div>
      <Footer />
    </div>
  );
};
export default Play;
