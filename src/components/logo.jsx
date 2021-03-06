import React from 'react';
import { Link } from 'gatsby';
import { ReactSVG } from 'react-svg';

import styled from '@emotion/styled';
import { colors, widths } from '../utils/constants';

const StyledLogoLink = styled(Link)`
  svg {
    height: 35px;
    width: 80px;
    margin: 0.8em 0 0.4em;
    color: ${colors.secondary};
    path {
      transition: 0.2s all;
    }
    &:hover path {
      fill: ${colors.light} !important;
    }
    @media (max-width: ${widths.sm}) {
      height: 28px;
      width: 70px;
    }
  }
`;

const Logo = () => (
  <StyledLogoLink to="/">
    <ReactSVG src="/brancatisano.svg" />
  </StyledLogoLink>
);

export default Logo;
