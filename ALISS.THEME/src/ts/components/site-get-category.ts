/** @format */

class GetCategoryData {
	constructor() {
		enum CLASSES {
			CategoriesInputP = 'search-category-primary',
			CategoriesWrapS = 'category-wrap-secondary',
			CategoriesInputS = 'search-category-secondary',
			CategoriesWrapT = 'search-category-ternary',
			CategoriesInputT = 'category-wrap-ternary',
		}

		enum ID {
			CategoriesInputP = 'search-category',
			CategoriesInputS = 'search-categorys',
			CategoriesWrapS = 'search-category-secondary',
			CategoriesInputT = 'search-categoryt',
			CategoriesWrapT = 'search-category-tenary',
		}

		// const getSubCat = () => {
		// 	const selectElement = document.querySelector('#' + CLASSES.CategoriesWrap);

		// 	selectElement.addEventListener('change', (event) => {
		// 		var request = new XMLHttpRequest();
		// 		request.open('GET', 'https://testing-aliss.herokuapp.com/api/v4/categories/', true);
		// 		// request.open('GET', 'https://www.aliss.org/api/v4/categories/', true);

		// 		request.onload = function() {
		// 			if (this.status >= 200 && this.status < 400) {
		// 				// Success!
		// 				var data = JSON.parse(this.response);

		// 				let html = '';

		// 				for (let c = 0; c < data.data.length; c++) {
		// 						console.log('Sub-Category: ' + data.data.sub_categories[c].name);
		// 						html +=
		// 							'<option value="' +
		// 							data.data.sub_categories[c].slug +
		// 							'">' +
		// 							data.data.sub_categories[c].name +
		// 							'</option>';
		// 				}
		// 				// document.getElementById(ID.SubCategoriesWrap).innerHTML += html;
		// 			} else {
		// 				// We reached our target server, but it returned an error
		// 				console.log('We reached our target server, but it returned an error');
		// 			}
		// 		};

		// 		request.onerror = function() {
		// 			// There was a connection error of some sort
		// 			console.log('error');
		// 		};

		// 		request.send();
		// 	});
		// };

		const getCategoryPrimary = () => {
			var request = new XMLHttpRequest();
			request.open('GET', 'https://testing-aliss.herokuapp.com/api/v4/categories/', true);
			// request.open('GET', 'https://www.aliss.org/api/v4/categories/', true);

			request.onload = function() {
				if (this.status >= 200 && this.status < 400) {
					// Success!
					var data = JSON.parse(this.response);

					let html = '';

					if (data) {
						for (let c = 0; c < data.data.length; c++) {
							html +=
								'<option data-name="' +
								data.data[c].name +
								'" value="' +
								data.data[c].slug +
								'">' +
								data.data[c].name +
								'</option>';
						}
						document.getElementById(ID.CategoriesInputP).innerHTML += html;
					}
				} else {
					// We reached our target server, but it returned an error
					console.log('We reached our target server, but it returned an error');
				}
			};
			request.onerror = function() {
				// There was a connection error of some sort
				console.log('error');
			};
			request.send();
		};

		const init = () => {
			let subC = '';
			const selectElementP = document.querySelector('.' + CLASSES.CategoriesInputP);
			const selectElementS = document.querySelector('.' + CLASSES.CategoriesInputS);

			getCategoryPrimary();

			selectElementP.addEventListener('change', (event) => {
				var request = new XMLHttpRequest();
				request.open('GET', 'https://testing-aliss.herokuapp.com/api/v4/categories/', true);
				// request.open('GET', 'https://www.aliss.org/api/v4/categories/', true);

				request.onload = function() {
					if (this.status >= 200 && this.status < 400) {
						// Success!
						var data = JSON.parse(this.response);
						let htmlS = '<option value="">Choose a sub category</option>';
						for (let c = 0; c < data.data.length; c++) {
							if (data.data[c].slug === selectElementP.value) {
								if (data.data[c].sub_categories) {
									document.getElementById(ID.CategoriesWrapS).style.display = 'block';
									for (let d = 0; d < data.data[c].sub_categories.length; d++) {
										htmlS +=
											'<option data-name="' +
											data.data[c].sub_categories[d].name +
											'" value="' +
											data.data[c].sub_categories[d].slug +
											'">' +
											data.data[c].sub_categories[d].name +
											'</option>';
									}
									document.getElementById(ID.CategoriesInputS).innerHTML = htmlS;
								} else {
									document.getElementById(ID.CategoriesInputS).innerHTML =
										'<option value="">Choose a second category</option>';
									document.getElementById(ID.CategoriesWrapS).style.display = 'none';
								}
							}
						}
					} else {
						// We reached our target server, but it returned an error
						console.log('We reached our target server, but it returned an error');
					}
				};
				request.onerror = function() {
					// There was a connection error of some sort
					console.log('error');
				};
				request.send();
			});

			selectElementS.addEventListener('change', (event) => {
				var request = new XMLHttpRequest();
				// request.open('GET', 'https://testing-aliss.herokuapp.com/api/v4/categories/', true);
				request.open('GET', 'https://www.aliss.org/api/v4/categories/', true);

				request.onload = function() {
					if (this.status >= 200 && this.status < 400) {
						// Success!
						var data = JSON.parse(this.response);
						let htmlT = '<option value="">Choose a sub category</option>';
						for (let c = 0; c < data.data.length; c++) {
							if (data.data[c].slug === selectElementP.value) {
								if (data.data[c].sub_categories) {
									for (let z = 0; z < data.data[c].sub_categories.length; z++) {
										if (data.data[c].sub_categories[z].sub_categories) {
											// console.log(data.data[c].sub_categories[z].sub_categories);
											for (let y = 0; y < data.data[c].sub_categories[z].sub_categories.length; y++) {
												if (selectElementS.value === data.data[c].sub_categories[z].slug) {
													document.getElementById(ID.CategoriesWrapT).style.display = 'block';
													htmlT +=
														'<option data-name="' +
														data.data[c].sub_categories[z].sub_categories[y].name +
														'" value="' +
														data.data[c].sub_categories[z].sub_categories[y].slug +
														'">' +
														data.data[c].sub_categories[z].sub_categories[y].name +
														'</option>';
												}
												// if (data.data[c].sub_categories[z].sub_categories.length) {
												// 	for (let x = 0; x < data.data[c].sub_categories[z].sub_categories.length; x++) {
												// 		console.log('test 3');
												// 	}
												// }
											}
											document.getElementById(ID.CategoriesInputT).innerHTML = htmlT;
										} else {
											document.getElementById(ID.CategoriesWrapT).style.display = 'none';
										}
									}
								}
							}
						}
					} else {
						// We reached our target server, but it returned an error
						console.log('We reached our target server, but it returned an error');
					}
				};
				request.onerror = function() {
					// There was a connection error of some sort
					console.log('error');
				};
				request.send();
			});
		};

		!!document.querySelector('.' + CLASSES.CategoriesInputP) && init();
	}
}

export default GetCategoryData;
