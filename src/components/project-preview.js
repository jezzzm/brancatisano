import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from './article-preview.module.css';

export default ({ project }) => (
  <div className={styles.preview}>
    <Img alt={project.hero.description} fluid={project.hero.fluid} />
    <h3 className={styles.previewTitle}>
      <Link to={`/project/${project.slug}/`}>{project.title}</Link>
    </h3>
    <small>{project.publishDate}</small>
    <p>{project.short}</p>
    {project.tags &&
      project.tags.map(tag => (
        <p className={styles.tag} key={tag}>
          {tag}
        </p>
      ))}
  </div>
);
