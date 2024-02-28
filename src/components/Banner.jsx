import React from 'react';

const Banner = () => {
  return (
    <section className="banner-image" id="home">
      <div>
        <h1 className="display-1 bannerHeading">
          Welcome to Our{' '}
          <span style={{ color: '#1dbf73' }}>Capstone Event</span>
        </h1>
        <p
          style={{ color: '#ffe900', fontFamily: 'Allura' }}
          className="display-6"
        >
          Thunder Devs
        </p>
      </div>
    </section>
  );
};

export default Banner;
