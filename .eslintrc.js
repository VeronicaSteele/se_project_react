module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true,
  },
    "extends": ["eslint:recommended", "airbnb-base", "prettier"],
    "overrides": [],
    "parserOptions": {
     "ecmaVersion": "latest",
    },
    "rules": {
      "no-console": "off",
     "no-underscore-dangle": ["error", { "allow": ["_id"]}],
    },
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
}
