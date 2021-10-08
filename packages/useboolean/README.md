# @rothzerg/useboolean

[![npm (scoped)](https://img.shields.io/npm/v/@rothzerg/useboolean.svg)](https://www.npmjs.com/package/@rothzerg/useboolean)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@rothzerg/useboolean.svg)](https://www.npmjs.com/package/@rothzerg/useboolean)

# `useBoolean`

This is a simple hook to manage boolean state, useful for doing stuff like managing checkbox state, showing modals etc.

## Installation

`npm i @rothzerg/useboolean`

or

`yarn add @rothzerg/useboolean`

## Usage

```jsx
import { useBoolean } from "@rothzerg/useboolean";

const YourComponent = () => {
  const [value, setValue] = useBoolean();

  return (
    <div>
      {value && <p>Toggle me</p>}
      <button onClick={setValue.toggle}>Toggle</button>
      <button onClick={setValue.true}>Show</button>
      <button onClick={setValue.false}>Hide</button>
      <button onClick={() => setValue.set(true)}>Show</button>
      <button onClick={() => setValue.set(false)}>Hide</button>
    </div>
  );
};
```
