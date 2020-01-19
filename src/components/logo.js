import React from 'react';
import styled from '@emotion/styled';
import { colors, widths } from '../../constants';
import { Link } from 'gatsby';

const SB = styled.span`
  color: ${colors.white};
  transition: 0.15s all;
  &:hover {
    color: ${colors.secondary};
  }
`;
const A = styled.span`
  color: ${colors.secondary};
`;
const StyledHeading = styled.h1`
  font-size: 36px;
  @media (max-width: ${widths.xs}px) {
    font-size: 28px;
  }
`;

const StyledLogoLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

export default () => (
  <StyledLogoLink to="/">
    <StyledHeading>
      <SB>sb</SB>
      <A>a</A>
    </StyledHeading>
  </StyledLogoLink>
);
