import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { colors } from '../../constants';

const StyledButton = styled(Link)`
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

const MoreButton = ({ text, link }) => (
  <StyledButton to={`/${link}`}>{text.toUpperCase()}</StyledButton>
);

MoreButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default MoreButton;
