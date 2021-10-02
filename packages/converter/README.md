# @rothzerg/validator

[![npm (scoped)](https://img.shields.io/npm/v/@rothzerg/validator.svg)](https://www.npmjs.com/package/@rothzerg/validator)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@rothzerg/validator.svg)](https://www.npmjs.com/package/@rothzerg/validator)

Removes all spaces from a string.

## Install

```
$ npm install @rothzerg/validator
```

# Type checks

## isEmail(value:string)

#### Checks if the given value type is arguments.

interfaces: not, all, any

```javascript
const getArguments = function() {
    return arguments;
};
const arguments = getArguments();

validator.arguments(arguments);
=> true

validator.not.arguments({foo: 'bar'});
=> true

validator.all.arguments(arguments, 'bar');
=> false

validator.any.arguments(['foo'], arguments);
=> true

// 'all' and 'any' interfaces can also take array parameter
validator.all.arguments([arguments, 'foo', 'bar']);
=> false
```
