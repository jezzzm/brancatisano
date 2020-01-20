import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { colors } from '../../constants';

const Button = styled(Link)`
  padding: 1rem 2rem;
  background: ${colors.secondary};
  color: ${colors.white};
  text-align: center;
  margin: 0 auto;
  display: block;
  width: max-content;
  transition: 0.15s all;
  &:hover {
    text-decoration: none;
  }
  &:active {
    background: ${colors.primary};
  }
  @media (hover: hover) {
    &:hover {
      background: ${colors.primary};
    }
  }
`;

export default ({ text, link }) => (
  <Button to={`/${link}`}>{text.toUpperCase()}</Button>
);
