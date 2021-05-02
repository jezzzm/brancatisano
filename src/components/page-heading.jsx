import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { colors, widths } from '../utils/constants';

const StyledHeading = styled.div`
  padding: 2em 0;
  span {
    font-size: 1.2em;
    color: ${colors.secondary};
    letter-spacing: 1.5px;
  }
  h1 {
    font-size: 4em;
    line-height: 1.2;
    color: ${colors.copy};
    @media (max-width: ${widths.sm}) {
      font-size: 3em;
    }
  }
`;

const PageHeading = ({ articleType, title }) => (
  <StyledHeading>
    <span>{articleType.toUpperCase()}</span>
    <h1>{title}</h1>
  </StyledHeading>
);

PageHeading.propTypes = {
  articleType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PageHeading;
