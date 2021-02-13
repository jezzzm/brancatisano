import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import MainWrapper from '../components/main-wrapper';
import Carousel from '../components/carousel';

const Home = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout>
      <Helmet title={siteTitle} />
      <Carousel images={data.allContentfulAsset.edges} />
      <MainWrapper>
        <p>dummy content</p>
      </MainWrapper>
    </Layout>
  );
};

Home.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
    allContentfulAsset: PropTypes.shape({
      edges: Carousel.propTypes.images.isRequired,
    }),
  }).isRequired,
};

export default Home;

export const homeQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }

    allContentfulAsset {
      edges {
        node {
          fluid(maxWidth: 1440, quality: 50, background: "rgb:000000") {
            ...GatsbyContentfulFluid_noBase64
          }
          description
          title
        }
      }
    }
  }
`;
