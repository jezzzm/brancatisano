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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const LeftFooter = styled.div``;

const CentralFooter = styled.div`
  text-align: center;
`;
const RightFooter = styled.div`
  text-align: right;
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <FooterContentContainer>
        <FooterContent>
          <LeftFooter>
            <p>Website Links</p>
          </LeftFooter>
          <CentralFooter>
            <p>{`©${year} Stephanie Brancatisano`}</p>
          </CentralFooter>
          <RightFooter>
            <p>Australian Registered Architect #10667</p>
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
    </StyledFooter>
  );
};

export default Footer;
