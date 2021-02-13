import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import { colors } from '../../constants';

const TileTitle = styled.h3`
  font-size: 1.5em;
  color: ${colors.primary};
  margin: 0.7rem 0 0;
`;

const TileTag = styled.p`
  color: ${colors.secondary};
  display: inline-block;
  font-size: 0.8em;
  padding: 0.1rem 0.5rem;
  margin: 0.2rem 0;
  line-height: 1.5;
  border: 1px solid ${colors.secondary};
  margin-right: 0.5rem;
`;

const TileContent = styled.p`
  margin: 0.7rem 0;
`;

const Tile = styled(Link)`
  display: block;
  height: 100%;
  transition: 0.15s all;
  &:hover {
    text-decoration: none;
    border: 1px solid ${colors.secondary};
  }
  border: 1px solid ${colors.light};
  padding: 2rem;
  }
`;

const TileImage = styled(Img)`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const ArticleTile = ({ project }) => {
  const newImageSizes = { ...project.hero.sizes };
  return (
    <Tile to={`/project/${project.slug}/`}>
      <TileImage
        alt={project.hero.description}
        fluid={project.hero.fluid}
        fadeIn
      />
      <TileTitle>{project.title}</TileTitle>
      <small>{project.completion}</small>
      <TileContent>{project.short}</TileContent>
      {project.tags
        && project.tags.map((tag) => <TileTag key={tag}>{tag}</TileTag>)}
    </Tile>
  );
};

export default ArticleTile;
