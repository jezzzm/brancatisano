import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const BaseHelmet = ({
  title,
  author,
  description,
  baseURL,
  articleType,
  slug,
  imageSrc,
  siteTitle,
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
        content: 'article',
      },
      {
        property: 'og:url',
        content: `${baseURL}/${articleType.toLowerCase()}/${slug}/`,
      },
      {
        property: 'og:image',
        content: `https:${imageSrc}`,
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
  articleType: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  siteTitle: PropTypes.string,
};

BaseHelmet.defaultProps = {
  author: undefined,
  siteTitle: 'Stephanie Brancatisano Architect',
};

export default BaseHelmet;
