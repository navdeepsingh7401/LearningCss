# CSS Units

CSS units are used to define sizes such as width, height, font-size, spacing, and more.

## 1. Pixels (`px`)

Pixels are fixed-size units.

```css
p {
    font-size: 16px;
}
```

- `px` is very common
- it does not change based on screen size

## 2. Percent (`%`)

Percent is relative to the parent element.

```css
.container {
    width: 80%;
}
```

If the parent is 1000px wide, 80% means 800px.

## 3. `em`

`em` is relative to the font size of the parent element.

```css
p {
    font-size: 1.2em;
}
```

If the parent font size is 16px, then `1.2em` equals 19.2px.

## 4. `rem`

`rem` is relative to the root font size.

```css
html {
    font-size: 16px;
}

h1 {
    font-size: 2rem;
}
```

`2rem` means 32px if the root font size is 16px.

## 5. `vh` and `vw`

These are viewport units.

- `vh` = viewport height
- `vw` = viewport width

```css
.hero {
    height: 100vh;
    width: 100vw;
}
```

This makes the element fill the full screen height and width.

## Quick Comparison

| Unit | Meaning | Relative to |
|------|---------|-------------|
| `px` | pixels | screen pixels |
| `%` | percent | parent element |
| `em` | element size | parent font size |
| `rem` | root em | root font size |
| `vh` | viewport height | browser height |
| `vw` | viewport width | browser width |

## Summary

CSS units help control spacing and sizing in flexible ways.

- `px` = fixed
- `%` = relative to parent
- `em` = relative to parent text size
- `rem` = relative to root text size
- `vh` and `vw` = relative to browser viewport

Using the right unit makes layouts more responsive and easier to manage.
