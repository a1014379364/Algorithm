function Queue() {
  this.items = []

  Queue.prototype.enqueue = function (element) {
    this.items.push(element)
  }

  Queue.prototype.dequeue = function () {
    return this.items.shift()
  }

  Queue.prototype.front = function () {
    return this.items[0]
  }

  Queue.prototype.isEmpty = function () {
    return this.items.length === 0
  }

  Queue.prototype.size = function () {
    return this.items.length
  }

  Queue.prototype.toString = function () {
    return this.items.toString()
  }
}

function passGame(nameList,num) {
  //创建队列结构
  var queue = new Queue()

  //将所有人依次加入到队列中
  for(let i=0; i<nameList.length; i++){
    queue.enqueue(nameList[i])
  }

  //开始数数字，
  //不是num的时，重新加入队列的末尾
  //到num这个数字的时，将其从队列中删除
  while (queue.size() > 1){
    for(let j=0; j<num-1 ; j++){
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }

  if(queue.size() === 1){
    return queue.front()
  }
}

const nameList = ['a','b','c','d','e','f','g']
console.log(passGame(nameList, 3));