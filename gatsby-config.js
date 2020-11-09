/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path')

module.exports = {
  /* Your site config here */
  pathPrefix: `/thank-you-mom-and-dad`,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
  siteMetadata: {
    title: "Thanks Mom and Dad",
    titleTemplate: "%s",
    description: "An appreciation website for the best parents ever.",
    url: "https://henryvuong.com/thank-you-mom-and-dad", // No trailing slash allowed!
    image: "/static/preview-image-3504eb4fc3ef59ea53a0aabbf9c8c01e.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "",
  },
}
