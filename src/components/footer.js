import React from 'react';
import styled from '@emotion/styled';
import { colors, widths } from '../../constants';

const StyledFooter = styled.footer`
  background: ${colors.white};
  padding-top: 4em;
  width: 100%;
`;
const FooterContentContainer = styled.div`
  width: 100%;
  background: ${colors.primary};
  color: ${colors.white};
`;

const FooterContent = styled.div`
  max-width: ${widths.max}px;
  width: 100%;
  margin: 0 auto;
  padding: 4em 0;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <FooterContentContainer>
        <FooterContent>
          <p>Website Links</p>
          <p>{`©${year} Stephanie Brancatisano`}</p>
          <p>Australian Registered Architect #10667</p>
        </FooterContent>
      </FooterContentContainer>
    </StyledFooter>
  );
};

export default Footer;
