import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import Img from 'gatsby-image';
import Layout from '../components/layout';

import heroStyles from '../components/hero.module.css';

class ProjectTemplate extends React.Component {
  render() {
    const project = get(this.props, 'data.contentfulProject');
    const siteMeta = get(this.props, 'data.site.siteMetadata');

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet
            title={`${project.title} | ${siteMeta.author}`}
            meta={[
              {
                name: `description`,
                content: project.short,
              },
              {
                name: `twitter:card`,
                value: `summary`,
              },
              {
                property: `og:title`,
                content: project.title,
              },
              {
                property: `og:type`,
                content: `article`,
              },
              {
                property: `og:url`,
                content: `${siteMeta.baseURL}/project/${project.slug}/`,
              },
              {
                property: `og:image`,
                content: `https:${project.hero.fluid.src}`,
              },
              {
                property: `og:description`,
                content: project.short,
              },
              {
                property: `og:site_name`,
                content: siteMeta.title,
              },
            ]}
          />
          <div className={heroStyles.hero}>
            <Img
              className={heroStyles.heroImage}
              alt={project.hero.description}
              title={project.hero.description}
              fluid={project.hero.fluid}
            />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{project.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              Tags: {project.tags.join(', ')}
            </p>
            <p
              style={{
                display: 'block',
              }}
            >
              Completion: {project.completion}
            </p>
            <p
              style={{
                display: 'block',
              }}
            >
              {`Location: ${project.location.lat}, ${project.location.lon}`}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: project.description.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default ProjectTemplate;

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        baseURL
      }
    }
    contentfulProject(slug: { eq: $slug }) {
      title
      slug
      description {
        childMarkdownRemark {
          html
        }
      }
      hero {
        fluid(maxWidth: 1080, background: "rgb:000000", quality: 100) {
          ...GatsbyContentfulFluid_tracedSVG
          src
        }
        description
      }
      completion(formatString: "MMMM YYYY")
      short
      tags
      location {
        lat
        lon
      }
    }
  }
`;
