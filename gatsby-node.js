const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const projectPost = path.resolve('./src/templates/project.jsx');
    const conceptPost = path.resolve('./src/templates/concept.jsx');

    resolve(
      graphql(
        `
          {
            allContentfulProject {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulConcept {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `,
      ).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }

        const projects = result.data.allContentfulProject.edges;
        projects.forEach((project) => {
          createPage({
            path: `/project/${project.node.slug}/`,
            component: projectPost,
            context: {
              slug: project.node.slug,
            },
          });
        });

        const concepts = result.data.allContentfulConcept.edges;
        concepts.forEach((concept) => {
          createPage({
            path: `/concept/${concept.node.slug}/`,
            component: conceptPost,
            context: {
              slug: concept.node.slug,
            },
          });
        });
      }),
    );
  });
};
