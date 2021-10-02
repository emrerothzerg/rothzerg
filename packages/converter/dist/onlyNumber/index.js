"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onlyNumbers = void 0;
var onlyNumbers = function (value) {
    return value.replace(/[^\d+]/g, '');
};
exports.onlyNumbers = onlyNumbers;
