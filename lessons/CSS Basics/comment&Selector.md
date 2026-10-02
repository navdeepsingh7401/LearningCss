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

#### Child selector

```css
.container > p {
    color: purple;
}
```

This selects only the direct child `<p>` elements of `.container`. It does not style nested paragraphs inside other elements.

#### Child selector examples

```css
.parent > .child {
    color: red;
}

ul > li {
    list-style: none;
}

.card > h2 {
    font-size: 24px;
}
```

- `.parent > .child` selects only direct children with class `child`.
- `ul > li` selects only direct `<li>` children inside a `<ul>`.
- `.card > h2` selects only the direct `<h2>` child of `.card`.

#### Nth-child selector

```css
li:nth-child(2) {
    color: orange;
}
```

This selects the second child element of its parent. It is very useful when you want to style a specific position in a list or group.

#### Nth-child selector examples

```css
li:nth-child(odd) {
    background: #f0f0f0;
}

li:nth-child(even) {
    background: #e0e7ff;
}

p:nth-child(3) {
    color: blue;
}
```

- `li:nth-child(odd)` selects odd-numbered children.
- `li:nth-child(even)` selects even-numbered children.
- `p:nth-child(3)` selects the third `<p>` child in its parent.

#### Other useful selectors

```css
p:first-child {
    font-weight: bold;
}

p:last-child {
    color: green;
}

p:nth-of-type(2) {
    text-transform: uppercase;
}
```

- `:first-child` selects the first child of its parent.
- `:last-child` selects the last child of its parent.
- `:nth-of-type(2)` selects the second `<p>` element of its type among siblings.

---

## 3. Example HTML

```html
<h1 id="title">Welcome</h1>
<p class="heading">This is a paragraph.</p>
<p>This is another paragraph.</p>

<div class="container">
    <p>Direct child paragraph</p>
    <div>
        <p>Nested paragraph</p>
    </div>
</div>
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

/* Selects only direct child paragraphs inside .container */
.container > p {
    color: purple;
}

/* Direct child selector examples */
.parent > .child {
    color: red;
}

ul > li {
    list-style: none;
}

/* Nth-child selector examples */
li:nth-child(2) {
    color: orange;
}

li:nth-child(odd) {
    background: #f0f0f0;
}

p:first-child {
    font-weight: bold;
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
  - child selector: `.container > p`
  - nth-child selector: `li:nth-child(2)`
  - other useful selectors: `:first-child`, `:last-child`, `:nth-of-type(2)`

Using selectors correctly is the key to styling web pages efficiently.
