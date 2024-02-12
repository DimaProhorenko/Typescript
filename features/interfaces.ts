interface Reportable {
	summary(): string;
}

interface Vehicle extends Reportable {
	name: string;
	make: Date;
	broken: boolean;
}

interface Drink extends Reportable {
	name: string;
	color: string;
	carbonated: boolean;
	sugar: number;
}

const reportSummary = (item: Reportable): void => {
	console.log(item.summary());
};

const cola: Drink = {
	name: 'cola',
	color: 'brown',
	carbonated: true,
	sugar: 40,
	summary(): string {
		return `Drink(${this.name}) => name: ${this.name}, color: ${this.color}, carbonated: ${this.carbonated}, sugar: ${this.sugar} `;
	},
};

const oldCivic: Vehicle = {
	name: 'Civic',
	make: new Date('2000/2/24'),
	broken: true,
	summary(): string {
		return `
		  Name: ${this.name}
		  Make: ${this.make}
		  Broken: ${this.broken}
		`;
	},
};

reportSummary(oldCivic);
reportSummary(cola);
