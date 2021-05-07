module.exports = {
    "env": {
        "node": true,
        "es2021": true,
        mocha: true,
    },
    "extends": [
        "standard",
        "plugin:prettier/recommended",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        "no-unused-vars": ["off"],
        "no-unused-expressions": ["off"],
        "no-new": ["off"],
        camelcase: ["off"]
    }
};
