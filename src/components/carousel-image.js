import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

const StyledImg = styled(Img)`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

const CarouselImage = props => <StyledImg {...props} />;

export default CarouselImage;
