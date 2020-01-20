import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { colors, widths } from '../../constants';
import Logo from './logo';
import LogoSVG from './brancatisano.svg';
import Burger from './burger';
import { ReactSVG } from 'react-svg';

const StyledNavContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100vw;
  left: 0;
  right: 0;
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

const InlineLinkContainer = styled.div`
  display: flex;
  align-items: center;
  transition: 0.3s all;
  @media (max-width: ${widths.sm}px) {
    display: none;
  }
`;

const InlineNavLink = styled(Link)`
  text-align: right;
  margin-left: 1em;
  color: ${colors.white};
  &:hover {
    text-decoration: none;
  }
  transition: 0.15s all;
  @media (hover: hover) {
    &:hover {
      color: ${colors.secondary};
    }
  }
  @media (max-width: ${widths.sm}px) {
    display: none;
  }
`;

const FixedLinkContainer = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.primary};
  z-index: 500;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FixedNavLink = styled(Link)`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 2em;
  color: ${colors.white};
  transition: 0.15s all;
  &:hover {
    text-decoration: none;
  }
  &:active {
    color: ${colors.secondary};
  }
  @media (hover: hover) {
    &:hover {
      text-decoration: none;
      color: ${colors.secondary};
    }
  }

  }
`;

const StyledSVG = styled(ReactSVG)`
  text-align: left;
  width: max-content;
  svg {
    height: 40px;
    width: 92px;
    margin: 0.5em 0 0.3em;
  }
`;

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen && document) {
      document.body.style.overflow = 'hidden';
    } else if (!isOpen && document) {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <StyledNavContainer>
      <StyledNav role="navigation">
        {/* <Logo /> */}
        <StyledSVG src="./brancatisano.svg" />
        <InlineLinkContainer>
          <InlineNavLink to="/projects/">PROJECTS</InlineNavLink>
          <InlineNavLink to="/concepts/">CONCEPTS</InlineNavLink>
          <InlineNavLink to="/about/">ABOUT</InlineNavLink>
          <InlineNavLink to="/contact/">CONTACT</InlineNavLink>
        </InlineLinkContainer>
        <Burger open={isOpen} clicked={toggleMenu} />
        {isOpen && (
          <FixedLinkContainer onClick={toggleMenu}>
            <FixedNavLink to="/" onClick={toggleMenu}>
              HOME
            </FixedNavLink>
            <FixedNavLink to="/projects/" onClick={toggleMenu}>
              PROJECTS
            </FixedNavLink>
            <FixedNavLink to="/concepts/" onClick={toggleMenu}>
              CONCEPTS
            </FixedNavLink>
            <FixedNavLink to="/about/" onClick={toggleMenu}>
              ABOUT
            </FixedNavLink>
            <FixedNavLink to="/contact/" onClick={toggleMenu}>
              CONTACT
            </FixedNavLink>
          </FixedLinkContainer>
        )}
      </StyledNav>
    </StyledNavContainer>
  );
};
