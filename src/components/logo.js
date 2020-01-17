import React from 'react';
import styled from '@emotion/styled';
import { colors, widths } from '../../constants';
import { Link } from 'gatsby';

const SB = styled.span`
  color: ${colors.primary};
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
  transition: 0.15s text-shadow;
  vertical-align: middle;
  &:hover {
    text-decoration: none;
    text-shadow: 0px 0px 5px ${colors.light};
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
