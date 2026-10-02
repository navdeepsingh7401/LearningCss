# CSS Width and Height

The `width` and `height` properties are used to control the size of HTML elements.

## 1. Width

```css
.box {
    width: 300px;
}
```

This makes the element 300 pixels wide.

## 2. Height

```css
.box {
    height: 200px;
}
```

This makes the element 200 pixels tall.

## 3. Example

```css
.card {
    width: 400px;
    height: 250px;
    background-color: lightgray;
}
```

## 4. Auto Size

If you do not set a width or height, the browser automatically calculates it.

```css
p {
    width: auto;
    height: auto;
}
```

## 5. Max Width and Min Width

```css
.container {
    max-width: 1200px;
    min-width: 300px;
}
```

This helps create responsive layouts.

## Summary

Use `width` and `height` to define the size of elements.

Common ideas:
- fixed sizes using pixels
- responsive sizing using percentages or viewport units
- max/min limits to control layout behavior
