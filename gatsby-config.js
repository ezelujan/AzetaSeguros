module.exports = {
  siteMetadata: {
    title: `Azeta Seguros`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptatem.',
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#eceeff`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: 'gatsby-source-datocms',
      options: {
        "apiToken": "aef0e8cedcd3b8ccb4c2c13657040a"
      }
    },
    "gatsby-plugin-image",
  ]
};