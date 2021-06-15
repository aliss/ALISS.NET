/** @format */

class GetRangeValue {
	constructor() {
		enum CLASSES {
			RangeSlider = 'range-slider__range',
		}

		enum ID {
			RangeSlider = 'custom-radius-input',
			RangeSliderValue = 'custom-radius-input-value',
		}

		const init = () => {
			const selectElement = document.querySelector('.' + CLASSES.RangeSlider);
			selectElement.addEventListener('change', (event) => {
        document.getElementById(ID.RangeSliderValue).innerHTML = selectElement.value;
			});
		};

		!!document.querySelector('.' + CLASSES.RangeSlider) && init();
	}
}

export default GetRangeValue;
