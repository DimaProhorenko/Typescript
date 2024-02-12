"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = __importDefault(require("./Sorter"));
class SimpleNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.default {
    constructor() {
        super(...arguments);
        this.head = null;
        this.length = 0;
    }
    add(data) {
        const nextNode = new SimpleNode(data);
        if (!this.head) {
            this.head = nextNode;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = nextNode;
        this.length++;
    }
    at(index) {
        if (!this.head || this.length < index + 1) {
            throw new Error('Index out of bounds');
        }
        let node = this.head;
        let counter = 0;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    }
    compare(index) {
        if (!this.head || index + 1 > this.length) {
            throw new Error('List is empty');
        }
        const leftNode = this.at(index);
        const rightNode = this.at(index + 1);
        if (!leftNode || !rightNode) {
            return false;
        }
        return leftNode.data > rightNode.data;
    }
    swap(index) {
        const leftNode = this.at(index);
        const rightNode = this.at(index + 1);
        if (leftNode && rightNode) {
            const leftNodeData = leftNode.data;
            leftNode.data = rightNode.data;
            rightNode.data = leftNodeData;
        }
    }
    print() {
        if (!this.head) {
            console.log('[]');
            return;
        }
        let tail = this.head;
        console.log('[');
        for (let i = 0; i < this.length; i++) {
            if (tail) {
                console.log(tail === null || tail === void 0 ? void 0 : tail.data);
                tail = (tail === null || tail === void 0 ? void 0 : tail.next) || null;
            }
            else {
                break;
            }
        }
        console.log(']');
    }
}
exports.default = LinkedList;
