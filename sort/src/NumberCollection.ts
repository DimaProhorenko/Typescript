import Sorter from './Sorter';

class NumberCollection extends Sorter {
	collection: number[];
	length: number;

	constructor(collection: number[]) {
		super();
		this.collection = collection;
		this.length = collection.length;
	}

	compare(j: number): boolean {
		return this.collection[j] > this.collection[j + 1];
	}

	swap(j: number): void {
		const leftSide = this.collection[j];
		this.collection[j] = this.collection[j + 1];
		this.collection[j + 1] = leftSide;
	}
}

export default NumberCollection;
