// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      // ===== Code Style =====
      // No semicolons
      'semi': ['error', 'never'],

      // Enforce single quotes
      'quotes': ['error', 'single', { avoidEscape: true }],

      // Trailing commas for cleaner diffs
      'comma-dangle': ['error', 'always-multiline'],

      // Consistent spacing
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],

      // ===== Best Practices =====
      // Prefer const/let over var
      'no-var': 'error',
      'prefer-const': 'error',

      // Avoid console in production
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

      // Prevent common errors
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      }],

      // TypeScript specific
      '@typescript-eslint/no-explicit-any': 'warn',

      // ===== Vue Specific =====
      // Component naming
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],

      // HTML formatting
      'vue/html-indent': ['error', 2],
      'vue/html-self-closing': ['error', {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
      }],

      // Multi-word component names (disabled for pages)
      'vue/multi-word-component-names': 'off',

      // Disable v-html warning (use with caution)
      'vue/no-v-html': 'warn',

      // ===== Import/Export =====
      // Enforce arrow functions for callbacks
      'prefer-arrow-callback': 'error',

      // No unnecessary template literals
      'prefer-template': 'error',

      // Use === instead of ==
      'eqeqeq': ['error', 'always', { null: 'ignore' }],

      // Avoid useless constructor
      'no-useless-constructor': 'error',

      // Require or disallow trailing commas
      'no-trailing-spaces': 'error',

      // Disallow multiple empty lines
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],

      // Enforce consistent line breaks
      'eol-last': ['error', 'always'],
    },
  },
)
