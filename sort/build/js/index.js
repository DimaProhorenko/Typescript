"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NumberCollection_1 = __importDefault(require("./NumberCollection"));
const Sorter_1 = __importDefault(require("./Sorter"));
const Str_1 = __importDefault(require("./Str"));
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
const arr = new NumberCollection_1.default([5, 2, 23, 14, 1, 4, -4]);
const simpleString = new Str_1.default('Xaayb');
const sorter = new Sorter_1.default(simpleString);
sorter.sort();
console.log(sorter.collection);
