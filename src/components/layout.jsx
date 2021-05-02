import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useLocation } from '@reach/router';
import PropTypes from 'prop-types';
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import '@fontsource/ibm-plex-sans/300.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/700.css';
import Navigation from './navigation';
import Footer from './footer';
import Helmet from './helmet';
import { colors } from '../utils/constants';

const globalStyles = css`
  body {
    font-family: 'IBM Plex Sans', Helvetica, Tahoma, Arial, sans-serif;
    font-size: 1em;
    font-weight: 300;
    line-height: 1.65;
    background: ${colors.primary};
    color: ${colors.copy};
  }

  strong {
    font-weight: 400;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    width: 100%;
  }

  a {
    color: currentColor;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  h1,
  h2,
  h3 {
    font-family: 'Playfair Display', Garamond, Georgia, 'Times New Roman', Times,
      serif;
    font-weight: 700;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const siteMetaQuery = graphql`
  query SiteMetaData {
    site {
      siteMetadata {
        title
        author
        baseURL
        image
        description
      }
    }
  }
`;

const Layout = ({ children, meta }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(siteMetaQuery);

  return (
    <>
      <Helmet
        title={meta.title}
        description={meta.description || site.siteMetadata.description}
        imageSrc={meta.image || site.siteMetadata.image}
        siteTitle={site.siteMetadata.title}
        author={site.siteMetadata.author}
        baseURL={site.siteMetadata.baseURL}
        path={pathname}
      />
      <Global styles={globalStyles} />
      <StyledContainer>
        <Navigation />
        {children}
        <Footer />
      </StyledContainer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageSrc: PropTypes.string,
    isArticle: PropTypes.bool,
  }).isRequired,
};

export default Layout;
