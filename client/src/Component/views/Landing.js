import React from 'react';
import Banner from '../Common/Banner/index';
import BannerFooter from '../Common/BannerFooter';

const Home = () => {
  return (
    <div>
      <Banner title="Commons" subtitle={null} />
      <BannerFooter
        arrow
        text="A game to nurture and develop common places , and provide for
        collaboration in communities and networks"
      />
    </div>
  );
};

export default Home;
