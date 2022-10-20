module.exports = {
  siteMetadata: {
    title: `AzetaSeguros`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-datocms',
    options: {
      "apiToken": "aef0e8cedcd3b8ccb4c2c13657040a"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-emotion"]
};