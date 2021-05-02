import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import MainWrapper from '../components/main-wrapper';
import Carousel from '../components/carousel';

const Home = ({ data }) => {
  const meta = {
    title: 'Home',
    description: 'Welcome to SBA',
  };

  return (
    <Layout meta={meta}>
      <Carousel images={data.allContentfulAsset.edges} />
      <MainWrapper>
        <p>dummy content</p>
      </MainWrapper>
    </Layout>
  );
};

Home.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default Home;

export const homeQuery = graphql`
  query HomeQuery {
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
