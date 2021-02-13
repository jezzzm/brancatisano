import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import styles from './hero.module.css';

const FullWidthHero = styled.figure`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

const Hero = ({ data }) => (
  <div className={styles.hero}>
    <FullWidthHero>
      {data.heroImage && (
        <Img
          className={styles.heroImage}
          alt={data.name}
          fluid={data.heroImage.fluid}
        />
      )}
    </FullWidthHero>
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{data.name}</h3>
      <p className={styles.heroTitle}>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div>
  </div>
);

export default Hero;
