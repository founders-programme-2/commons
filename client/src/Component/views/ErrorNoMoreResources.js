import React from 'react';
import Banner from '../Common/Banner/index';
import BannerFooter from '../Common/BannerFooter';

const ErrorNoMoreResources = props => {
  return (
    <div>
      <Banner
        title="Sorry!"
        subtitle="You have no more resources. Would you like to go back and change your methods or move onto the next step?"
      />
      <BannerFooter arrow={false} text="" select {...props} />
    </div>
  );
};

export default ErrorNoMoreResources;
