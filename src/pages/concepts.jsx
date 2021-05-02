import React from 'react';
import { graphql } from 'gatsby';

import Collection from '../components/collection';
import { collectionPage } from '../utils/prop-types';

const Concepts = ({ data }) => {
  const concepts = data.allContentfulConcept.edges;
  const hero = data.allContentfulAsset.edges[0].node.fluid;
  return <Collection type="concept" edges={concepts} fluidHero={hero} />;
};

Concepts.propTypes = collectionPage('concept');

export default Concepts;

export const pageQuery = graphql`
  query ConceptsQuery {
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
