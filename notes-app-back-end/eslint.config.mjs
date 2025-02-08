import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  daStyle,
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
];


