import React, { Fragment } from 'react';
import { Link } from 'gatsby';

//styles
import { colors, widths } from '../../constants';
import styled from '@emotion/styled';

//components
import Burger from './burger';

const InlineLinkContainer = styled.div`
  display: flex;
  align-items: center;
  transition: 0.3s all;
  @media (max-width: ${widths.sm}) {
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
  @media (max-width: ${widths.sm}) {
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
  color: ${colors.light};
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

const NavLinks = ({ toggle, isOpen }) => (
  <Fragment>
    <InlineLinkContainer>
      <InlineNavLink to="/">HOME</InlineNavLink>
      <InlineNavLink to="/projects/">PROJECTS</InlineNavLink>
      <InlineNavLink to="/concepts/">CONCEPTS</InlineNavLink>
      <InlineNavLink to="/about/">ABOUT</InlineNavLink>
      <InlineNavLink to="/contact/">CONTACT</InlineNavLink>
    </InlineLinkContainer>
    <Burger open={isOpen} clicked={toggle} />
    {isOpen && (
      <FixedLinkContainer onClick={toggle}>
        <FixedNavLink to="/" onClick={toggle}>
          HOME
        </FixedNavLink>
        <FixedNavLink to="/projects/" onClick={toggle}>
          PROJECTS
        </FixedNavLink>
        <FixedNavLink to="/concepts/" onClick={toggle}>
          CONCEPTS
        </FixedNavLink>
        <FixedNavLink to="/about/" onClick={toggle}>
          ABOUT
        </FixedNavLink>
        <FixedNavLink to="/contact/" onClick={toggle}>
          CONTACT
        </FixedNavLink>
      </FixedLinkContainer>
    )}
  </Fragment>
);

export default NavLinks;
