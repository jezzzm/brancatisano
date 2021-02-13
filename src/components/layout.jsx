import React from 'react';
import PropTypes from 'prop-types';
import { css, Global } from '@emotion/react';

import Container from './container';
import Navigation from './navigation';
import Footer from './footer';

const globalStyles = css``;

const Layout = ({ children }) => (
  <>
    <Global styles={globalStyles} />
    <Container>
      <Navigation />
      {children}
      <Footer />
    </Container>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
