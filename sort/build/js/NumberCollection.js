"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NumberCollection {
    constructor(collection) {
        this.collection = collection;
        this.length = this.collection.length;
    }
    compare(j) {
        return this.collection[j] > this.collection[j + 1];
    }
    swap(j) {
        const leftSide = this.collection[j];
        this.collection[j] = this.collection[j + 1];
        this.collection[j + 1] = leftSide;
    }
}
exports.default = NumberCollection;
