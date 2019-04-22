import React from 'react';
import Banner from '../Common/Banner/index';
import BannerFooter from '../Common/BannerFooter';

const ErrorResources = props => {
  return (
    <div>
      <Banner
        title="Wait!"
        subtitle="You still have resources to spend! Would you like to go back and select more tools or move onto the next step?"
      />
      <BannerFooter arrow={false} text="" select {...props} />
    </div>
  );
};

export default ErrorResources;
