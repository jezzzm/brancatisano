import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import { colors, colorKeys } from '../utils/constants';

const styles = {
  button: (appearance) => css`
    position: relative;
    padding: 1rem 2rem;
    background: ${colors[appearance]};
    color: ${colors.copy};
    font-weight: bold;
    text-align: center;
    margin: 0 auto;
    display: block;
    width: max-content;

    &,
    &::after {
      transition: all 0.2s ease-in-out;
      border-radius: 1rem;
    }

    @media (hover: hover) {
      &::after {
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        box-shadow: 0 0 3em ${colors.shadow};
        opacity: 0;
        content: '';
      }

      &:hover {
        opacity: 0.95;
        text-decoration: none;

        &::after {
          opacity: 1;
        }
      }
    }
  `,
  arrow: css`
    padding-left: 0.5rem;
  `,
};
const LinkButton = ({ text, to, appearance }) => (
  <Link to={`${to}`} css={styles.button(appearance)}>
    {text.toUpperCase()} <span css={styles.arrow}>⇨</span>
  </Link>
);

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  appearance: PropTypes.oneOf(colorKeys),
};

LinkButton.defaultProps = {
  appearance: 'success',
};

export default LinkButton;
