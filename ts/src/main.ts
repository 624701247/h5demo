namespace jinx {
  console.log('run main.ts')

  // 用 let 代替 var , 不然如下，用var重复定义都是可以编译通过的
  export var badVar = 1
  export var badVar = 2

  export let goodLet = 1
  // export let goodLet = 2 //你试试这样，会报重复定义错误，无法编译通过

  export function lanuch() {
    log('kone')
  }
}



/**  kone point：
如何使用 ts：
1、npm install -g typescript  
2、创建一个xx.ts 然后命令行   tsc xx.ts 就能将其编译出 xx.js
3、最好就是在根目录下创建 tsconfig.json  然后直接命令行 tsc  即可根据该配置进行编译

*/


// tsconfig.json
let tsc = {
  "extends": "./configs/base", //继承 configs/base.json  的配置  来至所继承配置文件的files，include和exclude覆盖源配置文件的属性。
	"compilerOptions": {
		"module": "amd",
		"watch": true, //带上 命令行输入tsc后，文件修改后会自动编译
		"sourceMap": true,		//是否生产 .map 文件（当然是要了，这样才能在chrome调试 ts文件）
		"target": "es5",
    "outFile": "out/jinx.bundle.js",  //编译的输出文件
    "outDir": "bin-debug",  //编译的输出目录，就是将所有的编译的ts一一编译为对应的js
    "experimentalDecorators": true,
    "types": [],
    "removeComments": true,  //编译删除注释
    "lib": [//添加需要的解析的语法，否则TS会检测出错。
      "es2016",
      "dom"
    ]
	},
	"include": [
    "src"  //将src目录下的ts文件编译进去，支持 glob匹配模式
  ],
  "files": [ //指定需要编译的文件列表
    "core.ts",
    "sys.ts"
  ],
	"exclude": [ //不包含的编译目录
		"node_modules",
		"out"
	]
}