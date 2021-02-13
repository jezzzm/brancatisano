import React from 'react';
import PropTypes from 'prop-types';
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';

import './base.css';
import Navigation from './navigation';
import Footer from './footer';

const globalStyles = css``;

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Layout = ({ children }) => (
  <>
    <Global styles={globalStyles} />
    <StyledContainer>
      <Navigation />
      {children}
      <Footer />
    </StyledContainer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
