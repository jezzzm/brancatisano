import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import ArticleTitle from '../components/article/title';
import MainWrapper from '../components/main-wrapper';
import Helmet from '../components/helmet';
import Logo from '../components/logo';

import * as styles from './about.style';

const Contact = ({ data }) => {
  const {
    site: { siteMetadata },
  } = data;

  return (
    <Layout>
      {/* <Helmet
        title="Contact Stephanie Brancatisano Architects"
        author={siteMetadata.author}
        baseURL={siteMetadata.baseURL}
      /> */}
      <MainWrapper>
        <ArticleTitle articleType="CONTACT" title="Get in touch with us" />
        <div css={styles.content}>
          <article css={styles.article}>
            <p>Phone: 0400 000 000</p>

            <p>Email: info@brancatisano.com</p>
          </article>
        </div>
      </MainWrapper>
    </Layout>
  );
};

export default Contact;

export const pageQuery = graphql`
  query ContactPage {
    site {
      siteMetadata {
        author
        baseURL
      }
    }
  }
`;
