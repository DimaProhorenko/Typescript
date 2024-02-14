class MyArray<T> {
	collection: T[];

	constructor(collection: T[]) {
		this.collection = collection;
	}

	get(index: number): T {
		if (index < 0 || index > this.collection.length) {
			throw new Error('Index out of bounds');
		}

		return this.collection[index];
	}
}

const strArr = new MyArray<string>(['Hello', 'World']);
const numArr = new MyArray<number>([34, 23, 12]);

// Example of generics with functions

function printAnything<T>(arr: T[]) {
	arr.forEach((item: T, index: number): void => {
		console.log(`Item #${index} => ${item}`);
	});
}
