import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

//styles
import styled from '@emotion/styled';
import { colors, widths } from '../../constants';

//components
import Logo from './logo';
import NavLinks from './nav-links';

const StyledNavContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100vw;
  left: 0;
  right: 0;
  max-height: 60px;
  // background: ${colors.primary};
  background: linear-gradient(135deg, ${colors.primary}, ${colors.tertiary});
`;
const StyledNav = styled.nav`
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${widths.max};
  @media (max-width: ${widths.max}) {
    padding: 0 0.7em;
  }
`;

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen && document) {
      document.body.style.overflow = 'hidden';
    } else if (!isOpen && document) {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <StyledNavContainer>
      <StyledNav role="navigation">
        <Logo />
        <NavLinks toggle={toggleMenu} isOpen={isOpen} />
      </StyledNav>
    </StyledNavContainer>
  );
};
