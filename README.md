# Hilite JS


A lightweight JavaScript class to <mark>highlight</mark> words inside a HTML markup using the [`<mark>` Element tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark)

## Installation

```sh
npm i @rbuljan/hilite
```

## Syntax

```js
new Hilite("selector" , options)
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

| Property    | Type    | Default    | Description                                                                                                                          |
| ----------- | ------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `tag`       | String  | `"mark"`   | The highlight Element to wrap text with                                                                                              |
| `className` | String  | `"Hilite"` | The class to add to the `tag` Element                                                                                                |
| `sensitive` | Boolean | `false`    | Match case sensitive                                                                                                                 |
| `criteria`  | String  | `"any"`    | Characters match criteria <br><br>`"any"` any position  <br> `"start"` starts with  <br> `"end"` ends with  <br> `"full"` full match |

### Options Example:

To customize Hilite, pass an Object `{}` with the desired options as the second argument: 

```js
const HL = new Hilite("#area", {
    tag: "mark",              // Element tag
    className: "highlighted", // CSS class
    sensitive: false,         // false, true
    criteria: "any",          // "any", "start", "end", "full"
});

HL.value = "nice";
```

now all "nice" word occurrences inside the `#area` Element will be wrapped into a `<span class="highlighted">`

To **remove** the highlight elements use:

```js
HL.value = "";
```  

You can also dynamically apply case sensitive and word match criteria like:

```js
HL.sensitive = true;  // automatically highlight with case sensitive
HL.criteria = "full"; // automatically highlight by criteria (full match)
```

***Tip***:  
see the demo in `example.html` (and `example.js`) for a sample use-case.

## Styles 

The `<mark>` Element will have by default the User Agent Stylesheet applied (light yellow highlight).  
To customize the styles ot the highlighted elements use CSS like:

```css
.Hilite {
    color: #000;
    background: gold;
}
```
or use any other class name you defined in the Options `className` property.

## TODO

- Ignore diacritics
- Add option to switch from single word highlight to multiple words, i.e: `/(water|ice|juice)gi/`

## Licence

MIT
