module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parser": "babel-eslint",
  // "extends": "eslint:recommended",
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "legacyDecorators": true,
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "no-console":1,
    "no-unused-vars": 0,
    "plugins": ["react"],
    "plugins": ["transform-object-rest-spread"],
    "linebreak-style": [
      "error",
      "windows"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "indent": [
      1,
      2
    ],
    'no-empty': 1,//禁止出现空代码块，允许 catch 为空代码块
    'react/prop-types': 1,//@off 不强制要求写 propTypes
    'react/no-deprecated': 1,//禁止已废弃的api
    'react/no-unescaped-entities': 1,//禁止在组件的内部存在未转义的 >, ", ' 或 }
 
  }
};