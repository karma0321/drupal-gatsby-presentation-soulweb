module.exports = {
  siteMetadata: {
    name1: `Marco Martino @devMartini`,
    link1: `https://twitter.com/devMartini`,
    name2: `Giuseppe Iannì @karma0321`,
    link2: `https://twitter.com/karma0321`,
    title: `Drupal + GatsbyJS @ Opensouthcode 2019`,
    date: `May 25, 2019`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/src/slides`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1920,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-images-zoom`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
