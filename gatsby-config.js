const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby-my-template",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "~": path.resolve(__dirname, "src")
        }
      }
    },
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
          outputPath: `src/__generated__/gatsby-types.d.ts`
      }
  },
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  ],
};
