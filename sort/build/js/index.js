"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = __importDefault(require("./LinkedList"));
const NumberCollection_1 = __importDefault(require("./NumberCollection"));
const Str_1 = __importDefault(require("./Str"));
const ll = new LinkedList_1.default();
ll.add(5);
ll.add(10);
ll.add(3);
ll.add(-5);
ll.add(345);
ll.add(-32);
const arr = new NumberCollection_1.default([5, 2, 23, 14, 1, 4, -4]);
const simpleString = new Str_1.default('Xaayb');
simpleString.sort();
console.log(simpleString);
