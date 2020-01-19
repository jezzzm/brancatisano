import React from 'react';
import styled from '@emotion/styled';
import { colors, widths } from '../../constants';

const StyledMain = styled.main`
  max-width: ${widths.max}px;
  width: 100%;
  padding: 1em;
  margin: 0 auto;
`;

const StyledMainContainer = styled.div`
  width: 100%;
  background: ${colors.white};
`;

const MainWrapper = ({ children }) => (
  <StyledMainContainer>
    <StyledMain>{children}</StyledMain>
  </StyledMainContainer>
);

export default MainWrapper;
