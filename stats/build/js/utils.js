"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString, separator = '/') => {
    const [day, month, year] = dateString
        .split(separator)
        .map((item) => +item);
    return new Date(year, month - 1, day);
};
exports.dateStringToDate = dateStringToDate;
