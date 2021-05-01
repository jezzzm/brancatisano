import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import ArticleTitle from '../components/article/title';
import MainWrapper from '../components/main-wrapper';
import Helmet from '../components/helmet';
import Logo from '../components/logo';
import LinkButton from '../components/link-button';

import * as styles from './about.style';

const About = ({ data }) => {
  const {
    site: { siteMetadata },
  } = data;

  return (
    <Layout>
      {/* <Helmet
        title="About Stephanie Brancatisano Architects"
        author={siteMetadata.author}
        baseURL={siteMetadata.baseURL}
      /> */}
      <MainWrapper>
        <ArticleTitle
          articleType="ABOUT"
          title="Stephanie Brancatisano Architects"
        />
        <div css={styles.content}>
          <div css={styles.imageWrapper}>
            <Logo />
          </div>
          <article css={styles.article}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              blandit, est sit amet feugiat sodales, massa ipsum vestibulum
              mauris, in consectetur arcu ante at ipsum. Quisque sit amet sapien
              convallis, feugiat tortor ac, blandit nisi. In eu ante elit.
              Mauris quis scelerisque tellus. Praesent ipsum velit, aliquet a
              interdum eu, euismod vel lectus. Quisque in justo leo. Praesent
              dapibus libero a urna scelerisque tempus. Morbi fringilla molestie
              nisi eget feugiat. Praesent euismod quam sit amet sodales
              efficitur.
            </p>

            <p>
              In porttitor neque vitae mollis pellentesque. Proin felis justo,
              ultrices eget mauris non, viverra dignissim mi. Aliquam volutpat
              est vel mauris viverra, eu accumsan magna posuere. Praesent
              bibendum sapien eu leo congue, vel congue orci porta. Fusce
              feugiat, tortor id finibus gravida, velit nulla mattis mi, et
              ullamcorper augue lorem vitae nibh. Sed dapibus augue elementum
              lacus pellentesque pulvinar. Nullam nec turpis in sem dictum
              luctus at at felis. Sed et tortor tortor. Mauris fermentum nulla
              eget posuere faucibus.
            </p>

            <p>
              Donec lobortis enim lorem, eu tristique orci volutpat vitae. Ut
              mollis eleifend tortor nec finibus. Donec et iaculis ligula, vel
              eleifend nisi. In eu sapien eros. Nam vitae est at augue consequat
              varius. Maecenas volutpat velit nec neque gravida suscipit.
              Aliquam condimentum, massa vel vulputate ultricies, ligula orci
              dapibus velit, ut porta augue magna nec turpis. Fusce imperdiet
              sagittis lorem id iaculis. Nulla ac dolor augue. Nulla vitae purus
              et tortor porttitor pretium. Praesent sollicitudin felis at sem
              mollis, id accumsan velit convallis. Curabitur convallis imperdiet
              cursus. Duis cursus faucibus sodales.
            </p>
            <div css={styles.ctaWrapper}>
              <p>Interested in working with us?</p>
              <LinkButton
                to="/contact"
                text="Get in touch"
                appearance="success"
              />
            </div>
          </article>
        </div>
      </MainWrapper>
    </Layout>
  );
};

export default About;

export const pageQuery = graphql`
  query AboutPage {
    site {
      siteMetadata {
        author
        baseURL
      }
    }
  }
`;
