module.exports = {
  proxy: {
    prefix: "/api",
    url: "http://localhost:3333",
  },
  siteMetadata: {
    title: `web`,
    description: `This is a gatsby application created by Nx.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    // "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        svgo: false,
        ref: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
