# CSS Syntax

CSS follows a simple structure:

```css
selector {
    property: value;
}
```

## Example

```css
p {
    color: blue;
    font-size: 20px;
}
```

This CSS rule selects all `<p>` elements and changes their text color to blue and their font size to 20px.

## Breakdown

- `p` — selector: targets all `<p>` elements
- `color` — property: tells CSS what to change
- `blue` — value: sets the color
- `:` — separates the property from the value
- `;` — ends a declaration
- `{}` — contains the CSS declarations
- `}` — closes the CSS rule

## Important Notes

- Each property must end with a semicolon `;`
- You can include multiple declarations inside one block
- CSS works by applying styles to HTML elements selected by the selector

