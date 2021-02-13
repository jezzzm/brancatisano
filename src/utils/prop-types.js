/* eslint-disable import/prefer-default-export */
import PropTypes from 'prop-types';
import { upperFirst } from './strings';

/**
 *
 * @param {'concept' | 'project'} type
 * @returns object of proptypes
 */
export const collectionPage = (type) => ({
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }).isRequired,
    [`allContentful${upperFirst(type)}`]: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
    allContentfulAsset: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
  }).isRequired,
});
