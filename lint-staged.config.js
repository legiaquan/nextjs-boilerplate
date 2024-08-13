module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => 'npm run check-types',
  '*.{json,yaml}': [
    'prettier --arrow-parens always --bracket-same-line false --bracket-spacing true --embedded-language-formatting auto --html-whitespace-sensitivity css --single-quote true --tab-width 2 --use-tabs false --write',
  ],
};
