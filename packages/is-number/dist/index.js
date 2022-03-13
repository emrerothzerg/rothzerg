"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isNumber = function (num) {
    var numType = typeof num;
    if (numType === 'number') {
        return num - num === 0;
    }
    if (numType === 'string' && num.trim() !== '') {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
    }
    return false;
};
exports.default = isNumber;
