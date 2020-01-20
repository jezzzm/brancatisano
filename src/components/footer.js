import React from 'react';
import styled from '@emotion/styled';
import { colors, widths } from '../../constants';

// const StyledFooter = styled.footer`
//   background: ${colors.white};
//   padding-top: 4em;
//   width: 100%;
// `;
const FooterContentContainer = styled.footer`
  width: 100%;
  background: ${colors.primary};
  color: ${colors.white};
`;

const FooterContent = styled.div`
  max-width: ${widths.max}px;
  width: 100%;
  margin: 0 auto;
  padding: 4em 1em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const LeftFooter = styled.nav`
  a {
    display: block;
    font-weight: bolder;
    width: max-content;
  }
`;

const CentralFooter = styled.div`
  text-align: center;
`;
const RightFooter = styled.div`
  text-align: right;
`;

const ArchiNum = styled.label`
  color: ${colors.secondary};
  font-size: 0.9em;
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterContentContainer>
      <FooterContent>
        <LeftFooter>
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Concepts</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </LeftFooter>
        <CentralFooter>
          <p>{`©${year} Stephanie Brancatisano`}</p>
          <ArchiNum>NSW Registered Architect #10667</ArchiNum>
        </CentralFooter>
        <RightFooter>
          <p>
            Website by{' '}
            <a
              href="https://zej.com.au/"
              title="To developer's website"
              target="_blank"
            >
              <strong>zej</strong>
            </a>
          </p>
        </RightFooter>
      </FooterContent>
    </FooterContentContainer>
  );
};

export default Footer;
