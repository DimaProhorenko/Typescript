"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Str {
    constructor(collection) {
        this.collection = collection;
        this.length = collection.length;
    }
    compare(index) {
        return (this.collection[index].toLowerCase() >
            this.collection[index + 1].toLowerCase());
    }
    swap(index) {
        const arr = this.collection.split('');
        const leftLetter = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = leftLetter;
        this.collection = arr.join('');
    }
}
exports.default = Str;
