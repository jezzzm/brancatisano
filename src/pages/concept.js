import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styles from './blog.module.css';
import Layout from '../components/layout';
import ConceptPreview from '../components/concept-preview';

class ConceptIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const concepts = get(this, 'props.data.allContentfulConcept.edges');

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className={styles.hero}>Concepts</div>
          <div className="wrapper">
            <h2 className="section-headline">Recent Concepts</h2>
            <ul className="article-list">
              {concepts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ConceptPreview concept={node} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

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
  }
`;
