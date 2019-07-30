/*
eslint代码规范配置

"off" or 0 - 关闭(禁用)规则
"warn" or 1 - 将规则视为一个警告（并不会导致检查不通过）
"error" or 2 - 将规则视为一个错误 (退出码为1，检查不通过)
*/

module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true, // 这个设置会自动启用 ES6 语法
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6, // 设置为 3， 5 (默认)， 6、7 或 8 指定你想要使用的 ECMAScript 版本。你也可以指定为 2015（同 6），2016（同 7），或 2017（同 8）使用年份命名
        "sourceType": "module", // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
        "ecmaFeatures": { // 这是个对象，表示你想使用的额外的语言特性:
            "jsx": true, // 启用 JSX
        }
    },
    // 规则配置
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],

        // kone point 
        // "semi": [ "error", "always"], //语句结尾必须带上分号，否则黄色警告
        'semi': 0, //不检查语句末尾是否带分号

        //
        //
        // 可能的错误
        // 这些规则与 JavaScript 代码中可能的语法错误或逻辑错误有关
        //
        // 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
        'for-direction': 2,
        // getter 必须有返回值，并且禁止返回空，比如 return;
        'getter-return': [
            'error',
            {
                allowImplicit: false
            }
        ],
        // 禁止在 if, for, while 里使用赋值语句，除非这个赋值语句被括号包起来了
        'no-cond-assign': [
            'error',
            'except-parens'
        ],
        // 禁止使用 console
        // @off console 的使用很常见
        'no-console': 0,
        // 禁止将常量作为 if, for, while 里的测试条件，比如 if (true), for (;;)，除非循环内部有 break 语句
        'no-constant-condition': [
            'error',
            {
                checkLoops: false
            }
        ],
        // 禁止在正则表达式中出现 Ctrl 键的 ASCII 表示，即禁止使用 /\x1f/
        // 开启此规则，因为字符串中一般不会出现 Ctrl 键，所以一旦出现了，可能是一个代码错误
        'no-control-regex': 2,
        // @fixable 禁止使用 debugger
        'no-debugger': 2,
        // 禁止在函数参数中出现重复名称的参数
        'no-dupe-args': 2,
        // 禁止在对象字面量中出现重复名称的键名
        'no-dupe-keys': 2,

        //禁止多余的冒号
        "no-extra-semi": 2,

        //禁止switch穿透
        "no-fallthrough": 1,
        //禁止省略浮点数中的0 .5 3.
        "no-floating-decimal": 2,
        //禁止重复的函数声明
        "no-func-assign": 2,
        //禁止使用八进制数字
        "no-octal": 2,
        //禁止使用八进制转义序列
        "no-octal-escape": 2,
        //不能比较自身
        "no-self-compare": 2,

        //不能有声明后未被使用的变量或参数
        "no-unused-vars": [1, {"vars": "all", "args": "none"}],

        //一行结束后面不要有空格
        "no-trailing-spaces": 0,

        //不能有未定义的变量
        "no-undef": 1,
        //函数调用时 函数名与()之间不能有空格
        "no-spaced-func": 2,
        //禁止混用tab和空格
        // "no-mixed-spaces-and-tabs": [2, false],
        "no-mixed-spaces-and-tabs": 0,
        //换行风格
        "linebreak-style": [0, "windows"],

        //空行最多不能超过3行
        "no-multiple-empty-lines": [1, {"max": 3}],

        //缩进风格
        // "indent": [2, 4],
        "indent": 0,

        //引号类型 `` "" ''
        // "quotes": [1, "single"],
        "quotes": 0,

        
        //关键字后面是否要空一格
        // "space-after-keywords": [1, "always"],
        "space-after-keywords": 0,

        //不以新行开始的块{前面要不要有空格
        "space-before-blocks": [1, "always"],

        //函数定义时括号前面要不要有空格
        // "space-before-function-paren": [1, "always"],
        "space-before-function-paren":0,

        //一元运算符的前/后要不要加空格
        // "space-unary-ops": [1, { "words": true, "nonwords": false }],
        "space-unary-ops": 0,

        //使用严格模式
        "strict": 2,
        //this别名
        "consistent-this": [2, "self"],
        //switch语句最后必须有default
        "default-case": 2,
    }
};
