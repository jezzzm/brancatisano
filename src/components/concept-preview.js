import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from './article-preview.module.css';

export default ({ concept }) => (
  <div className={styles.preview}>
    <Img alt={concept.hero.description} fluid={concept.hero.fluid} />
    <h3 className={styles.previewTitle}>
      <Link to={`/concept/${concept.slug}/`}>{concept.title}</Link>
    </h3>
    <small>{concept.publishDate}</small>
    <p>{concept.short}</p>
    {concept.tags &&
      concept.tags.map(tag => (
        <p className={styles.tag} key={tag}>
          {tag}
        </p>
      ))}
  </div>
);
