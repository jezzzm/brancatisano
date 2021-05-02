import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import PageHeading from '../components/page-heading';
import MainWrapper from '../components/main-wrapper';

import * as styles from '../style/about.style';

const Contact = ({ data }) => {
  const meta = {
    title: 'Contact Us',
    description: 'Get in touch with SBA',
  };

  return (
    <Layout meta={meta}>
      <MainWrapper>
        <PageHeading articleType="CONTACT" title="Get in touch with us" />
        <div css={styles.content}>
          <article css={styles.article}>
            <p>Phone: {data.site.siteMetadata.phone}</p>

            <p>Email: {data.site.siteMetadata.email}</p>
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
        phone
        email
      }
    }
  }
`;
