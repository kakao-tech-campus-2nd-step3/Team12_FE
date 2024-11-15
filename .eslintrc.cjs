module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:storybook/recommended"
  ],
  "ignorePatterns": ["*.pnp.*", "*.config.ts", "node_modules", ".yarn", ".eslintrc.cjs", "dist/**", "**/*.stories.tsx"],
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
    'react/require-default-props': 'off',
    'react/no-unknown-property': [
      'error',
      {
        ignore: ['css'],
      }
    ],
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off'
  },
}
