# CSS Borders

A border is a line around an element.

## 1. Border Properties

You can control the border width, style, and color.

```css
.box {
    border: 2px solid red;
}
```

This means:
- `2px` = width
- `solid` = style
- `red` = color

## 2. Border Width

```css
.box {
    border-width: 3px;
}
```

## 3. Border Style

Common styles:
- `solid`
- `dashed`
- `dotted`
- `double`

```css
.box {
    border-style: dashed;
}
```

## 4. Border Color

```css
.box {
    border-color: blue;
}
```

## 5. Border Radius

This makes corners rounded.

```css
.button {
    border: 2px solid black;
    border-radius: 10px;
}
```

## Example

```css
.card {
    border: 2px solid #333;
    border-radius: 12px;
    padding: 20px;
}
```

## Summary

Borders help create boxes, sections, and visual separation in a layout.

Common border values:
- width
- style
- color
- radius
