import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import CarouselImage, { carouselImageProps } from './image';
import NavButton from './nav-button';
import { colors } from '../../../constants';

// TODO: load prev and next for speed

const StyledCarousel = styled.section`
  height: 61.8vh;
  max-height: 400px;
  background: pink;
  position: relative;

  .carousel-nav {
    height: 100%;
    top: 0;
    position: absolute;
    cursor: pointer;
    z-index: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover span {
      text-shadow: none;
    }
    span {
      display: inline-block;
      font-weight: bolder;
      font-size: 28px;
      color: ${colors.white};
      padding: 1rem;
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
      transition: 0.2s all;
    }
  }
`;

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = images && images[currentIndex].node;

  const moveLeft = () => {
    if (!images.length) {
      return;
    }
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex((curr) => curr - 1);
    }
  };

  const moveRight = () => {
    if (!images.length) {
      return;
    }
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((curr) => curr + 1);
    }
  };

  const downHandler = (e) => {
    if (e.key === 'ArrowLeft') {
      moveLeft();
    } else if (e.key === 'ArrowRight') {
      moveRight();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, []);

  return (
    <>
      {images && (
        <StyledCarousel>
          <NavButton onClick={moveLeft} direction="left" />
          <CarouselImage
            alt={currentImage.description}
            title={currentImage.title}
            fluid={currentImage.fluid}
          />
          <NavButton onClick={moveRight} direction="right" />
        </StyledCarousel>
      )}
    </>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape(carouselImageProps),
  })).isRequired,
};

export default Carousel;
