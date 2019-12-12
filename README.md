# stylelint-config-moresec

stylelint-config rules for MoresecFE


## Installation

```shell
# npm
npm install stylelint-config-moresec --save-dev

# yarn
yarn add stylelint-config-moresec --save-dev
```


## Usage

It is recommended to use with VSCode [stylelint plugin](https://marketplace.visualstudio.com/items?itemName=thibaudcolas.stylelint)

```javascript
{
  extends: ["@moresec/moresec"],
  rules: {
    // 这里自定义规则。但不推荐，有异议的地方建议提 PR，这样也能保证自己写配置文件的初衷。
  }
}
```


## Integrating with Prettier

```
// 1. 安装 Prettier
yarn add prettier --dev --exact
yarn add stylelint-prettier stylelint-config-prettier --dev

// 2. 配置 .stylelintrc 相关文件
{
  extends: [
    "@moresec/moresec",
    "stylelint-prettier/recommended"
  ]
}
```


## Refers

- [https://stylelint.io/](https://stylelint.io/)
- [http://stylelint.cn/user-guide/rules/](http://stylelint.cn/user-guide/rules/)


## Environment

> Node.js >= 8

> stylelint >= 12
