import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import Logo from '../logo';
import NavLinks from './nav-links';
import { colors, widths } from '../../utils/constants';

const StyledNavContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100vw;
  left: 0;
  right: 0;
  max-height: 60px;
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

const Navigation = () => {
  const [isOpenFullscreen, setIsOpenFullscreen] = useState(false);

  useEffect(() => {
    if (document) {
      if (isOpenFullscreen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
  }, [isOpenFullscreen]);

  return (
    <StyledNavContainer>
      <StyledNav role="navigation">
        <Logo />
        <NavLinks
          onToggleFullscreen={() => setIsOpenFullscreen(!isOpenFullscreen)}
          isOpenFullscreen={isOpenFullscreen}
        />
      </StyledNav>
    </StyledNavContainer>
  );
};

export default Navigation;
