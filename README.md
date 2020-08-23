# Todos

- [ ] Set up PostCSS
- [ ] Better build process
- [ ] Set up package to be installable via `yarn add quipper-ds`

# Usage

For now we're using `yarn link` to develop locally

1. Build CSS file
   ```
   npx tailwindcss build styles.css -o index.css
   ```
2. Run `yarn link`
3. In `quipper-react-components/` run `yarn link "quipper-ds"`