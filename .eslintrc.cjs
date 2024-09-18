module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "airbnb", "airbnb/hooks", "airbnb-typescript"
  ],
  "ignorePatterns": ["*.pnp.*", "*.config.ts", "node_modules", ".yarn"],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.app.json"
  },
  "plugins": [
    "@typescript-eslint",
    "react"
  ],
  "rules": {
    "react/react-in-jsx-scope": 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
  }
}
