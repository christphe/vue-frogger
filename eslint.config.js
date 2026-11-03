import vue from 'eslint-plugin-vue';
import ts from 'typescript-eslint';
export default [
 ...vue.configs['flat/essential'],
 { files: ['src/**/*.{ts,vue}'], languageOptions: { parserOptions: { parser: ts.parser } }, rules: { 'vue/multi-word-component-names': 'off' } },
 { files: ['src/**/*.ts'], languageOptions: { parser: ts.parser } },
];
