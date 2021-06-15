/** @format */

class Accordion {
	constructor() {
		enum CLASSES {
			Menu = 'accordion__toggle',
			MenuToggleActive = 'js-accordion-toggle-active',
		}

		const init = () => {
			let matches = function(el, selector) {
				return (
					el.matches ||
					el.matchesSelector ||
					el.msMatchesSelector ||
					el.mozMatchesSelector ||
					el.webkitMatchesSelector ||
					el.oMatchesSelector
				).call(el, selector);
			};

			document.body.addEventListener('click', (e) => {
				let targets = e.target, targetParent = e.target.parentNode;
				if (matches(targets, '.' + CLASSES.Menu) || matches(targetParent, '.' + CLASSES.Menu)) {
					e.target.parentNode.parentNode.classList.toggle(CLASSES.MenuToggleActive);
				}
			});
		};

		!!document.querySelector('.' + CLASSES.Menu) && init();
	}
}

export default Accordion;
