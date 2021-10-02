# @rothzerg/utils

[![npm (scoped)](https://img.shields.io/npm/v/@rothzerg/utils.svg)](https://www.npmjs.com/package/@rothzerg/utils)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@rothzerg/utils.svg)](https://www.npmjs.com/package/@rothzerg/utils)

## Install

```
$ npm install @rothzerg/utils
```

# Utils

## asBoolean(value:string)

```typescript
import { asBoolean } from '@rothzerg/utils'
```

```typescript

asBoolean('1');
=> true

asBoolean('true');
=> false

asBoolean('1234');
=> false

asBoolean('false');
=> false

asBoolean('0');
=> false
```

## startsWith(string:string, value:string)

```typescript
import { asBoolean } from '@rothzerg/utils'
```

```typescript

startsWith('emre rothzerg', 'emre');
=> true

startsWith('emre rothzerg', 'rotherg');
=> false

```
