module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "ecmaVersion": 12,
    "sourceType": "module",
    project: "./tsconfig.json"
  },
  plugins: ["react-refresh"],
  rules: {
    "react/function-component-definition": [
      "error",
      {
        namedComponents: ["function-declaration", "arrow-function"],
      },
    ],
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/space-infix-ops": "error",
    "@typescript-eslint/typedef": [
      "error",
      {
        arrowParameter: true,
        parameter: true,
        propertyDeclaration: true,
        objectDestructuring: false,
      },
    ],
  },
}
