process.noDeprecation = true;

module.exports = {
  pathPrefix: "/portfolio",
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pedro Baltazar Portfolio`,
        short_name: `PB Portfolio`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/favicon-16x16.png`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
      },
    },
    `gatsby-plugin-offline`
  ]
};