# @rothzerg/converter

[![npm (scoped)](https://img.shields.io/npm/v/@rothzerg/converter.svg)](https://www.npmjs.com/package/@rothzerg/converter)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@rothzerg/converter.svg)](https://www.npmjs.com/package/@rothzerg/converter)

## Install

```
$ npm install @rothzerg/converter
```

## kFormatter(value:string|number)

```typescript
import { kFormatter } from '@rothzerg/utils'
```

```typescript

kFormatter('1234');
=> '12.43'

kFormatter('123456');
=> '1.2k'
```

## onlyNumber(value:string)

```typescript
import { onlyNumber } from '@rothzerg/utils'
```

```typescript

onlyNumber('emre12s');
=> '12'

onlyNumber('emre');
=> ''
```
