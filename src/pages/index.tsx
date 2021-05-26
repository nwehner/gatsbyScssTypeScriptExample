import React from 'react';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import Logo from '../components/pictures/logo';
import Spring from '../components/pictures/spring';

// SCSS
import { main } from '../style/style.module.scss';

const IndexPage = (): JSX.Element => (
	<Layout>
		<SEO title='Gatsby SCSS TypeScript Example Homepage' />
		<div className={main}>
		<Logo />

			<div>
				<h1>Gatsby SCSS TypeScript Example</h1>
				<h2>Converts SCSS/SASS to CSS with TypeScript Support</h2>
				<p>See `gatsby-node.js` for setup</p>
			</div>

			
			<Spring />
		</div>
	</Layout>
);

export default IndexPage;