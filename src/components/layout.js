import React from 'react';
import Container from './container';
import Navigation from './navigation';
import Footer from './footer';

export default ({ children }) => (
  <Container>
    <Navigation />
    {children}
    <Footer />
  </Container>
);
