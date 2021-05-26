// Allow access to Node environment variables
const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

const url = `https://github.com/nwehner/gatsbyScssTypeScriptExample`;

require("dotenv").config({
  path: `.env.${activeEnv}`,
});

// Add TypeScript support
require("ts-node").register({ files: true });

// Standard configuration
module.exports = {
  siteMetadata: {
    siteUrl: url,
    author: `@nwehner`,
  },
	pathPrefix: "/nwehner/gatsbyScssTypeScriptExample",
  plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-react-helmet-canonical-urls`,
			options: {
				siteUrl: url,
				noHash: true,
				noQueryString: true
			},
		},
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
		},
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby SCSS TypeScript Example`,
        short_name: `GatsbyScssTypescriptExample`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/logo.svg`,
      },
    },
		`gatsby-plugin-sitemap`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`
  ],
}
