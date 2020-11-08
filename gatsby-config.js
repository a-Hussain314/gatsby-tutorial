/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata : {
    title : "Gatsby Tutorial",
    author : "a.Hussain"
  },
  plugins: [
    'gatsby-plugin-sass',
    "gatsby-plugin-react-helmet",
    {
      resolve:'gatsby-source-filesystem',
      options:{
        name:'src',
        path : `${__dirname}/src/`
      }
    },
    "gatsby-plugin-sharp",
    {
      resolve :'gatsby-transformer-remark',
      options : {
        plugins :[
          "gatsby-remark-relative-images",
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              linkImagesToOriginal : false
            }
          }
        ]
      }

    }
  ]
}
