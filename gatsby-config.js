module.exports = {
  siteMetadata: {
    title: `Gavin Nelson Design`,
    description: `Gavin Nelson is a product designer who creates human centered design solutions.`,
    author: `@gavmn`,
    siteURL: 'https://gnelsondesign.com', 
  },
  plugins: [
     {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-dark-mode',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gavin Nelson Design`,
        short_name: `GNd`,
        start_url: `/`,
        background_color: `#6466FF`,
        theme_color: `#6466FF`,
        display: `minimal-ui`,
        icon: `src/images/favicon/favicon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -96
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
     
  ],
}
