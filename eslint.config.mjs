import {createConfigForNuxt} from '@nuxt/eslint-config/flat';

export default createConfigForNuxt({
  features: {
    stylistic: false
  }
}).overrideRules({
  'vue/no-v-html': 'off', // TODO sanitize
  'vue/multi-word-component-names': 'off',
  '@typescript-eslint/no-explicit-any': 'off', // TODO
  'vue/html-self-closing': [
    'error',
    {
      html: {
        void: 'always',
        normal: 'always',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }
  ]
});