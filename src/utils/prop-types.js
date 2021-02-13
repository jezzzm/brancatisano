/* eslint-disable import/prefer-default-export */
import PropTypes from 'prop-types';

export const collectionPage = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }).isRequired,
    allContentfulConcept: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
    allContentfulAsset: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
  }).isRequired,
};
