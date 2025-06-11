process.noDeprecation = true;

module.exports = {
  pathPrefix: "/portfolio",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pedro Baltazar`,
        short_name: `PB Portfolio`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/favicon-16x16.png`,
        icons: [
          {
            src: `src/images/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `src/images/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `src/images/favicon.ico`,
            sizes: `48x48`,
            type: `image/ico`,
          },
          {
            src: `/icons/apple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
          {
            src: `/icons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/icons/android-chrome-512x512`,
            sizes: `512x512`,
            type: `image/png`,
          }
        ],
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
      },
    },
    `gatsby-plugin-offline`
  ]
};