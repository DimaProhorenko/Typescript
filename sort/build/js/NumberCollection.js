"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = __importDefault(require("./Sorter"));
class NumberCollection extends Sorter_1.default {
    constructor(collection) {
        super();
        this.collection = collection;
        this.length = collection.length;
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
