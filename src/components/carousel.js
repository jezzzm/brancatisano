import React, { useState, useEffect, useCallback, Fragment } from 'react';
import { graphql } from 'gatsby';

//styles
import styled from '@emotion/styled';
import { colors, widths } from '../../constants';

//components
import CarouselImage from './carousel-image';
import CarouselNavBtn from './carousel-nav-btn';

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

const LeftNav = styled.div`
  left: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.4), transparent);
`;
const RightNav = styled.div`
  right: 0;
  background: linear-gradient(-90deg, rgba(0, 0, 0, 0.4), transparent);
`;

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, []);

  const moveLeft = () => {
    if (!images.length) {
      return;
    }
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex => currentIndex - 1);
    }
  };

  const moveRight = () => {
    if (!images.length) {
      return;
    }
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex => currentIndex + 1);
    }
  };

  const downHandler = e => {
    if (e.key === 'ArrowLeft') {
      moveLeft();
    } else if (e.key == 'ArrowRight') {
      moveRight();
    }
  };

  const currentImage = images && images[currentIndex].node;
  console.log('current', currentIndex);
  return (
    <Fragment>
      {images && (
        <StyledCarousel>
          <CarouselNavBtn clicked={moveLeft} direction="left" />
          <CarouselImage
            alt={currentImage.description}
            title={currentImage.title}
            fluid={currentImage.fluid}
          />
          <CarouselNavBtn clicked={moveRight} direction="right" />
        </StyledCarousel>
      )}
    </Fragment>
  );
};

export default Carousel;
