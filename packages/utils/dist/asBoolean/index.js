"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asBoolean = void 0;
var truthy = ['true', '1'];
var asBoolean = function (value) {
    if (!value)
        return false;
    return truthy.includes(value.toString().toLowerCase());
};
exports.asBoolean = asBoolean;
