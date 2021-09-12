# Hilite JS


A lightweight JavaScript class to <mark>highlight</mark> words inside a HTML markup using the [`<mark>` Element tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark)

## Installation

```sh
npm i hilite
```

## Syntax

```js
new Hilite("selector", {options})
```

## Usage

```js
import {Hilite} from "@rbuljan/hilite";

const HL = new Hilite("#target");
HL.value = "test";
```

```html
<div id="target">Test this <span data-test="test">TEST</span></div>
```

will highlight both "Test" and "TEST".

## Options

| Property  | Type    | Default    | Description                             |
| --------- | ------- | ---------- | --------------------------------------- |
| tag       | String  | `"mark"`   | The highlight Element to wrap text with |
| className | String  | `"Hilite"` | The class to add to the `tag` Element   |
| sensitive | Boolean | `false`    | Match case sensitive                    |

### Custom Options Example:

```js
const HL = new Hilite("#area", {
    tag: "span",
    className: "highlighted",
    sensitive: true,
});

HL.value = "nice";
```

now all "nice" word occurrences inside the `#area` Element will be wrapped into a `<span class="highlighted">`

## Custom style  

The `<mark>` Element will have by default the User Agent Stylesheet applied (light yellow highlight).  
To customize the style ot the highlighted elements use CSS like:

```css
.Hilite {
    color: #000;
    background: gold;
}
```
or any other class you defined via the Options `className` property.

## TODO

- Add option to switch from single word highlight to multiple words i.e: `(water|ice|juice)`

## Licence

MIT
