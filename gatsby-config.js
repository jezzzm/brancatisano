// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
};

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  );
}

module.exports = {
  siteMetadata: {
    title: 'Stephanie Brancatisano | Architect',
    author: 'Stephanie Brancatisano',
    description: 'Website for SBA',
    baseURL: 'https://brancatisano.com',
    phone: '0400 000 000',
    email: 'info@brancatisano.com',
    image: '/brancatisano.svg',
  },
  pathPrefix: '/brancatisano',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
};
