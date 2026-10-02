# Inline, Internal, and External CSS

CSS can be added to an HTML page in three main ways: inline, internal, and external.

## 1. Inline CSS

Inline CSS is written directly inside an HTML tag using the `style` attribute.

```html
<p style="color: blue; font-size: 20px;">Hello World</p>
```

### Use when:
- you want to style only one element
- you are testing a quick change

### Advantages:
- easy to apply
- useful for small changes

### Disadvantages:
- not reusable
- makes HTML messy

---

## 2. Internal CSS

Internal CSS is written inside the `<style>` tag in the `<head>` section of the HTML file.

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        p {
            color: green;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <p>This is a paragraph</p>
</body>
</html>
```

### Use when:
- a webpage needs its own styling
- the project is small

### Advantages:
- keeps styles in one file
- easier to manage than inline CSS

### Disadvantages:
- only works for that page
- not reusable across multiple pages

---

## 3. External CSS

External CSS is written in a separate `.css` file and linked to the HTML document using the `<link>` tag.

### Example HTML

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Hello</h1>
</body>
</html>
```

### Example CSS file (`style.css`)

```css
h1 {
    color: red;
    font-size: 40px;
}
```

### Use when:
- you are building larger websites
- you want to reuse the same styles across many pages

### Advantages:
- clean and organized
- easy to maintain
- reusable for many pages

### Disadvantages:
- requires an additional file
- needs a proper link in HTML

---

## Comparison

| Type | Where it is written | Best for | Reusability |
|------|---------------------|----------|-------------|
| Inline | Inside HTML tag | One element | Low |
| Internal | Inside the HTML file | One page | Medium |
| External | Separate CSS file | Many pages | High |

---

## Summary

- Inline CSS is best for quick single-element styling.
- Internal CSS is good for styling one webpage.
- External CSS is the best method for modern web development because it is clean, reusable, and easier to maintain.

> In most real projects, external CSS is the recommended approach.
