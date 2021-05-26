import React from 'react';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

// Styles
import { main } from '../style/style.module.scss';

const NotFoundPage = (): JSX.Element => (
	<Layout>
		<SEO title='404: Page Not Found' />
		<div className={main}>
			The requested page was not found. Sorry!
		</div>
	</Layout>
);

export default NotFoundPage;