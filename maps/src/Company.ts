import { faker } from '@faker-js/faker';
import { Markerable } from './types';

class Company implements Markerable {
	name: string;
	catchPhrase: string;
	label: string;
	location: {
		lat: number;
		lng: number;
	};

	constructor() {
		this.name = faker.company.name();
		this.catchPhrase = faker.company.catchPhrase();
		this.label = `${this.name} co`;
		this.location = {
			lat: faker.location.latitude(),
			lng: faker.location.longitude(),
		};
	}

	getInfo(): string {
		return `
			<div>
				<h3>${this.name}</h3>
				<h5>${this.catchPhrase}</h5>
			</div>
		`;
	}
}

export default Company;
