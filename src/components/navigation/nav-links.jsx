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

const Fullscreen = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background: conic-gradient(
    from 35deg at bottom right,
    ${colors.secondary},
    ${colors.primary},
    ${colors.secondary}
  );
  z-index: 500;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FullscreenLink = styled(Link)`
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
      <Fullscreen onClick={onToggleFullscreen}>
        <FullscreenLink to="/" onClick={onToggleFullscreen}>
          HOME
        </FullscreenLink>
        <FullscreenLink to="/projects/" onClick={onToggleFullscreen}>
          PROJECTS
        </FullscreenLink>
        <FullscreenLink to="/concepts/" onClick={onToggleFullscreen}>
          CONCEPTS
        </FullscreenLink>
        <FullscreenLink to="/about/" onClick={onToggleFullscreen}>
          ABOUT
        </FullscreenLink>
        <FullscreenLink to="/contact/" onClick={onToggleFullscreen}>
          CONTACT
        </FullscreenLink>
      </Fullscreen>
    )}
  </>
);

NavLinks.propTypes = {
  isOpenFullscreen: PropTypes.bool.isRequired,
  onToggleFullscreen: PropTypes.func.isRequired,
};

export default NavLinks;
