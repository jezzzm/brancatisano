import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { colors, widths } from '../../constants';
import Logo from './logo';

const StyledNavContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100vw;
  left: 0;
  right: 0;
  margin-left: -50vw;
  margin-right: -50vw;
  max-height: 65px;
  background: ${colors.primary};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.05);
`;
const StyledNav = styled.nav`
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${widths.max}px;
  @media (max-width: ${widths.max}px) {
    padding: 0 0.7em;
  }
`;

const StyledLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledNavLink = styled(Link)`
  text-align: right;
  margin-left: 1em;
  color: ${colors.white};
  transition: 0.15s all;
  @media (hover: hover) {
    &:hover {
      text-decoration: none;
      color: ${colors.secondary};
    }
  }
  @media (max-width: ${widths.sm}px) {
    margin-left: 0.7em;
    font-size: 0.8em;
  }
`;

export default () => (
  <StyledNavContainer>
    <StyledNav role="navigation">
      <Logo />
      <StyledLinkContainer>
        <StyledNavLink to="/projects/">PROJECTS</StyledNavLink>
        <StyledNavLink to="/concepts/">CONCEPTS</StyledNavLink>
        <StyledNavLink to="/about/">ABOUT</StyledNavLink>
        <StyledNavLink to="/contact/">CONTACT</StyledNavLink>
      </StyledLinkContainer>
    </StyledNav>
  </StyledNavContainer>
);
