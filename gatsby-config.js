/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Title from siteMetadata`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, 
        tailwind: true, // Enable tailwindcss support
        // postCssPlugins: [
        //   require("tailwindcss"),
        //   require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        // ],
      },
    },  
  ],
}
