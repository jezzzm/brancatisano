import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import ArticleMetaBox from '../components/article/meta';
import PageHeading from '../components/page-heading';
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

  const meta = {
    title: project.title,
    description: project.short,
    imageSrc: project.hero.fluid.src,
  };

  return (
    <Layout meta={meta}>
      <HeroImage
        alt={project.hero.description}
        title={project.hero.description}
        fluid={project.hero.fluid}
      />
      <MainWrapper>
        <PageHeading
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
