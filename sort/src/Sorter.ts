export interface Sortable {
	length: number;
	compare: (j: number) => boolean;
	swap: (j: number) => void;
}

class Sorter {
	private _collection: Sortable;

	constructor(collection: Sortable) {
		this._collection = collection;
	}

	get collection(): Sortable {
		return this._collection;
	}

	sort(): void {
		for (let i = 0; i < this._collection.length; i++) {
			for (let j = 0; j < this._collection.length - i - 1; j++) {
				if (this._collection.compare(j)) {
					this._collection.swap(j);
				}
			}
		}
	}
}

export default Sorter;
