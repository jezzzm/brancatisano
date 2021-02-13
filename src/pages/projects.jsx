/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { graphql } from 'gatsby';

import Collection from '../components/collection';
import { collectionPage } from '../utils/prop-types';

const Projects = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const projects = data.allContentfulProject.edges;
  const hero = data.allContentfulAsset.edges[0].node.fluid;
  return (
    <Collection type="project" siteTitle={siteTitle} edges={projects} fluidHero={hero} />
  );
};

Projects.propTypes = collectionPage('project');

export default Projects;

export const pageQuery = graphql`
  query ProjectsQuery {
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
