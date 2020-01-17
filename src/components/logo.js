import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../constants';

const SB = styled.span`
  color: ${colors.primary};
`;
const A = styled.span`
  color: ${colors.secondary};
`;
const StyledLogo = styled.h1`
  font-size: 36px;
`;

export default () => (
  <StyledLogo>
    <SB>sb</SB>
    <A>a</A>
  </StyledLogo>
);
