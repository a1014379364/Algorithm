function Stack() {
  //栈中的属性
  this.items = []

  //栈的相关操作
  //将元素压入栈
  // this.push = function () {
  //
  // }
  Stack.prototype.push = function (element) {//JavaScript更推荐这样添加方法，更节省内存，效率更高
    this.items.push(element)
  }

  //从栈中取出元素
  Stack.prototype.pop = function () {
    return this.items.pop()
  }

  //查看一下栈顶元素
  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1]
  }

  //判断栈是否为空
  Stack.prototype.isEmpty = function () {
    return this.items.length === 0
  }

  Stack.prototype.size = function () {
    return this.items.length
  }

  //toString方法
  Stack.prototype.toString = function () {
    return this.items.toString()
  }
}
// import {Stack} from './Stack'

function dec2bin(decNumber) {
  const stack = new Stack()

  while(decNumber > 0){
    stack.push(decNumber % 2)
    decNumber = Math.floor(decNumber / 2)
  }

  let binaryString = ''
  while(!stack.isEmpty()){
    binaryString += stack.pop()
    // console.log(binaryString);
  }
  return binaryString
}

console.log(dec2bin(200));

