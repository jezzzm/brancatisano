import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

const StyledImg = styled(Img)`
  max-height: 500px;
`;

export const carouselImageProps = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fluid: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]).isRequired,
};

const CarouselImage = ({ description, title, fluid }) => (
  <StyledImg alt={description} title={title} fluid={fluid} draggable={false} />
);

CarouselImage.propTypes = carouselImageProps;

export default CarouselImage;
