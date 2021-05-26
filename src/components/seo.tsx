/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react";
import { Helmet } from "react-helmet";

/**
 * Add page-specific metadata for SEO
 */
const SEO = ({ title, description }:{ title: string, description?: string }): JSX.Element => {
	const metaDescription: string = description || 'Siphonophorae: community discussions in any langauge';
	const siteTitle: string = 'Siphonophorae'

	return (
		<Helmet
			htmlAttributes={{
				lang: 'en'
			}}
			title={title}
			titleTemplate={`%s | ${siteTitle}`}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: `@nwehner`,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
				// Responsiveness
				{
					name: `viewport`,
					content: `width=device-width,initial-scale=1`
				}
			]}
		/>
	);
};

export default SEO;
