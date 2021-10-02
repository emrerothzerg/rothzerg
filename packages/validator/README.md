# @rothzerg/validator

[![npm (scoped)](https://img.shields.io/npm/v/@rothzerg/validator.svg)](https://www.npmjs.com/package/@rothzerg/validator)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@rothzerg/validator.svg)](https://www.npmjs.com/package/@rothzerg/validator)

Removes all spaces from a string.

## Install

```
$ npm install @rothzerg/validator
```

# Validators

## isEmail(value:string)

```javascript
import { isEmail } from '@rothzerg/validator'

isEmail('test@test.com')
=> true

isEmail('test')
=> false
```

## isEmpty(value:string)

```javascript
import { isEmpty } from '@rothzerg/validator'

isEmpty('text')
=> false

isEmpty('')
=> true
```

## isNotEmpty(value:string)

```javascript
import { isNotEmpty } from '@rothzerg/validator'

isNotEmpty('text')
=> true

isNotEmpty('')
=> false
```
