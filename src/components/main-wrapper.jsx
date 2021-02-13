import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { colors, widths } from '../utils/constants';

const StyledMain = styled.main`
  max-width: ${widths.max};
  width: 100%;
  padding: 1em;
  margin: 0 auto;
`;

const StyledMainContainer = styled.div`
  width: 100%;
  background: ${colors.white};
  padding-bottom: 4em;
`;

const MainWrapper = ({ children }) => (
  <StyledMainContainer>
    <StyledMain>{children}</StyledMain>
  </StyledMainContainer>
);

MainWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainWrapper;
