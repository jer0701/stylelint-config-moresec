# stylelint-config-moresec
stylelint-config rules for MoresecFE

包含 stylelint stylelint-webpack-plugin


## Installation

```
npm

npm install stylelint-config-moresec --save-dev

yarn

yarn add stylelint-config-moresec --save-dev
```

## Usage

本地安装配置:
1、在项目根目录新建 .stylelintrc.js 文件
```
module.exports = {
 processors: [],
 plugins: [],
 extends: ["stylelint-config-moresec"],
 rules: {
  // 这里自定义规则
  // 可参考官方：https://stylelint.docschina.org/user-guide/rules/

 }
}
```
2、webpack配置

webpack.dev.conf.js
```
const StyleLintPlugin = require('stylelint-webpack-plugin')

plugins中添加

new StyleLintPlugin({
  context: 'src',
  configFile: path.resolve(__dirname,'../.stylelintrc.js'),
	// 正则匹配想要lint监测的文件
	files: ['src/**/**/**/*.less', 'src/assets/css/*.l?(e|c)ss'],
  fix: true
}),
```

vue-cli3
```
#需添加新插件
npm install  @ascendancyy/vue-cli-plugin-stylelint --save-dev
```

在vue.config.js配置
```
pluginOptions: {
  lintStyleOnBuild: true, // 添加了插件(@ascendancyy/vue-cli-plugin-stylelint), 所以需要配置
  stylelint: {
    fix: true, // boolean (default: true)
    files: ['src/**/*.vue', 'src/assets/styles/*.l?(e|c)ss'] // string | [string] (default: ['src/**/*.{vue,htm,html,css,sss,less,scss}'])
    // formatter: () => { } // function (default: require('stylelint-codeframe-formatter'))
    // etc...
  }
}
```

忽略检查文件 .stylelintignore
```
根据自己项目设置忽略检测文件, 比如

src/assets/css/*.css
```

### Extending the config

在.stylelintrc.js文件，重新配置规则`rules`，将覆盖和添加原有规则：

```json
{
  "extends": "stylelint-config-moresec",
  "rules": {
    "at-rule-no-unknown": [ true, {
      "ignoreAtRules": [
        "extends",
        "ignores"
      ]
    }],
    "indentation": "tab",
    "number-leading-zero": null,
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```
vscode settings.json配置
```
"eslint.validate": [
  "javascript",
  "javascriptreact",
  "html",
  {
      "language": "vue",
      "autoFix": true
  },
  {
      "language": "typescript",
      "autoFix": true
  },
  {
      "language": "typescriptreact",
      "autoFix": true
  }
],
"vetur.validation.template": false, // 如果使用Vetur
```

运行
```
stylelint +文件名（在当前项目所在位置的相对路径名）
stylelint src/**/**/**/*.less
自动修复
stylelint --fix +文件名（在当前项目所在位置的相对路径名）
stylelint --fix src/**/**/**/*.less
```
#### Suggested additions

`stylelint-config-moresec`, 你可以扩展它来创建一个定制的和更严格的配置:

- rules: https://github.com/stylelint/stylelint/tree/master/lib/rules


## [License](LICENSE)