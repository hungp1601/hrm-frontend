module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    parser: "babel-eslint",
  },
  extends: [
    "@nuxtjs",
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
  ],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    "no-console": 0,
    "vue/require-default-prop": 0,
    "vue/no-unused-vars": 0,
    "vue/no-use-v-if-with-v-for": 0,
    "vue/no-v-html": 0,
    "no-unused-vars": 1,
    "standard/no-callback-literal": 0,
    "prefer-const": 0,
    "vue/require-prop-types": 0,
    eqeqeq: 0,
    camelcase: 0,
  },
};
