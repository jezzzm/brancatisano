import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

const StyledImg = styled(Img)`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

export const carouselImageProps = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fluid: PropTypes.oneOf([PropTypes.arrayOf(PropTypes.object), PropTypes.object]).isRequired,
};

const CarouselImage = ({ description, title, fluid }) => (
  <StyledImg alt={description} title={title} fluid={fluid} />
);

CarouselImage.propTypes = carouselImageProps;

export default CarouselImage;
