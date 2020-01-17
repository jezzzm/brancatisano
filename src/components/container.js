import React from 'react';
import { widths } from '../../constants';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  max-width: ${widths.max};
  width: 100%;
  margin: 0 auto;
`;

export default ({ children }) => <StyledContainer>{children}</StyledContainer>;
