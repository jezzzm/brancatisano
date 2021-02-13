import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import { colors } from '../utils/constants';

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

const PreviewTile = ({ type, content }) => (
  <Tile to={`/${type}/${content.slug}/`}>
    <TileImage
      alt={content.hero.description}
      fluid={content.hero.fluid}
      fadeIn
    />
    <TileTitle>{content.title}</TileTitle>
    <small>{content.completion}</small>
    <TileContent>{content.short}</TileContent>
    {content.tags?.length
        && content.tags.map((tag) => <TileTag key={tag}>{tag}</TileTag>)}
  </Tile>
);

PreviewTile.propTypes = {
  type: PropTypes.oneOf(['project', 'concept']).isRequired,
  content: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completion: PropTypes.string.isRequired,
    short: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    hero: PropTypes.shape({
      description: PropTypes.string.isRequired,
      // eslint-disable-next-line react/forbid-prop-types
      fluid: PropTypes.object.isRequired, // gatsby image fluid type
    }).isRequired,
  }).isRequired,
};

export default PreviewTile;
