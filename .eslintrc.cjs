module.exports = {
  extends: [
    'semistandard'
  ],
  "rules":{
    "space-before-function-paren": ["error", "never"],
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "always",
      "imports": "never",
      "exports": "never",
      "functions": "never"
  }]
  }
}
