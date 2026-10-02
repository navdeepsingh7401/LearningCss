# CSS Basics Practice: Profile Page

Build a styled profile page using the concepts from the CSS Basics lessons. Open `index.html` in a browser as you work, and write your reusable styles in `style.css`.

## Exercise goals

### 1. Understand CSS and write valid rules

- Use CSS to change the appearance of the HTML without changing its content.
- Write rules using the `selector { property: value; }` structure.
- End each declaration with a semicolon and keep related declarations together.
- Add CSS comments to label at least two sections of your stylesheet.

### 2. Practice all three ways to add CSS

- **Inline:** Update the existing `style` attribute on the small “Available for projects” label. Keep this to a single, one-element style.
- **Internal:** Complete the `.notice` rule inside the `<style>` element in the HTML `<head>`.
- **External:** Put the rest of your reusable page styling in `style.css`, which is linked from the HTML file.
- External CSS keeps reusable styling separate from page structure, making it easier to maintain. Avoid inline CSS for every element because it duplicates styles and makes the HTML harder to read and update.

### 3. Select elements with selectors

In `style.css`, use all of these:

- An element selector for `body` or `main`.
- The `.profile-card` class selector.
- The `#page-title` ID selector.
- A child selector, such as `.profile-card > h2`.
- `:nth-child(odd)` or `:nth-child(even)` to style the project list.
- `:first-child`, `:last-child`, and `:nth-of-type(2)` on suitable elements.

The child selector `.profile-card > p` styles only paragraphs that are direct children of the card; it does not match the paragraph inside `.nested-note`. The descendant selector `.profile-card .nested-note p` does match that nested paragraph. Compare these rules to see how `>` restricts matching to direct children.

### 4. Add color and background styles

- Use a named color, a hex color, an `rgb()` color, and an `hsl()` color in different places.
- Give the page a background color and the profile card a different background color.
- The hero background combines CSS gradients, with `no-repeat`, `center`, and `cover` for the main gradient.
- A small decorative gradient pattern uses `repeat-x`.

### 5. Style borders and dimensions

- Give the profile card a border with a width, style, and color; round its corners with `border-radius`.
- Give the avatar placeholder a visible border.
- Set a width and height on the avatar or hero area.
- Give the page content a `max-width` and a sensible `min-width` where appropriate.
- Make the card narrower than its parent using a percentage width.

### 6. Use different CSS units

Use each of these at least once and observe what it is relative to:

- `px` for a small fixed detail such as a border.
- `%` for a width relative to the parent.
- `em` for text or spacing relative to its parent’s font size.
- `rem` for a page-level font size or spacing.
- `vh` for a hero height or minimum page section height.
- `vw` for a responsive heading size or another viewport-relative detail.

## Check your work

- The page is readable on both a narrow and a wide browser window.
- The external stylesheet loads (try temporarily changing the page background to confirm it).
- Each selector in the list above has a visible effect.
- The odd/even project items look different, and the direct-child rule does not affect the nested paragraph.
- Your HTML and CSS remain readable and use comments to identify sections.

Review the completed page in `index.html` and `style.css`, then experiment with the values to see how each rule changes the result.
