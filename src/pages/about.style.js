import { css } from '@emotion/react';

import { widths, colors } from '../utils/constants';

export const content = css`
  max-width: ${widths.reading};
  margin: 0 auto;
`;
export const imageWrapper = css`
  width: 100%;
  padding: 2em 0 4em;
  svg {
    display: block;
    margin: 0 auto;
  }
`;

export const article = css`
  p {
    margin-bottom: 1em;
  }
`;

export const ctaWrapper = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5em;
`;

export const cta = css`
  padding: 1em 2em;
  color: ${colors.primary};
  font-weight: bold;
  border-radius: 1em;

  opacity: 1;
  background: ${colors.secondary};
  transition: all 200ms ease-out;
  transition: transform 100ms ease-out;

  &:hover {
    text-decoration: none;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.15);
    opacity: 0.9;
    transform: scale(1.04);
  }
`;
