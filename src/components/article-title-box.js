import React from 'react';
import styled from '@emotion/styled';
import { colors, widths } from '../../constants';

const ArticleTitle = styled.div`
  padding: 2em 0;
  label {
    font-size: 1.2em;
    color: ${colors.secondary};
    letter-spacing: 1.5px;
  }
  h1 {
    font-size: 4em;
    line-height: 1.2;
    color: ${colors.primary};
    @media (max-width: ${widths.sm}px) {
      font-size: 3em;
    }
  }
`;

export default ({ articleType, title }) => (
  <ArticleTitle>
    <label>{articleType.toUpperCase()}</label>
    <h1>{title}</h1>
  </ArticleTitle>
);
