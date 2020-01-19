import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { colors } from '../../constants';

import Layout from '../components/layout';
import ConceptPreview from '../components/concept-preview';
import MainWrapper from '../components/main-wrapper';

const SectionTitle = styled.label`
  font-size: 1.2em;
  color: ${colors.secondary};
  letter-spacing: 1.5px;
`;

const ArticleList = styled.div`
  margin: 1em 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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

const ConceptIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const concepts = data.allContentfulConcept.edges;
  const hero = data.allContentfulAsset.edges[0].node;
  return (
    <Layout>
      <Helmet
        title={siteTitle}
        meta={[{ name: 'description', content: `Concepts at ${siteTitle}` }]}
      />
      <SectionHero
        alt="Image representing concepts section"
        fluid={hero.fluid}
      />
      <MainWrapper>
        <Blurb>"Short blurb about concepts, generally."</Blurb>
        <SectionTitle>CONCEPTS</SectionTitle>
        <ArticleList>
          {concepts.map(({ node }) => {
            return (
              <div key={node.slug}>
                <ConceptPreview concept={node} />
              </div>
            );
          })}
        </ArticleList>
      </MainWrapper>
    </Layout>
  );
};

export default ConceptIndex;

export const pageQuery = graphql`
  query ConceptIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulConcept(sort: { fields: [updatedAt], order: DESC }) {
      edges {
        node {
          title
          slug
          updatedAt
          created(formatString: "MMMM, YYYY")
          short
          tags
          hero {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
            description
          }
        }
      }
    }
    allContentfulAsset(filter: { title: { eq: "concepts" } }) {
      edges {
        node {
          fluid(maxWidth: 2160, quality: 100) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`;
