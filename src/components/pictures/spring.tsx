import React from "react";

// Image files
import jpg from '../../images/hotSpringWater.jpg';
import webp from '../../images/hotSpringWater.webp';
import png from '../../images/hotSpringWater.png';

// SCSS
import { water } from '../../style/style.module.scss';

/*
 * https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
 */
const Spring = (): JSX.Element => (
	<picture>
		<source type='image/jpeg' srcSet={jpg} />
		<source type='image/webp' srcSet={webp} />
		<img src={png} className={water} alt='Water' />
	</picture>
);

export default Spring;
