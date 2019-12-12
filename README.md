# stylelint-config-moresec

stylelint-config rules for MoresecFE


## Installation

```shell
# npm
npm install @moresec/stylelint-config-moresec --save-dev

# yarn
yarn add @moresec/stylelint-config-moresec -D
```


## Usage

It is recommended to use with VSCode plugin [stylelint-stzhang](https://marketplace.visualstudio.com/items?itemName=stuartzhang.stylelint-stzhang)

```javascript
{
  extends: ["@moresec/moresec"],
  rules: {
    // 这里自定义规则。但不推荐，有异议的地方建议提 PR，这样也能保证自己写配置文件的初衷。
  }
}
```


## Integrating with Prettier

```shell
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
// 3. 例子
// 安装
yarn add stylelint stylelint-prettier stylelint-config-prettier -D
yarn add prettier --dev --exact
// .stylelintrc
{
  "extends": [
    "@moresec/stylelint-config-moresec",
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
