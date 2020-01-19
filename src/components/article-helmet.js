import React from 'react';
import Helmet from 'react-helmet';

export default ({
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
    title={`${title} | ${author}`}
    meta={[
      {
        name: `description`,
        content: description,
      },
      {
        name: `twitter:card`,
        value: `summary`,
      },
      {
        property: `og:title`,
        content: title,
      },
      {
        property: `og:type`,
        content: `article`,
      },
      {
        property: `og:url`,
        content: `${baseURL}/${articleType.toLowerCase()}/${slug}/`,
      },
      {
        property: `og:image`,
        content: `https:${imageSrc}`,
      },
      {
        property: `og:description`,
        content: description,
      },
      {
        property: `og:site_name`,
        content: siteTitle,
      },
    ]}
  />
);
