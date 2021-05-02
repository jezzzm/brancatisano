import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const BaseHelmet = ({
  title,
  author,
  description,
  baseURL,
  imageSrc,
  siteTitle,
  path,
  isArticle,
}) => (
  <Helmet
    title={`${title}${author ? ` | ${author}` : undefined}`}
    meta={[
      {
        name: 'description',
        content: description,
      },
      {
        name: 'twitter:card',
        value: 'summary',
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:type',
        content: isArticle ? 'article' : 'website',
      },
      {
        property: 'og:url',
        content: `${baseURL}${path}`,
      },
      {
        property: 'og:image',
        content: imageSrc,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:site_name',
        content: siteTitle,
      },
    ]}
  />
);

BaseHelmet.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string.isRequired,
  baseURL: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  siteTitle: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  isArticle: PropTypes.bool,
};

BaseHelmet.defaultProps = {
  author: undefined,
  isArticle: false,
};

export default BaseHelmet;
