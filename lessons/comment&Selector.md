# CSS Comments and Selectors

CSS is used to style HTML elements, and it includes two very important concepts: comments and selectors.

---

## 1. CSS Comments

Comments are notes written in the CSS file that are ignored by the browser. They are useful for explaining code and organizing styles.

```css
/* This is a CSS comment */

p {
    color: blue;
}
```

### Why use comments?
- to explain what a section does
- to make code easier to read
- to temporarily disable code during testing

### Example

```css
/* This styles all paragraph text */

p {
    color: black;
    font-size: 18px;
}
```

> CSS comments start with `/*` and end with `*/`.

---

## 2. CSS Selectors

A selector tells CSS which HTML element or elements to style.

### Basic selector examples

#### Element selector

```css
p {
    color: red;
}
```

This selects all `<p>` elements.

#### Class selector

```css
.heading {
    color: green;
}
```

This selects all elements with the class `heading`.

#### ID selector

```css
#title {
    font-size: 30px;
}
```

This selects the element with the ID `title`.

---

## 3. Example HTML

```html
<h1 id="title">Welcome</h1>
<p class="heading">This is a paragraph.</p>
<p>This is another paragraph.</p>
```

## 4. Example CSS

```css
/* Selects the element with ID title */
#title {
    color: blue;
}

/* Selects all elements with class heading */
.heading {
    color: green;
}

/* Selects all paragraph elements */
p {
    font-size: 18px;
}
```

---

## Summary

- Comments help explain code and are ignored by the browser.
- Selectors choose which elements are styled.
- The most common selectors are:
  - element selector: `p`
  - class selector: `.heading`
  - ID selector: `#title`

Using selectors correctly is the key to styling web pages efficiently.
