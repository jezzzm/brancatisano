import React from 'react';
import { Link } from 'gatsby';

//styles
import styled from '@emotion/styled';
import { colors, widths } from '../../constants';
import { ReactSVG } from 'react-svg';

const StyledLogoLink = styled(Link)`
  svg {
    height: 35px;
    width: 80px;
    margin: 0.8em 0 0.4em;
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

export default () => (
  <StyledLogoLink to="/">
    <ReactSVG src="/brancatisano.svg" />
  </StyledLogoLink>
);
