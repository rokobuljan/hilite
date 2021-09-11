# Highlight


A simple JavaScript class to <mark>highlight</mark> a "search string" inside a HTML markup using the [`<mark>` Element tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark)

## Use

```js
import Highlight from ""
```

## Options

| Property  | Type   | Default       | Description                             |
| --------- | ------ | ------------- | --------------------------------------- |
| tag       | String | `"mark"`      | The highlight Element to wrap text with |
| className | String | `"highlight"` | The class to add to the `tag` Element   |

### Options Example:

```js
const HL = new Highlight("#area", {
    tag: "span",
    className: "underline"
});

HL.value = "nice";
```

now all "nice" word occurrences inside the `#area` Element will be wrapped into a `<span class="underline">`

## TODO

- Add option to treat search query as case sensitive
- Add option to switch from single word highlight to multiple words i.e: `(water|ice|juice)`
- Add options to customize tag and className
- Add options to style the highlight (background, color)