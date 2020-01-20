import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { colors } from '../../constants';

import Layout from '../components/layout';
import ProjectPreview from '../components/project-preview';
import MainWrapper from '../components/main-wrapper';

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

const ProjectIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const projects = data.allContentfulProject.edges;
  const hero = data.allContentfulAsset.edges[0].node;
  return (
    <Layout>
      <Helmet
        title={siteTitle}
        meta={[{ name: 'description', content: `Projects at ${siteTitle}` }]}
      />
      <SectionHero
        alt="Image representing projects section"
        fluid={hero.fluid}
        fadeIn={true}
      />
      <MainWrapper>
        <Blurb>"Short blurb about projects, generally."</Blurb>
        <SectionTitle>PROJECTS</SectionTitle>
        <ArticleList>
          {projects.map(({ node }) => {
            return (
              <div key={node.slug}>
                <ProjectPreview project={node} />
              </div>
            );
          })}
        </ArticleList>
      </MainWrapper>
    </Layout>
  );
};

export default ProjectIndex;

export const pageQuery = graphql`
  query ProjectIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProject(sort: { fields: [updatedAt], order: DESC }) {
      edges {
        node {
          title
          slug
          updatedAt
          completion(formatString: "MMMM, YYYY")
          short
          tags
          hero {
            fluid(resizingBehavior: CROP, maxWidth: 350) {
              ...GatsbyContentfulFluid_noBase64
              sizes
            }
            description
          }
        }
      }
    }
    allContentfulAsset(filter: { title: { eq: "projects" } }) {
      edges {
        node {
          fluid(maxWidth: 1440, quality: 100, background: "rgb:000000") {
            ...GatsbyContentfulFluid_noBase64
            src
          }
        }
      }
    }
  }
`;
