/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';

import Layout from './layout';
import PreviewTile from './preview-tile';
import MainWrapper from './main-wrapper';
import { colors } from '../utils/constants';

const SectionTitle = styled.label`
  font-size: 1.2em;
  color: ${colors.secondary};
  letter-spacing: 1.5px;
`;

const ArticleList = styled.div`
  margin: 1em 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2rem;
`;

const Blurb = styled.p`
  text-align: center;
  font-size: 1.5em;
  margin: 3em 0;
`;

const SectionHero = styled(Img)`
  height: 61.8vh;
  max-height: 400px;
`;

const Collection = ({
  type, siteTitle, edges, fluidHero,
}) => (
  <Layout>
    <Helmet
      title={siteTitle}
      meta={[{ name: 'description', content: `Projects at ${siteTitle}` }]}
    />
    <SectionHero
      alt="Image representing projects section"
      fluid={fluidHero}
      fadeIn
    />
    <MainWrapper>
      <Blurb>&quot;Short blurb about projects, generally.&quot;</Blurb>
      <SectionTitle>PROJECTS</SectionTitle>
      <ArticleList>
        {edges.map(({ node }) => (
          <div key={node.slug}>
            <PreviewTile type={type} content={node} />
          </div>
        ))}
      </ArticleList>
    </MainWrapper>
  </Layout>
);

Collection.propTypes = {
  type: PropTypes.oneOf(['project', 'concept']).isRequired,
  siteTitle: PropTypes.string.isRequired,
  edges: PropTypes.arrayOf(PropTypes.object).isRequired,
  fluidHero: PropTypes.object.isRequired, // gatsby fluid type
};

export default Collection;
