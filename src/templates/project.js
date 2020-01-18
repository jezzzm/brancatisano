import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import styled from '@emotion/styled';
import { colors, widths } from '../../constants';
import LocationMap from '../components/location-map';

const ProjectTitle = styled.div`
  padding: 2em 0;
  label {
    font-size: 1.2em;
    color: ${colors.secondary};
    letter-spacing: 1.5px;
  }
  h1 {
    font-size: 4em;
    line-height: 1.2;
    color: ${colors.primary};
    @media (max-width: ${widths.sm}px) {
      font-size: 3em;
    }
  }
`;

const TagsContainer = styled.div`
  grid-area: tags;
  padding: 0 1em 1em 0;
  border-bottom: 1px solid ${colors.light};
  @media (max-width: ${widths.sm}px) {
    border: 0;
    padding: 0 1em 1em 0;
  }
`;

const DateContainer = styled.div`
  grid-area: date;
  padding: 1em 1em 0 0;
  @media (max-width: ${widths.sm}px) {
    border-left: 1px solid ${colors.light};
    padding: 0 0 1em 1em;
  }
`;

const MapContainer = styled.div`
  grid-area: map;
  border-left: 1px solid ${colors.light};
  padding: 0 1em;
  @media (max-width: ${widths.sm}px) {
    border: 0;
    border-top: 1px solid ${colors.light};
    padding: 1em 0;
  }
`;
const MetaContainer = styled.aside`
  display: grid;
  grid-template-areas:
    'tags map map map'
    'date map map map';
  margin: 1em 0;
  label {
    display: block;
    font-size: 0.8em;
    color: ${colors.grey};
    letter-spacing: 1.5px;
  }
  p,
  time {
    font-weight: bolder;
  }
  @media (max-width: ${widths.sm}px) {
    grid-template-areas:
      'tags date'
      'map map'
      'map map';
    margin-bottom: 1em;
  }
`;

const StyledImg = styled(Img)`
  height: 61.8vh;
  max-height: 400px;
`;

const Description = styled.div`
  max-width: 750px;
  margin: 0 auto;
`;

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
            link={[
              {
                rel: 'stylesheet',
                href: 'https://unpkg.com/leaflet@1.6.0/dist/leaflet.css',
              },
            ]}
          />
          <StyledImg
            alt={project.hero.description}
            title={project.hero.description}
            fluid={project.hero.fluid}
          />
          <div className="wrapper">
            <ProjectTitle>
              <label>PROJECT</label>
              <h1>{project.title}</h1>
            </ProjectTitle>
            <MetaContainer>
              <TagsContainer>
                <label>TAGS</label>
                <p>{project.tags.join(', ')}</p>
              </TagsContainer>
              <DateContainer>
                <label>COMPLETION</label>
                <time>{project.completion}</time>
              </DateContainer>
              <MapContainer>
                <label>LOCATION</label>
                <LocationMap
                  lat={project.location.lat}
                  lon={project.location.lon}
                />
              </MapContainer>
            </MetaContainer>

            <Description
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
