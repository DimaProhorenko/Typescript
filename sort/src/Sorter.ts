export interface Sortable {
	collection: number[];
	length: number;
	compare: (j: number) => boolean;
	swap: (j: number) => void;
}

class Sorter {
	private _collection: Sortable;

	constructor(collection: Sortable) {
		this._collection = collection;
	}

	getCollection(): Sortable {
		return this._collection;
	}

	sort(): void {
		for (let i = 0; i < this._collection.length; i++) {
			for (let j = 0; j < this._collection.length - i; j++) {
				if (this._collection.compare(j)) {
					this._collection.swap(j);
				}
			}
		}
	}
}

export default Sorter;
