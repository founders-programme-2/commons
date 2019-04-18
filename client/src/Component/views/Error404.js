import React from 'react';
import Banner from '../Common/Banner/index';

const error404 = () => {
  return (
    <div>
      <Banner
        title="404"
        subtitle="Sorry, the page you are looking for is unavailable."
      />
    </div>
  );
};

export default error404;
