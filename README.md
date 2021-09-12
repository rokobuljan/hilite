# Hilite JS


A lightweight JavaScript class to <mark>highlight</mark> words inside a HTML markup using the [`<mark>` Element tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark)

## Installation

```sh
npm i hilite
```

## Usage

```js
import Hilite from "hilite";
```

## Options

| Property    | Type    | Default    | Description                             |
| ----------- | ------- | ---------- | --------------------------------------- |
| tag         | String  | `"mark"`   | The highlight Element to wrap text with |
| className   | String  | `"Hilite"` | The class to add to the `tag` Element   |
| insensitive | Boolean | `true`     | Match case insensitie                   |

### Options Example:

```js
const HL = new Hilite("#area", {
    tag: "span",
    className: "underline"
});

HL.value = "nice";
```

now all "nice" word occurrences inside the `#area` Element will be wrapped into a `<span class="underline">`

## TODO

- Add option to switch from single word highlight to multiple words i.e: `(water|ice|juice)`

## Licence

MIT
