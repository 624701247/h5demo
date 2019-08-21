# ts的使用
## 肖进超 --2019/8/21

### 如何使用 ts：
1、npm install -g typescript  
2、创建一个xx.ts 然后命令行   tsc xx.ts 就能将其编译出 xx.js
3、最好就是在根目录下创建 tsconfig.json  然后直接命令行 tsc  即可根据该配置进行编译


### tsconfig.json 配置注解：
``` js
{
  //继承 configs/base.json  的配置  来至所继承配置文件的files，include和exclude覆盖源配置文件的属性。
  "extends": "./configs/base", 
	"compilerOptions": {
		"module": "amd",
		"watch": true, //带上 命令行输入tsc后，文件修改后会自动编译,你也可以用命令行 tsc --watch 或 tsc -w
		"sourceMap": true,		//是否生产 .map 文件（当然是要了，这样才能在chrome调试 ts文件）
		"target": "es5",
    "outFile": "out/jinx.bundle.js",  //编译的输出文件
    "outDir": "bin-debug",  //编译的输出目录，就是将所有的编译的ts一一编译为对应的js
    "experimentalDecorators": true, // 启用对ES7装饰器的实验性支持
    "declaration":true,  //生成相应的 d.ts 文件
    "incremental": true, //启用增量编译 （什么是增量编译：???）
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
  ],
  "references": [  //工程引用
		{ "path": "jinx"},
		{ "path": "draven"}
	]
}
``` 

### 命令行注解 :
```
参数 
-b : 指定含有ts配置的目录或指定的ts配置文件
-w : watch 咯，对应的文件有修改自动编译


同时watch多个ts配置文件
tsc -b cfg1.json cfg2.json -w
tsc -b ts/jinx ts/draven -w

```

### 如何分模块输出文件
##### 比如我这里有两个namespace(jinx & draven),如何分别编译成jinx.min.js & draven.min.js
* 方法1：用命令行 -b 参数，看上文;         
请运行 npm run watchadc-v2 看看效果       
<br>
* 方法2：用项目引用的方法，详细看文档[https://www.tslang.cn/docs/handbook/project-references.html]     
简单来说就是跟目录抽一个ts配置，该配置引用其他所有子模块,详细请看ts目录下的tsconfig.json        
请运行 npm run watchadc 看看效果


