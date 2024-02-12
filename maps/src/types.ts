export interface Markerable {
	label: string;
	location: {
		lat: number;
		lng: number;
	};
	getInfo(): string;
}
