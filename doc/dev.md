## Development
- Use functional components
- Make sure to run `npm format` before making a commit or a PR, so as to keep styling consistent in the codebase.
- If using Vscode, install the tailwind extension for autocomplete
- For any font face or repeating colors, add them to the `tailwind.config.js` file (one has already been added as an example) and you will be able to refer to them directly in the className like `bg-nameYouGaveIt`
- Use `.jsx` extension for react files
- For adding custom classes (when really required), do it the tailwind way and add it to the `index.css` file instead of making `.css` files and importing them. Read more [here](https://tailwindcss.com/docs/adding-new-utilities).
