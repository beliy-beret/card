module.exports = {
  extends: ["@it-incubator/eslint-config", "plugin:storybook/recommended"],
  plugins: ["prettier"],
  rules: {
    'no-console': ['warn', {
      allow: ['warn', 'error']
    }],
    "prettier/prettier": "error"
  }
};