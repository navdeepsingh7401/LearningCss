# Ping Coming Soon Page

A responsive coming-soon landing page based on the [Frontend Mentor Ping challenge](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). It presents the Ping brand, a launch announcement, an email subscription form, a dashboard preview, and social links.

## Result

![Rendered Ping coming soon page](./images/result.png)

## Run locally

Open `index.html` directly in a browser, or serve this folder with any static web server. The Libre Franklin font is loaded from Google Fonts, so the custom font requires an internet connection; a sans-serif fallback is included.

## Code structure

### `index.html`

The HTML contains the page structure and content:

1. **Document head** — sets the page title, responsive viewport, description, favicon, Google Font, and stylesheet.
2. **Announcement (`main.announcement`)** — holds the Ping logo, launch heading, subscription prompt, email form, and dashboard illustration.
3. **Subscription form (`form.subscribe-form`)** — contains a screen-reader-only label, email input, and submit button. The `required` and `type="email"` attributes enable the browser's built-in validation.
4. **Footer (`footer.site-footer`)** — contains accessible social links using the local Facebook, Twitter, and Instagram SVG files, plus the copyright line.

### `style.css`

The stylesheet is organized around the page's visual design:

- CSS custom properties define the challenge's blue, pale blue, gray, and dark-blue palette.
- Base styles set typography, box sizing, and page spacing.
- Flexbox centers the page content and lays out the desktop subscription form.
- The mobile media query stacks the form controls and adjusts spacing and type sizes for narrow screens.
- Hover and keyboard-focus styles give the button and social links visible interactive states.
- A reduced-motion media query limits transitions for visitors who prefer less motion.

### Project files

```text
ping coming soon page/
├── index.html
├── style.css
├── README.md
├── README-template.md
├── style-guide.md
├── preview.jpg
├── design/
│   ├── desktop-design.jpg
│   ├── desktop-hover-error-states.jpg
│   ├── mobile-design.jpg
│   └── mobile-error-state.jpg
└── images/
    ├── logo.svg
    ├── illustration-dashboard.png
    ├── favicon-32x32.png
    ├── facebook-f-brands-solid-full.svg
    ├── square-twitter-brands-solid-full.svg
    ├── instagram-brands-solid-full.svg
    └── result.png
```

The `design/` folder contains the supplied visual references. The `images/` folder contains the page artwork, social icons, favicon, and the rendered result screenshot.

## Form behavior

The form checks that an email address is present and formatted like an email address using native browser validation. It is a front-end demo: it does not send or store subscriptions, and the custom error messages shown in the original challenge design are not implemented.

## Built with

- Semantic HTML
- CSS custom properties
- Flexbox
- Responsive media queries
- Accessible labels and focus states
