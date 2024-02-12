"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sorter {
    constructor(collection) {
        this._collection = collection;
    }
    get collection() {
        return this._collection;
    }
    sort() {
        for (let i = 0; i < this._collection.length; i++) {
            for (let j = 0; j < this._collection.length - i - 1; j++) {
                if (this._collection.compare(j)) {
                    this._collection.swap(j);
                }
            }
        }
    }
}
exports.default = Sorter;
