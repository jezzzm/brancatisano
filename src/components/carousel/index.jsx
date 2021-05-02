import React from 'react';
import PropTypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Image, { carouselImageProps } from './image';

const Carousel = ({ images }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const items = images.map(({ node }) => <Image {...node} />);

  return (
    <div style={{ backgroundColor: 'white' }}>
      <AliceCarousel
        autoPlayStrategy="action"
        items={items}
        autoPlay
        autoPlayInterval={1000}
        keyboardNavigation
        mouseTracking
        infinite
      />
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape(carouselImageProps),
    })
  ).isRequired,
};

export default Carousel;
