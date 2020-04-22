//类数组
//可以利用属性名模拟数组特性
//可以动态地增长length属性
//如果强行让类数组调用push方法，则会根据length属性值得位置进行属性扩充
const obj = {
  '0':'a',
  '1':'b',
  '2':'c',
  length:3,
  push:Array.prototype.push,
  slice:Array.prototype.slice
}

obj.push('d')
obj['adc'] = 123
console.log(obj);
// console.log(obj.slice());