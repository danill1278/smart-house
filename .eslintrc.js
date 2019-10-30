module.exports = {
    "extends": [
      "eslint:recommended",
      "plugin:prettier/recommended"
    ],
    "env": {
      "es6": true,
      "node": true
    },
    "parserOptions": {
      "max-len": {
        "tabWidth": 4,
        "code": 80
      },
      "new-cap": {
        "newIsCap": true
      },
      "ecmaVersion": 8,
      "arrow-body-style": ["error", "as-needed"],
      "arrow-parens": ["error", "as-needed"],
      "arrow-spacing": ["error", { "before": true, "after": true }],
      "quotes": ["error", "single"],
      "no-shadow": ["error"],
      "no-shadow-restricted-names": ["error"],
      "no-unused-vars": ["error"],
      "no-use-before-define": ["error"],
      "no-this-before-super": ["error"],
      "no-useless-constructor": ["error"],
      "no-var": ["error"],
    }
  };
