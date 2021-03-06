module.exports = {
  siteMetadata: {
    title: "WaffleHacks",
    description: "We're hackers with hearts.",
    author: "@WaffleHacks",
    siteUrl: "https://wafflehacks.tech",
    image: "/images/logo.png",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "static",
        path: `${__dirname}/src/static`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://cms.wafflehacks.tech",
        queryLimit: 1000,
        contentTypes: ["sponsor", "track"],
        singleTypes: ["home-page", "footer"],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Waffle Hacks",
        start_url: "/",
        background_color: "#9d6832",
        theme_color: "#f1af49",
        display: "minimal-ui",
        icon: "src/images/sample-favicon.png",
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: [
          "src/css/style.css",
          "src/css/global.css",
          "src/css/countdown.css",
        ],
      },
    },
    "gatsby-plugin-offline",
  ],
}
