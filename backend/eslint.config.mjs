export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'drizzle/**', 'src/db/canonicalData.json']
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'off',
      'no-undef': 'off'
    }
  }
];
