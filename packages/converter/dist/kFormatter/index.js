"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kFormatter = void 0;
var kFormatter = function (numberInCents, decimals, dec_point, thousands_sep) {
    if (decimals === void 0) { decimals = 2; }
    if (dec_point === void 0) { dec_point = '.'; }
    if (thousands_sep === void 0) { thousands_sep = ','; }
    if (!numberInCents)
        return '0';
    var numberInDollars = Number(numberInCents) / 100;
    if (numberInDollars > 1000)
        return (Math.sign(numberInDollars) * (Math.abs(numberInDollars) / 1000)).toFixed(1) + "k";
    var str = numberInDollars.toFixed(decimals).toString().split('.');
    var parts = [];
    for (var i = str[0].length; i > 0; i -= 3)
        parts.unshift(str[0].substring(Math.max(0, i - 3), i));
    str[0] = parts.join(thousands_sep);
    return str.join(dec_point);
};
exports.kFormatter = kFormatter;
