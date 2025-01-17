"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j)) {
                    this.swap(j);
                }
            }
        }
    }
}
exports.default = Sorter;
