import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import Tag from './tag';
import { colors } from '../utils/constants';

const TileTitle = styled.h3`
  font-size: 1.5em;
  color: ${colors.copy};
  margin: 0.7rem 0 0;
`;

const TileContent = styled.p`
  margin: 0.7rem 0;
`;

const Tile = styled(Link)`
  display: block;
  height: 100%;
  border: 1px solid ${colors.light};
  border-radius: 1rem;
  padding: 2rem;

  &:hover {
    text-decoration: none;
    border: 1px solid ${colors.secondary};
  }
`;

const TileImage = styled(Img)`
  box-shadow: 0 0 20px ${colors.shadow};
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
    {content.tags?.length &&
      content.tags.map((tag) => <Tag key={tag} text={tag} />)}
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
