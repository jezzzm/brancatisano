import React from 'react';
import styled from '@emotion/styled';
import { colors, widths } from '../../constants';

const BurgerBox = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  transition: 0.3s all;
  cursor: pointer;
  z-index: 1000;
  &.open div:first-of-type {
    -webkit-transform: rotate(-45deg) translate(-7px, 7px);
    transform: rotate(-45deg) translate(-7px, 7px);
  }
  &.open div:nth-of-type(2) {
    opacity: 0;
  }
  &.open div:last-of-type {
    -webkit-transform: rotate(45deg) translate(-7px, -7px);
    transform: rotate(45deg) translate(-7px, -7px);
  }

  @media (max-width: ${widths.sm}px) {
    display: flex;
  }
`;

const Bar = styled.div`
  width: 30px;
  height: 4px;
  background: ${colors.light};
  margin: 3px 0;
  transition: 0.3s all;
`;

const Burger = ({ open, clicked }) => (
  <BurgerBox onClick={clicked} className={open ? 'open' : 'closed'}>
    <Bar></Bar>
    <Bar></Bar>
    <Bar></Bar>
  </BurgerBox>
);

export default Burger;
