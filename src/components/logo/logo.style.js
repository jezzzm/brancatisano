import { css } from '@emotion/react';
import { colors, widths } from '../../utils/constants';

export const shared = (mobile, standard) => css`
  svg {
    max-width: 100%;
    height: ${standard.height};
    width: ${standard.width};
    color: ${colors.secondary};

    @media (max-width: ${widths.sm}) {
      height: ${mobile.height};
      width: ${mobile.width};
    }
  }
`;

export const linkOnly = css`
  line-height: 1;
  padding: 0.5em;
  svg {
    path {
      transition: 0.2s all;
    }
    &:hover path {
      fill: ${colors.white} !important;
    }
  }
`;
