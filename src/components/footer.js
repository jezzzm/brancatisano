import React from 'react';
import styled from '@emotion/styled';
import { colors, widths } from '../../constants';
import { Link } from 'gatsby';

const FooterContentContainer = styled.footer`
  width: 100%;
  background: ${colors.primary};
  color: ${colors.light};
  a {
    color: ${colors.white};
  }
`;

const FooterContent = styled.div`
  max-width: ${widths.max};
  width: 100%;
  margin: 0 auto;
  padding: 4em 1em;
  display: grid;
  grid-template-areas: 'left center right';
  grid-column-gap: 1rem;
  @media (max-width: ${widths.sm}) {
    grid-template-areas:
      'left center'
      'left right';
  }
`;

const LeftFooter = styled.nav`
  grid-area: left;
  a {
    display: block;
    font-weight: bolder;
    width: max-content;
  }
`;

const CentralFooter = styled.div`
  grid-area: center;
  text-align: center;
  @media (max-width: ${widths.sm}) {
    text-align: right;
  }
`;
const RightFooter = styled.div`
  grid-area: right;
  text-align: right;
  @media (max-width: ${widths.sm}) {
    margin-top: 1rem;
  }
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
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/concepts">Concepts</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
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
              title="To the developer's website"
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
