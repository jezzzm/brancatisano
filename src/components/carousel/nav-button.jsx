import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { colors } from '../../utils/constants';

const StyledNavButton = styled.div`
  height: 100%;
  top: 0;
  position: absolute;
  cursor: pointer;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover span {
    text-shadow: none;
  }

  &.left {
    left: 0;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.4), transparent);
  }

  &.right {
    right: 0;
    background: linear-gradient(-90deg, rgba(0, 0, 0, 0.4), transparent);
  }
`;

const StyledGlyph = styled.span`
  display: inline-block;
  font-weight: bolder;
  font-size: 28px;
  color: ${colors.white};
  padding: 1rem;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  transition: 0.2s all;
`;

const NavButton = ({ direction, onClick }) => {
  const glyph = direction === 'left' ? '<' : '>';
  return (
    <StyledNavButton className={direction} tabIndex="0" onClick={onClick}>
      <StyledGlyph>{glyph}</StyledGlyph>
    </StyledNavButton>
  );
};

NavButton.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavButton;
