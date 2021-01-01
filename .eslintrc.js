module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  extends: ['airbnb-typescript'],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: `./tsconfig.json`,
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  overrides: [
    {
      files: ["src/**/*.{ts,tsx}"],
      rules: {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "react/display-name": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "max-len": ["error", 160, 4, { "ignoreStrings": true }],
        "import/no-named-as-default": 0,
        "no-param-reassign": 0,
        "react/jsx-props-no-spreading": 0,
        "object-curly-newline": ["error", {
            "ObjectPattern": { "multiline": true },
            "ExportDeclaration": { "multiline": true, "minProperties": 6 }
        }],
        "react/prop-types": 0,
        "react/require-default-props": 0,
        "import/prefer-default-export": 0,
      },
    },
  ],
};
