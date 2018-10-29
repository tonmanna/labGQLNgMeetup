module.exports = {
    env: {
        browser: false,
        es6: true,
        node: true,
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2017,
    },
    extends: ['eslint:recommended', 'standard', 'plugin:prettier/recommended'],
    rules: {
        'new-cap': 'off',
        'no-console': 'off',
        camelcase: 'off',
        'no-return-await': 'off',
        'eqeqeq':'off'
    },
};
