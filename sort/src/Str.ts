import { Sortable } from './Sorter';

class Str implements Sortable {
	collection: string;
	length: number;

	constructor(collection: string) {
		this.collection = collection;
		this.length = collection.length;
	}

	compare(index: number): boolean {
		return (
			this.collection[index].toLowerCase() >
			this.collection[index + 1].toLowerCase()
		);
	}

	swap(index: number): void {
		const arr = this.collection.split('');
		const leftLetter = arr[index];
		arr[index] = arr[index + 1];
		arr[index + 1] = leftLetter;
		this.collection = arr.join('');
	}
}

export default Str;
