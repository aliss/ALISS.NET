/** @format */
import L from 'leaflet';

// DEBUG Mode, use this for leaving console logs in the code base for for testing and debugging.

const debug = false;
const APIURL = 'https://testing-aliss.herokuapp.com/api/v4/service-area-spatial/full-set/?type=';
// const APIURL = 'https://www.aliss.org/api/v4/service-area-spatial/full-set/?type=';

class Map {
	constructor() {
		enum MAPDATA {
			Zoom = 13,
		}

		enum CLASSES {
			MapElement = 'aliss-component-map',
		}

		enum ID {
			MapElement = 'aliss-component-map',
			MapErrorElement = 'aliss-component-map-error',
			MapErrorElementContents = 'aliss-component-map-error-contents',
		}

		enum ATTRIBUTES {
			Areas = 'data-map-areas',
			Markers = 'data-map-markers',
			ID = 'data-id',
		}

		enum Type {
			Feature = 'Feature',
		}

		enum NAMEKEY {
			Lad18nm = 'lad18nm',
		}

		const init = () => {
			let if_map = document.getElementById(ID.MapElement);
			if (if_map) {
				// Set vars.
				let polyarray = [];
				let marker_count = '';
				let area_count = '';
				let map = '';
				let map_popups = '';

				// Get map data from the map element.
				let data_areas = if_map.getAttribute(ATTRIBUTES.Areas),
					data_markers = if_map.getAttribute(ATTRIBUTES.Markers),
					data_ID = if_map.getAttribute(ATTRIBUTES.ID);

				// Parse the map data values.
				let gridOptions_areas = JSON.parse(data_areas),
					gridOptions_markers = JSON.parse(data_markers),
					gridOptions_ID = data_ID;

				if (data_markers && data_areas) {
					// Init the map with the very first location provided.
					map = L.map(ID.MapElement, {
						center: [gridOptions_markers.markers[0].latitude, gridOptions_markers.markers[0].longitude],
						zoom: MAPDATA.Zoom,
					});
				} else if (data_markers == null && data_areas) {
					map = L.map(ID.MapElement, {
						center: [55.87649918, -4.21478987],
						zoom: MAPDATA.Zoom,
					});
				} else if (data_markers && data_areas == null) {
					// Init the map with the very first location provided.
					map = L.map(ID.MapElement, {
						center: [gridOptions_markers.markers[0].latitude, gridOptions_markers.markers[0].longitude],
						zoom: MAPDATA.Zoom,
					});
				} else if (data_markers == null && data_areas == null) {
					if_map.remove();
					if_map.style.display = 'none';
					document.getElementById(ID.MapErrorElement).addClass =
						'Please try refreshing the page or visiting the page again later. If the issue persists, please notify us on <a id="aliss-contact-email" href="mailto:help@aliss.org" title="Click here to contact us via email (This will open in a new window)." target="_blank" class="classes">help@aliss.org</a>.';
					document.getElementById(ID.MapErrorElement).innerHTML =
						'Please try refreshing the page or visiting the page again later. If the issue persists, please notify us on <a id="aliss-contact-email" href="mailto:help@aliss.org" title="Click here to contact us via email (This will open in a new window)." target="_blank" class="classes">help@aliss.org</a>.';
				}

				if (data_markers) {
					// Assign the markers

					for (marker_count in gridOptions_markers.markers) {
						// Marker lat longs.
						L.marker([
							gridOptions_markers.markers[marker_count].latitude,
							gridOptions_markers.markers[marker_count].longitude,
						])
							.bindPopup(gridOptions_markers.markers[0].address)
							.addTo(map);
					}
				}

				if (data_ID) {
					var TESTURL = 'https://testing-aliss.herokuapp.com/api/v4/service-area-spatial/?service_id=' + data_ID;
					var REALURL = 'https://www.aliss.org/api/v4/service-area-spatial/?service_id=' + data_ID;
					var request = new XMLHttpRequest();
					request.open('GET', REALURL, true);

					request.onload = function() {
						if (this.status >= 200 && this.status < 400) {
							// Success!
							var data = JSON.parse(this.response);
							// console.log(data);

							var singleArea = false;
							if (data.length == 1) {
								singleArea = true;
							}
							data.forEach(function(feature) {
								if (feature.length != 0) {
									var geo_feature = feature;
									var feature_name = '';
									var name_keys = ['lad18nm', 'HBName', 'HIAName', 'ctry17nm'];
									name_keys.forEach(function(name_key) {
										if (geo_feature.properties[name_key]) {
											feature_name = geo_feature.properties[name_key];
											// console.log(feature_name);
										}
									});
									var geoJSON = L.geoJson(geo_feature).addTo(map).bindPopup(`<b>${feature_name}</b>`);
									map.fitBounds(geoJSON.getBounds());
								}
							});
						} else {
							// We reached our target server, but it returned an error
						}
					};

					request.onerror = function() {
						// There was a connection error of some sort
					};

					request.send();
				}

				// Credit where credits due
				L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
				}).addTo(map);
			}
		};

		!!document.querySelector('.' + CLASSES.MapElement) && init();
	}
}

export default Map;
