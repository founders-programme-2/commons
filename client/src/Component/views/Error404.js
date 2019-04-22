import React from 'react';
import Banner from '../Common/Banner/index';
import BannerFooter from '../Common/BannerFooter';

const Error404 = props => {
  return (
    <div>
      <Banner
        title="404!"
        subtitle="Sorry, the page you are looking for is unavailable."
      />
      <BannerFooter arrow text="" select={null} {...props} />
    </div>
  );
};

export default Error404;
