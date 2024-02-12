import { faker } from '@faker-js/faker';
import { Markerable } from './types';

class User implements Markerable {
	firstName: string;
	lastName: string;
	fullName: string;
	label: string;
	location: {
		lat: number;
		lng: number;
	};

	constructor() {
		this.firstName = faker.person.firstName();
		this.lastName = faker.person.lastName();
		this.fullName = `${this.lastName} ${this.firstName}`;
		this.label = this.fullName;
		this.location = {
			lat: faker.location.latitude(),
			lng: faker.location.longitude(),
		};
	}

	getInfo(): string {
		return `${this.fullName}`;
	}
}

export default User;
