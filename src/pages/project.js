import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styles from './blog.module.css';
import Layout from '../components/layout';
import ProjectPreview from '../components/project-preview';

class ProjectIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const projects = get(this, 'props.data.allContentfulProject.edges');

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className={styles.hero}>Projects</div>
          <div className="wrapper">
            <h2 className="section-headline">Recent Projects</h2>
            <ul className="article-list">
              {projects.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ProjectPreview project={node} />
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
