"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmail = void 0;
/* eslint-disable no-useless-escape */
var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
var isEmail = function (email) {
    if (!email)
        return false;
    var emailParts = email.split('@');
    if (emailParts.length !== 2)
        return false;
    var account = emailParts[0];
    var address = emailParts[1];
    if (account.length > 64)
        return false;
    if (address.length > 255)
        return false;
    var domainParts = address.split('.');
    if (domainParts.some(function (part) { return part.length > 63; }))
        return false;
    if (!tester.test(email))
        return false;
    return true;
};
exports.isEmail = isEmail;
