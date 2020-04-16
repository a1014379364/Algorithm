//设计一个支持push，pop，top操作，并且能在常数时间内检索到最小的栈
//push(x) ---将元素x压入栈中
//pop() ---删除栈顶元素
//top() ---获取栈顶元素
//getMin() ---检索栈中最小的元素

// var MinStack = function() {
//   this.items = []
// };
//
// /**
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function(x) {
//   this.items.push(x)
// };
//
// /**
//  * @return {number}
//  */
// MinStack.prototype.pop = function() {
//   return this.items.pop()
// };
//
// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//   return this.items[this.items.length - 1]
// };
//
// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//   let min = null
//   let length = this.size()
//   let content = new MinStack()
//
//   for(let i=0; i<length; i++){
//     let num = this.pop()
//     content.push(num)
//     if(num < min || min == null){
//       min = num
//     }
//   }
//
//   length = content.size()
//   for (let i=0; i<length; i++){
//     this.push(content.pop())
//   }
//
//   return min
// };
//
// /**
//  * @return {number}
//  */
// MinStack.prototype.size = function() {
//   return this.items.length
// };

var MinStack = function() {
  this.stack = [];
  this.min_stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  // 初始化 或 当有更小值入栈时，将当前值入最小栈中
  if(this.min_stack.length == 0 || this.min_stack[this.min_stack.length-1] >= x){
    this.min_stack.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  // 当出栈值 == 当前最小值时，最小栈的值也要删掉，最小值自热更新为前一步的最小值
  if(this.stack.pop() == this.min_stack[this.min_stack.length-1]){
    this.min_stack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  // 返回与当前基栈同步的最小栈的栈顶元素即为最小值
  return this.min_stack[this.min_stack.length-1];
};


const stack = new MinStack()
stack.push(2)
stack.push(0)
stack.push(-3)
console.log(stack.getMin());
stack.pop()
console.log(stack.top());
console.log(stack.getMin());