import Company from './Company';
import User from './user';
import { Markerable } from './types';

class CustomMap {
	private _googleMap: google.maps.Map;
	private _options: google.maps.MapOptions;

	constructor(parentElementId: string, opts?: google.maps.MapOptions) {
		const mapsContainer = document.getElementById(
			parentElementId
		) as HTMLElement;
		this._googleMap = new google.maps.Map(
			mapsContainer,
			opts || {
				zoom: 1,
				center: {
					lat: 0,
					lng: 0,
				},
			}
		);
	}

	addMarker(item: Markerable): void {
		const marker = this._createMarker(item);
		const infoWindow = this._createInfoWindow(item);

		marker.addListener('click', () => {
			infoWindow.open({
				map: this._googleMap,
				anchor: marker,
			});
		});

		// console.log(`Add marker at [lat: ${lat}; lng: ${lng}]`);
	}

	private _createMarker(item: Markerable): google.maps.Marker {
		const {
			location: { lat, lng },
		} = item;
		return new google.maps.Marker({
			map: this._googleMap,
			position: {
				lat,
				lng,
			},
		});
	}

	private _createInfoWindow(item: Markerable): google.maps.InfoWindow {
		return new google.maps.InfoWindow({
			content: item.getInfo(),
		});
	}
}

export default CustomMap;
