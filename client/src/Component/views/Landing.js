import React from 'react';
import Banner from '../Common/Banner/index';
import BannerFooter from '../Common/BannerFooter';

const Home = props => {
  return (
    <div>
      <Banner title="Commons" subtitle={null} />
      <BannerFooter
        arrow
        text="A game strategizing collaboration between communities and networks."
        select={null}
        {...props}
      />
    </div>
  );
};

export default Home;
