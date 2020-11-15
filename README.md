# Quipper Design System

## Installation

The Quipper design system is built on [Tailwind CSS](https://tailwindcss.com/). To take full advantage of its features, you need to set up Tailwind with your project's build system. For that, you may follow their [installation guide](https://tailwindcss.com/docs/installation).

Once you have it set up, install the Quipper Design System:

```bash
npm install --save-dev quipper-ds
```

Essentially `quipper-ds` is a packaged Tailwind configuration that you will need to import into your project's own Tailwind config file:

```js
// tailwind.config.js

var {
  theme: quipperDsTheme,
  plugins: quipperDsPlugins,
} = require("quipper-ds");

module.exports = {
  purge: [],
  theme: quipperDsTheme,
  variants: {},
  plugins: quipperDsPlugins,
};
```

That's it! You should now be able to use Quipper design system tokens in your app via Tailwind's utility classes.

### No-build Set-up

> Do this only if you want to test out the design system before fully integrating it into your project. This method is **not production-ready and will slow your app's load time**.

If you need to get started right away, you can also just link to the design system stylesheet directly in the `<head>` of your html:

```html
<link href="https://unpkg.com/quipper-ds/index.css" rel="stylesheet" />
```

## Fonts

Webfont assets are deliberately omitted from this project to allow for flexibility in importing only the fonts that are necessary for your app. You will need to load them yourself for type styles to render correctly.

## Style Guide

Once you're set up, you can use [Tailwind Config Viewer](https://github.com/rogden/tailwind-config-viewer) to find out what classes are available to you to style your app. Just run the following from your project folder and a cheatsheet corresponding to your Tailwind config file will open up in your browser automatically:

```bash
npx tailwind-config-viewer -o
```
