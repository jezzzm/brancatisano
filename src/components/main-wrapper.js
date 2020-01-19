import React from 'react';
import styled from '@emotion/styled';
import { widths } from '../../constants';

const StyledMain = styled.main`
  max-width: ${widths.max}px;
  width: 100%;
  padding: 1em;
  margin: 0 auto;
`;

const MainWrapper = ({ children }) => <StyledMain>{children}</StyledMain>;

export default MainWrapper;
