import React from 'react';
import { widths } from '../../constants';
import styled from '@emotion/styled';
import './base.css';

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export default ({ children }) => <StyledContainer>{children}</StyledContainer>;
