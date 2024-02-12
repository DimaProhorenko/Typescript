"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = __importDefault(require("./Sorter"));
class Str extends Sorter_1.default {
    constructor(collection) {
        super();
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
