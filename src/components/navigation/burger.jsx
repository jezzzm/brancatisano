import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { colors, widths } from '../../../constants';

const BurgerContainer = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  transition: 0.3s all;
  cursor: pointer;
  z-index: 1000;
  &.open div:first-of-type {
    transform: rotate(-45deg) translate(-7px, 7px);
  }
  &.open div:nth-of-type(2) {
    opacity: 0;
  }
  &.open div:last-of-type {
    transform: rotate(45deg) translate(-7px, -7px);
  }

  @media (max-width: ${widths.sm}) {
    display: flex;
  }
`;

const BurgerBar = styled.div`
  width: 30px;
  height: 4px;
  background: ${colors.light};
  margin: 3px 0;
  transition: 0.3s all;
`;

const Burger = ({ isOpen, onClick }) => (
  <BurgerContainer onClick={onClick} className={isOpen ? 'open' : 'closed'}>
    <BurgerBar />
    <BurgerBar />
    <BurgerBar />
  </BurgerContainer>
);

Burger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Burger;
