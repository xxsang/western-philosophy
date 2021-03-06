module.exports = {
  pathPrefix: `/western-philosophy`,
  siteMetadata: {
    title: `简明西方哲学史大纲`,
  },
  plugins: [
    {
      resolve: `gatsby-philipps-foam-theme`,
      options: {
        rootNote: "西方哲学史大纲",
        contentPath: `${__dirname}/../pages`,
        ignore: [
          "contents.md"
        ],
      },
    },
  ],
};
