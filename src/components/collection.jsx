/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import Layout from './layout';
import PreviewTile from './preview-tile';
import MainWrapper from './main-wrapper';
import { colors } from '../utils/constants';
import { upperFirst } from '../utils/strings';

const CollectionTitle = styled.h4`
  font-size: 1.2em;
  font-weight: lighter;
  color: ${colors.secondary};
  letter-spacing: 1.5px;
`;

const PreviewList = styled.div`
  margin: 1em 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2rem;
`;

const CollectionBlurb = styled.p`
  text-align: center;
  font-size: 1.5em;
  margin: 3em 0;
`;

const CollectionHero = styled(Img)`
  height: 61.8vh;
  max-height: 400px;
`;

const Collection = ({ type, edges, fluidHero }) => {
  const plural = `${type}s`;

  const meta = {
    title: upperFirst(plural),
    description: `All ${plural} by SBA.`,
    image: fluidHero.src,
  };

  return (
    <Layout meta={meta}>
      <CollectionHero
        alt={`Image representing SBA ${plural} collection`}
        fluid={fluidHero}
        fadeIn
      />
      <MainWrapper>
        <CollectionBlurb>{`"Short blurb about ${plural}, generally."`}</CollectionBlurb>
        <CollectionTitle>{plural.toUpperCase()}</CollectionTitle>
        <PreviewList>
          {edges.map(({ node }) => (
            <PreviewTile
              key={`collection-preview-${node.slug}`}
              type={type}
              content={node}
            />
          ))}
        </PreviewList>
      </MainWrapper>
    </Layout>
  );
};

Collection.propTypes = {
  type: PropTypes.oneOf(['project', 'concept']).isRequired,
  edges: PropTypes.arrayOf(PropTypes.object).isRequired,
  fluidHero: PropTypes.object.isRequired, // gatsby fluid type
};

export default Collection;
