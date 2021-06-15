/** @format */

import LazyLoad from 'vanilla-lazyload';
import L from 'leaflet';

import menu from './components/site-header';
import menufooter from './components/site-footer';
import Accordion from './components/site-accordion';
import Map from './components/site-map';
import Form from './components/site-forms';
import GetCategoryData from './components/site-get-category';
import Paginate from './components/site-pagination';
import GetRangeValue from './components/site-get-range';

let onDomLoaded = () => {
	// Lazy Loader
	const lazyLoadInstance = new LazyLoad({
		elements_selector: '.lazy',
	});
	if (lazyLoadInstance) {
		lazyLoadInstance.update();
	}
	// End Lazy Loader

	new menu();
	new menufooter();
	new Accordion();
	new Map();
	new Form();
	new GetCategoryData();
	new Paginate();
	new GetRangeValue();

	screen.orientation.onchange = function() {
		if (screen.width < 768) {
			console.log(screen.orientation.type.match(/\w+/)[0], screen.width);
		}
	};
};

/* Execute Code */
window.addEventListener('DOMContentLoaded', onDomLoaded);
/* Execute Code */
