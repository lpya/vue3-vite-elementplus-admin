module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/typescript/recommended', '@vue/prettier'],
  // extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended', 'prettier', '@vue/prettier', '@vue/prettier/@typescript-eslint'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2017
  },
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/camelcase': 'error',
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-inferrable-types': 'off',
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ],
        alphabetical: false
      }
    ], //属性名顺序
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ], //右括号换行
    'vue/v-on-event-hyphenation': [
      'error',
      'always',
      {
        autofix: true,
        ignore: []
      }
    ] //事件名横线隔开
  },
  overrides: [
    {
      files: ['**/__tests__ /*.{j,t}s?(x)', '**/tests/unit /**/*.spec.{j,t}s?(x)'],
      env: {
        mocha: true
      }
    }
  ],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    withDefaults: 'readonly',
    defineExpose: 'readonly'
  }
}
