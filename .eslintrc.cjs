module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "@feature-sliced",
    "plugin:storybook/recommended"
  ],
  "ignorePatterns": ["*.pnp.*", "*.config.ts", "node_modules", ".yarn", ".eslintrc.cjs"],
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
  "settings": {
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true
      }
    },
  },
  "rules": {
    "react/react-in-jsx-scope": 'off',
    "react/require-default-props": "off",
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
    'import/no-internal-modules': [
      'error',
      {
        forbid: ["@*/**/*"],
      },
    ],
  }
}
