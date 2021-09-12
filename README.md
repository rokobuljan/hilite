# Hilite JS


A lightweight JavaScript class to <mark>highlight</mark> words inside a HTML markup using the [`<mark>` Element tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark)

## Installation

```sh
npm i @rbuljan/hilite
```

## Syntax

```js
new Hilite("selector", {options})
```

## Usage

```js  
// If you use a build tool like Vite, Webpack, etc:
import { Hilite } from "@rbuljan/hilite";

// If you want to import it straight into your JS ES6 module .js file:  
// import { Hilite } from "./node_modules/@rbuljan/hilite/src/index.js";

// Instantiate:
const HL = new Hilite("#area");

// Highlight!
HL.value = "test";
```

HTML sample:

```html
<div id="area">
    Highlight both Test and <span data-test="test">TEST</span>
</div>
```


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
or use any other class name you defined in the Options `className` property.

## TODO

- Add option to switch from single word highlight to multiple words i.e: `(water|ice|juice)`

## Licence

MIT
