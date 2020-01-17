import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { colors } from '../../constants';
import Logo from './logo';

const StyledNavContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
`;
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 65px;
  background: ${colors.white};
  border-bottom: 1px solid;
  border-image-source: linear-gradient(
    90deg,
    transparent,
    ${colors.primary},
    transparent
  );
  border-image-slice: 1;
`;

const StyledLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledNavLink = styled(Link)`
  text-align: right;
  margin-left: 1em;
  color: ${colors.primary};
  transition: 0.15s all;
  &:hover {
    text-decoration: none;
    color: ${colors.secondary};
  }
`;

export default () => (
  <StyledNavContainer>
    <StyledNav role="navigation">
      <Logo />
      <StyledLinkContainer>
        <StyledNavLink to="/">HOME</StyledNavLink>
        <StyledNavLink to="/projects/">PROJECTS</StyledNavLink>
        <StyledNavLink to="/concepts/">CONCEPTS</StyledNavLink>
        <StyledNavLink to="/about/">ABOUT</StyledNavLink>
        <StyledNavLink to="/contact/">CONTACT</StyledNavLink>
      </StyledLinkContainer>
    </StyledNav>
  </StyledNavContainer>
);
