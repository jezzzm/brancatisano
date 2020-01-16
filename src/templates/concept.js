import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import Img from 'gatsby-image';
import Layout from '../components/layout';

import heroStyles from '../components/hero.module.css';

class ConceptTemplate extends React.Component {
  render() {
    const concept = get(this.props, 'data.contentfulConcept');
    const siteMeta = get(this.props, 'data.site.siteMetadata');

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet
            title={`${concept.title} | ${siteMeta.author}`}
            meta={[
              {
                name: `description`,
                content: concept.short,
              },
              {
                name: `twitter:card`,
                value: `summary`,
              },
              {
                property: `og:title`,
                content: concept.title,
              },
              {
                property: `og:type`,
                content: `article`,
              },
              {
                property: `og:url`,
                content: `${siteMeta.baseURL}/concept/${concept.slug}/`,
              },
              {
                property: `og:image`,
                content: `https:${concept.hero.fluid.src}`,
              },
              {
                property: `og:description`,
                content: concept.short,
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
              alt={concept.hero.description}
              title={concept.hero.description}
              fluid={concept.hero.fluid}
            />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{concept.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              Tags: {concept.tags.join(', ')}
            </p>
            <p
              style={{
                display: 'block',
              }}
            >
              Created: {concept.created}
            </p>
            {concept.location && (
              <p
                style={{
                  display: 'block',
                }}
              >
                {`Location: ${concept.location.lat}, ${concept.location.lon}`}
              </p>
            )}
            <div
              dangerouslySetInnerHTML={{
                __html: concept.description.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default ConceptTemplate;

export const pageQuery = graphql`
  query ConceptBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        baseURL
      }
    }
    contentfulConcept(slug: { eq: $slug }) {
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
      created(formatString: "MMMM YYYY")
      short
      tags
      location {
        lat
        lon
      }
    }
  }
`;
