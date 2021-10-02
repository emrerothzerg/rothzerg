"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotEmpty = exports.isEmpty = void 0;
var isEmpty = function (value) {
    if (!value)
        return true;
    return !(value.toString().length > 0);
};
exports.isEmpty = isEmpty;
var isNotEmpty = function (value) {
    return !(0, exports.isEmpty)(value);
};
exports.isNotEmpty = isNotEmpty;
