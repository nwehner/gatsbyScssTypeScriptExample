import React from "react";

// Image files
import svg from '../../images/logo.svg';
import webp from '../../images/logo.webp';
import png from '../../images/logo.png';
import jpg from '../../images/logo.jpg';

// SCSS
import { logo } from '../../style/style.module.scss';

/*
 * https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
 */
const Logo = (): JSX.Element => (
	<picture>
		<source type='image/svg+xml' srcSet={svg} />
		<source type='image/webp' srcSet={webp} />
		<source type='image/jpeg' srcSet={jpg} />
		<img src={png} className={logo} alt='Logo for Gatsby SCSS TypeScript Example' />
	</picture>
);

export default Logo;
