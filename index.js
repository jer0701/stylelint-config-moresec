"use strict";

module.exports = {
  rules: {
    // 不允许at-rules不明
    "at-rule-no-unknown": true,
    // 要求或禁止使用空行 always-有必须有空行 never-之前不加空行
    // except 辅助选项
    "at-rule-empty-line-before": [
      "always",
      {
        except: [
          "blockless-after-same-name-blockless", // 同名规则可不加空行
          "first-nested" // 第一个子节点不加空行
        ],
        ignore: ["after-comment"] // 忽略注释后的规则
      }
    ],
    // 指定大小写
    "at-rule-name-case": "lower",
    // 名称后需要空格 -单行声明块在规则的名称后一个空格
    "at-rule-name-space-after": "always-single-line",
    // 分号后需要换行符
    "at-rule-semicolon-newline-after": "always",
    // 块关闭括号（右括号）禁止使用空行
    "block-closing-brace-empty-line-before": "never",
    // 右括号之后换行
    "block-closing-brace-newline-after": "always",
    // 多行块右括号之前换行
    "block-closing-brace-newline-before": "always-multi-line",
    // 单行块右括号前一个空格
    "block-closing-brace-space-before": "always-single-line",
    // 多行，块开放括号（左括号）之后换行
    "block-opening-brace-newline-after": "always-multi-line",
    // 单行块开括号后空格
    "block-opening-brace-space-after": "always-single-line",
    // 开括号前一个空格
    "block-opening-brace-space-before": "always",
    // 不允许空块
    "block-no-empty": true,
    // 注释之前空行
    "comment-empty-line-before": [
      "always",
      {
        except: ["first-nested"], // 父节点第一个注释不空行
        ignore: ["stylelint-commands"] // stylelint的注释
      }
    ],
    // 不允许空的评论
    "comment-no-empty": true,
    // 注释标记的内部使用空格
    "comment-whitespace-inside": "always",
    // 自定义属性前使用空行
    "custom-property-empty-line-before": [
      "always",
      {
        except: [
          "after-custom-property", // 自定义属性之后的自定义属性
          "first-nested"
        ],
        ignore: [
          "after-comment", // 忽略注释后的自定义属性
          "inside-single-line-block" // 忽略单行块内的自定义属性
        ]
      }
    ],
    // 声明后禁止使用空格
    "declaration-bang-space-after": "never",
    // 声明前使用空格
    "declaration-bang-space-before": "always",
    // 声明块多行分号后需要换行符
    "declaration-block-semicolon-newline-after": "always-multi-line",
    // 单行声明块分号后一个空格
    "declaration-block-semicolon-space-after": "always-single-line",
    // 分号之前不加空格
    "declaration-block-semicolon-space-before": "never",
    // 限制单行声明块中的声明数量为1
    "declaration-block-single-line-max-declarations": 1,
    // 声明块内必须有尾随分号
    "declaration-block-trailing-semicolon": "always",
    // 不允许复制属性块中声明
    "declaration-block-no-duplicate-properties": [
      true,
      {
        ignore: ["consecutive-duplicates-with-different-values"]
      }
    ],
    // 不允许简写属性覆盖相关手写属性声明块
    "declaration-block-no-shorthand-property-overrides": true,
    // 多行冒号后换行
    "declaration-colon-newline-after": "always-multi-line",
    // 单行冒号声明后需要一个空格空格
    "declaration-colon-space-after": "always-single-line",
    // 声明冒号之前禁止空格
    "declaration-colon-space-before": "never",
    // 声明之前使用空行
    "declaration-empty-line-before": [
      "always",
      {
        except: [
          "after-declaration", // 一个声明之后的声明不加空行
          "first-nested"
        ],
        ignore: ["after-comment", "inside-single-line-block"]
      }
    ],

    // 禁止在字体系列名称列表中缺少通用系列
    "font-family-no-missing-generic-family-keyword": true,
    // 在calc函数中不允许无效表达式
    "function-calc-no-invalid": true,
    // 单行功能的逗号后一个空格
    "function-comma-space-after": "always-single-line",
    // 功能的逗号前不加空格
    "function-comma-space-before": "never",
    // 在linear-gradient()调用中，不允许根据标准语法无效的方向值。
    // "function-linear-gradient-no-nonstandard-direction": true,
    // 允许的最大相邻空行数0
    "function-max-empty-lines": 0,
    // 函数名称指定为小写
    "function-name-case": "lower",
    // 多行功能的函数括号内换行
    "function-parentheses-newline-inside": "always-multi-line",
    // 单行功能括号内不加空格
    "function-parentheses-space-inside": "never-single-line",
    // 函数后空格
    "function-whitespace-after": "always",
    // 缩进2
    indentation: 2,
    // 禁止 在关键帧声明中 !important
    "keyframe-declaration-no-important": true,
    // 零不带单位
    "length-zero-no-unit": true,
    // 限制相邻的最大空行数1
    "max-empty-lines": 1,
    // media功能中的冒号后空格
    "media-feature-colon-space-after": "always",
    // media功能中的冒号前不加空格
    "media-feature-colon-space-before": "never",
    // media功能名称的小写
    "media-feature-name-case": "lower",
    // 不允许未知的媒体特性名称
    "media-feature-name-no-unknown": true,
    // media功能中括号内不允许空格
    "media-feature-parentheses-space-inside": "never",
    // media功能中，范围运算符后需要一个空格
    "media-feature-range-operator-space-after": "always",
    // media功能中，范围运算符前需要一个空格
    "media-feature-range-operator-space-before": "always",
    // 多行媒体查询列表中的逗号后换行
    "media-query-list-comma-newline-after": "always-multi-line",
    // 多行媒体查询列表中的逗号后面一个空格
    "media-query-list-comma-space-after": "always-single-line",
    // 媒体查询列表中的逗号后面不允许空格
    "media-query-list-comma-space-before": "never",
    // 不允许选择器之后覆盖选择器的低特异性更高的特异性
    // "no-descending-specificity": true,
    "no-duplicate-at-import-rules": true,
    // 禁用 不允许重复的选择器
    "no-duplicate-selectors": null,
    // 不允许空的来源
    "no-empty-source": true,
    // 不允许额外的分号
    "no-extra-semicolons": true,
    // 不允许双斜杠注释(/ /…)不支持CSS
    "no-invalid-double-slash-comments": true,
    // 禁止行尾空格
    "no-eol-whitespace": true,
    // 结尾换行符
    "no-missing-end-of-source-newline": true,
    // 小数部分小于或等于1的前导零 不允许 .5
    "number-leading-zero": "always",
    // 禁止数字尾随零 1.0 / 0.50
    "number-no-trailing-zeros": true,
    // 属性指定小写
    "property-case": "lower",
    // 多条规则前空行
    "rule-empty-line-before": [
      "always-multi-line",
      {
        except: ["first-nested"],
        ignore: ["after-comment"]
      }
    ],
    // 属性选择器内的括号内不允许空格
    "selector-attribute-brackets-space-inside": "never",
    // 属性选择器内的运算符后不允许空格
    "selector-attribute-operator-space-after": "never",
    // 属性选择器内的运算符前不允许空格
    "selector-attribute-operator-space-before": "never",
    // 选择器的组合符后一个空格 a + b
    "selector-combinator-space-after": "always",
    // 选择器的组合符前一个空格
    "selector-combinator-space-before": "always",
    // 不允许选择器的后代组合器使用非空格字符
    "selector-descendant-combinator-no-non-space": true,
    // 选择器列表的逗号后需要换行符
    "selector-list-comma-newline-after": "always",
    // 选择器列表的逗号前不允许空格
    "selector-list-comma-space-before": "never",
    // 限制选择器中相邻空行的数量0
    "selector-max-empty-lines": 0,
    // 伪类选择器指定小写
    "selector-pseudo-class-case": "lower",
    // 不允许未知的伪类选择器
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["export", "global"]
      }
    ],
    // 在伪类选择器内的括号内不允许空格
    "selector-pseudo-class-parentheses-space-inside": "never",
    // 伪元素选择器指定小写
    "selector-pseudo-element-case": "lower",
    // 伪元素指定双冒号表示
    "selector-pseudo-element-colon-notation": "double",
    // 不允许未知的伪元素选择器
    "selector-pseudo-element-no-unknown": true,
    // 类型选择器指定小写
    "selector-type-case": "lower",
    // 不允许未知类型选择器
    // "selector-type-no-unknown": true,
    // 禁止在字符串（转义）换行
    "string-no-newline": true,
    // 单位的小写
    "unit-case": "lower",
    // 禁止未知的单位
    "unit-no-unknown": true,
    // 多行值列表的逗号后换行
    "value-list-comma-newline-after": "always-multi-line",
    // 单行值列表中的逗号后一个空格
    "value-list-comma-space-after": "always-single-line",
    // 值列表的逗号前不允许空格
    "value-list-comma-space-before": "never",
    // 限制值列表中相邻空行的数量0
    "value-list-max-empty-lines": 0,



    // ************ Color ************
    // 指定十六进制颜色为小写格式
    "color-hex-case": "lower",
    // 指定十六进制颜色使用缩写
    "color-hex-length": "short",
    // 禁止使用命名的颜色
    "color-named": "never",
    // 禁止使用十六进制颜色
    "color-no-hex": true,
    // 禁止使用无效的十六进制颜色
    "color-no-invalid-hex": true,

    // ************ Font family ************
    // 指定字体名称当推荐使用引号时再使用引号
    "font-family-name-quotes": "always-where-recommended",
    // 禁止使用重复的字体名称
    "font-family-no-duplicate-names": true,

    // ************ Font weight ************
    // 指定 `font-weight` 的值必须是数字
    "font-weight-notation": "numeric",

    // ************ Function ************
    // 指定禁用函数的黑名单：暂无
    "function-blacklist": [],
    // 禁止在 calc 函数内使用不加空格的操作符
    "function-calc-no-unspaced-operator": true,
    // 禁止多行函数的逗号后有空白
    "function-comma-newline-after": "never-multi-line",

    // ************ Number ************

    // ************ String ************

    // ************ Length ************

    // ************ Time ************

    // ************ Unit ************

    // ************ Value ************

    // ************ Value list ************

    // ************ Custom property ************

    // ************ Shorthand property ************

    // ************ Property ************

    // ************ Keyframe declaration ************

    // ************ Declaration ************

    // ************ Declaration block ************

  }
};
