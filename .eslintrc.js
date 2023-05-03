module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "es6": true,
    },
    "parser": "@babel/eslint-parser",
    "rules": {
        // enable additional rules
        "indent": ["warn", 4],
        "linebreak-style": ["warn", "unix"],
        "quotes": ["warn", "single"],
        "semi": ["warn", "never"],
        "no-empty": "warn",
        "no-cond-assign": ["warn", "always"],

        "spaced-comment": ["warn", "always"],
        "arrow-spacing": ["warn", { "before": true, "after": true }],
        "comma-dangle": ["warn", "always"],
        "comma-spacing": ["warn", { "before": false, "after": true }],
        "key-spacing": ["warn", { "beforeColon": false, "afterColon": true }],
        "keyword-spacing": ["warn", { "before": true, "after": true }],
    }
};