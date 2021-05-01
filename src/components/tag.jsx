import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../utils/constants';

const StyledTag = styled.p`
  color: ${colors.secondary};
  display: inline-block;
  font-size: 0.7em;
  border-radius: 0.2rem;
  padding: 0.1rem 0.5rem;
  margin: 0.2rem 0;
  line-height: 1.5;
  border: 1px solid ${colors.secondary};
  margin-right: 0.5rem;
`;

const Tag = ({ text }) => <StyledTag>{text.toUpperCase()}</StyledTag>;

export default Tag;
