import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../utils/constants';

const StyledTag = styled.span`
  color: ${colors.secondary};
  display: inline-block;
  font-size: 0.7em;
  border-radius: 0.2rem;
  padding: 0.15rem 0.5rem 0.1rem;
  margin: 0.2rem 0;
  border: 1px solid ${colors.secondary};
  margin-right: 0.5rem;
`;

const Tag = ({ text }) => <StyledTag>{text.toUpperCase()}</StyledTag>;

export default Tag;
