import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import ArticleMetaBox from '../components/article/meta';
import ArticleTitle from '../components/article/title';
import Helmet from '../components/helmet';
import MainWrapper from '../components/main-wrapper';
import LinkButton from '../components/link-button';

const HeroImage = styled(Img)`
  height: 61.8vh;
  max-height: 400px;
`;

const Content = styled.article`
  max-width: 750px;
  margin: 0 auto 4em;
`;

const ProjectTemplate = ({ data }) => {
  const { contentfulProject: project } = data;
  const { siteMetadata: siteMeta } = data.site;
  return (
    <Layout>
      <Helmet
        title={project.title}
        author={siteMeta.author}
        description={project.short}
        baseURL={siteMeta.baseURL}
        articleType={project.sys.contentType.sys.id}
        slug={project.slug}
        imageSrc={project.hero.fluid.src}
        siteTitle={siteMeta.title}
      />
      <HeroImage
        alt={project.hero.description}
        title={project.hero.description}
        fluid={project.hero.fluid}
      />
      <MainWrapper>
        <ArticleTitle
          articleType={project.sys.contentType.sys.id}
          title={project.title}
        />
        <ArticleMetaBox
          dateType="COMPLETION"
          tags={project.tags}
          date={project.completion}
          lat={project.location.lat}
          lon={project.location.lon}
        />
        <Content
          dangerouslySetInnerHTML={{
            __html: project.description.childMarkdownRemark.html,
          }}
        />
        <LinkButton to="/projects" text="More Projects" />
      </MainWrapper>
    </Layout>
  );
};

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
      sys {
        contentType {
          sys {
            id
          }
        }
      }
    }
  }
`;
