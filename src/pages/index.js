import React from 'react';
import { graphql } from 'gatsby';

//components
import Helmet from 'react-helmet';
import Hero from '../components/hero';
import Layout from '../components/layout';
import MainWrapper from '../components/main-wrapper';
import ProjectPreview from '../components/project-preview';
import Carousel from '../components/carousel';

const IndexPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  // const projects = data.allContentfulProject.edges;
  const [author] = data.allContentfulPerson.edges;

  const handleKeyDown = e => {
    console.log(e.charCode);
    if (e.charCode === 37) {
      clickLeft();
    } else if (e.charCode == 39) {
      clickRight();
    }
  };

  return (
    <Layout onKeyDown={handleKeyDown}>
      <Helmet title={siteTitle} />
      {/* <Hero data={author.node} /> */}
      <Carousel images={data.allContentfulAsset.edges}></Carousel>
      <MainWrapper>
        {/* <h2 className="section-headline">Recent Projects</h2>
        <ul className="article-list">
          {projects.map(({ node }) => {
            return (
              <li key={node.slug}>
                <ProjectPreview project={node} />
              </li>
            );
          })}
        </ul> */}
      </MainWrapper>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }

    allContentfulPerson(
      filter: { email: { eq: "stephanie@brancatisano.com" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }

    allContentfulAsset {
      edges {
        node {
          fluid(maxWidth: 1440, quality: 50, background: "rgb:000000") {
            ...GatsbyContentfulFluid_noBase64
          }
          description
          title
        }
      }
    }
  }
`;

//project query
// allContentfulProject(sort: { fields: [updatedAt], order: DESC }) {
//       edges {
//         node {
//           title
//           slug
//           updatedAt
//           completion(formatString: "MMMM, YYYY")
//           tags
//           hero {
//             fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
//               ...GatsbyContentfulFluid_tracedSVG
//             }
//           }
//           short
//         }
//       }
//     }
