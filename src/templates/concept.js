import React from 'react';
import { graphql } from 'gatsby';

//styles
import styled from '@emotion/styled';

//components
import Img from 'gatsby-image';
import Layout from '../components/layout';
import ArticleMetaBox from '../components/article-meta-box';
import ArticleTitle from '../components/article-title-box';
import ArticleHelmet from '../components/article-helmet';
import MainWrapper from '../components/main-wrapper';
import MoreButton from '../components/more-button';

const HeroImage = styled(Img)`
  height: 61.8vh;
  max-height: 400px;
`;

const Content = styled.article`
  max-width: 750px;
  margin: 0 auto 4em;
`;

const ConceptTemplate = props => {
  const concept = props.data.contentfulConcept;
  const siteMeta = props.data.site.siteMetadata;
  return (
    <Layout>
      <ArticleHelmet
        title={concept.title}
        author={siteMeta.author}
        description={concept.short}
        baseURL={siteMeta.baseURL}
        articleType={concept.sys.contentType.sys.id}
        slug={concept.slug}
        imageSrc={concept.hero.fluid.src}
        siteTitle={siteMeta.title}
      />
      <HeroImage
        alt={concept.hero.description}
        title={concept.hero.description}
        fluid={concept.hero.fluid}
      />
      <MainWrapper>
        <ArticleTitle
          articleType={concept.sys.contentType.sys.id}
          title={concept.title}
        />
        <ArticleMetaBox
          dateType="CREATION"
          tags={concept.tags}
          date={concept.created}
          lat={concept.location.lat}
          lon={concept.location.lon}
        />
        <Content
          dangerouslySetInnerHTML={{
            __html: concept.description.childMarkdownRemark.html,
          }}
        />
        <MoreButton link="concepts" text="more concepts" />
      </MainWrapper>
    </Layout>
  );
};

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
