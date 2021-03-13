import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import { colors } from '../utils/constants';

const style = (appearance) => css`
  padding: 1rem 2rem;
  background: ${appearance === 'success' ? colors.tertiary : colors.secondary};
  color: ${colors.white};
  text-align: center;
  margin: 0 auto;
  display: block;
  width: max-content;
  transition: 0.15s all;

  @media (hover: hover) {
    &:hover {
      opacity: 0.95;
      text-decoration: none;
      box-shadow: 0 0 3em
        ${appearance === 'success' ? colors.light : 'rgba(0,0,0,0.25)'};
    }
  }
`;

const LinkButton = ({ text, to, appearance }) => (
  <Link to={`${to}`} css={style(appearance)}>
    {text.toUpperCase()}
  </Link>
);

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  appearance: PropTypes.oneOf('default', 'success'),
};

LinkButton.defaultProps = {
  appearance: 'default',
};

export default LinkButton;
