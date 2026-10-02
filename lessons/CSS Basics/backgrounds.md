# CSS Backgrounds

Backgrounds are used to decorate the area behind an element.

## 1. Background Color

```css
body {
    background-color: lightblue;
}
```

This changes the background color of the whole page.

## 2. Background Image

```css
.banner {
    background-image: url('nature.jpg');
}
```

This adds an image as the background.

## 3. Background Repeat

```css
.banner {
    background-image: url('pattern.png');
    background-repeat: repeat-x;
}
```

Possible values:
- `repeat`
- `no-repeat`
- `repeat-x`
- `repeat-y`

## 4. Background Position

```css
.banner {
    background-image: url('flower.jpg');
    background-position: center;
}
```

This controls where the image appears.

## 5. Background Size

```css
.hero {
    background-image: url('cover.jpg');
    background-size: cover;
}
```

`cover` makes the image fit nicely without stretching.

## 6. Shorthand Property

```css
section {
    background: #f0f0f0 url('bg.jpg') no-repeat center/cover;
}
```

This combines several background values in one line.

## Summary

CSS backgrounds can include:
- colors
- images
- repeating patterns
- positioning
- sizing

They help make a page look more visually appealing.
