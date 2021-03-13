import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Burger from './burger';
import { colors, widths } from '../../utils/constants';

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
  text-underline-offset: 0.4em;
  &:hover {
    color: ${colors.light};
    text-decoration: underline solid currentColor 3px;
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

  background: conic-gradient(
    from 35deg at bottom right,
    ${colors.tertiary},
    ${colors.primary},
    ${colors.tertiary}
  );
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

const NavLinks = ({ onToggleFullscreen, isOpenFullscreen }) => (
  <>
    <InlineLinkContainer>
      <InlineNavLink to="/">HOME</InlineNavLink>
      <InlineNavLink to="/projects/">PROJECTS</InlineNavLink>
      <InlineNavLink to="/concepts/">CONCEPTS</InlineNavLink>
      <InlineNavLink to="/about/">ABOUT</InlineNavLink>
      <InlineNavLink to="/contact/">CONTACT</InlineNavLink>
    </InlineLinkContainer>
    <Burger isOpen={isOpenFullscreen} onClick={onToggleFullscreen} />
    {isOpenFullscreen && (
      <FixedLinkContainer onClick={onToggleFullscreen}>
        <FixedNavLink to="/" onClick={onToggleFullscreen}>
          HOME
        </FixedNavLink>
        <FixedNavLink to="/projects/" onClick={onToggleFullscreen}>
          PROJECTS
        </FixedNavLink>
        <FixedNavLink to="/concepts/" onClick={onToggleFullscreen}>
          CONCEPTS
        </FixedNavLink>
        <FixedNavLink to="/about/" onClick={onToggleFullscreen}>
          ABOUT
        </FixedNavLink>
        <FixedNavLink to="/contact/" onClick={onToggleFullscreen}>
          CONTACT
        </FixedNavLink>
      </FixedLinkContainer>
    )}
  </>
);

NavLinks.propTypes = {
  isOpenFullscreen: PropTypes.bool.isRequired,
  onToggleFullscreen: PropTypes.func.isRequired,
};

export default NavLinks;
