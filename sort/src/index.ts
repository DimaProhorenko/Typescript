import NumberCollection from './NumberCollection';
import Sorter from './Sorter';
// class Sorter {
// 	private _collection: number[];

// 	constructor(collection: number[]) {
// 		this._collection = collection;
// 	}

// 	sort(): void {
// 		const { length } = this._collection;

// 		for (let i = 0; i < length; i++) {
// 			for (let j = i + 1; j < length - i; j++) {
// 				if (this._collection[i] > this._collection[j]) {
// 					const temp = this._collection[i];
// 					this._collection[i] = this._collection[j];
// 					this._collection[j] = temp;
// 				}

// 				if (typeof this._collection === 'string') {
// 				}
// 			}
// 		}
// 	}

// 	getCollection(): number[] {
// 		return this._collection;
// 	}
// }

const arr = new NumberCollection([5, 2, 23, 14, 1, 4, -4]);
const sorter = new Sorter(arr);

sorter.sort();

console.log(sorter.getCollection());
