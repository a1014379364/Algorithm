//优先级队列，在插入一个元素的时候就会考虑该数据的优先级
//比较完成后，可以得到这个元素在队列中正确的位置
//其他处理方式，和基本队列的处理方式一样
//优先级队列主要考虑的问题：
  //每个元素不再只是一个数据，而且包含优先级
  //在添加方式中，根据优先级放入正确的位置
//
//优先级队列的应用
//一个现实的例子就是机场的登机的顺序
  //头等舱和商务舱乘客的优先级要高于经济舱乘客。
  //在有些国家，老年人和孕妇（或带小孩的妇女）登记时也享有高于其他乘客的优先级

function PriorityQueue(){
  //内部类,封装元素优先级
  function QueueElement(element,priority) {
    this.element = element
    this.priority = priority
  }

  this.items = []

  PriorityQueue.prototype.enqueue= function (element,priority) {
    let queueElement = new QueueElement(element,priority)

    if(this.items.length === 0){
      this.items.push(queueElement)
    }else {
      let added = false
      for(let i=0; i<this.items.length; i++){
        if(queueElement.priority < this.items[i].priority){
          this.items.splice(i,0,queueElement)
          added = true
          break
        }
      }
      if(!added){
        this.items.push(queueElement)
      }
    }
  }

  PriorityQueue.prototype.dequeue = function () {
    return this.items.shift()
  }

  PriorityQueue.prototype.front = function () {
    return this.items[0]
  }

  PriorityQueue.prototype.isEmpty = function () {
    return this.items.length === 0
  }

  PriorityQueue.prototype.size = function () {
    return this.items.length
  }

  PriorityQueue.prototype.toString = function () {
    // return this.items.toString()
    let resultString = ''
    for(let i=0; i<this.items.length;i++){
      resultString += this.items[i].element + ' '
    }
    return resultString
  }
}

let pq = new PriorityQueue()
pq.enqueue('adc',111)
pq.enqueue('ddd',123)
pq.enqueue('ccc',1)
pq.enqueue('eee',11)
console.log(pq.toString());