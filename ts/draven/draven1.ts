// namespace draven {
//   console.log('run draven 333333')
// }


function f() {
  console.log("f(): evaluated");
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target, propertyKey, descriptor)
  }
}

class C {
  @f()
  hello() {

  }
  method() {}
}


// 类装饰器
function sealed(constructor: Function) {
  // Object.seal()方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要原来是可写的就可以改变。
  Object.seal(constructor);  
  Object.seal(constructor.prototype);
}

// 
// @sealed
// class Greeter {
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message;
//   }
//   greet() {
//     return "Hello, " + this.greeting;
//   }
// }


function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  }
}

@classDecorator
class Greeter {
  property = "property";
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}

console.log(new Greeter("world"));

// let te: [{a:string}] = [{a:'a'}]
let te: Array<{a:string, b:number}> = [{a:'a',b:2}]