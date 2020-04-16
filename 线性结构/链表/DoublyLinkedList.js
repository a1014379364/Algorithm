function DoublyLinkedList() {
  this.head = null
  this.tail = null
  this.length = 0

  function Node(data) {
    this.data =data
    this.next = null
    this.prev = null
  }

  DoublyLinkedList.prototype.append = function (data) {
    let node = new Node(data)

    if(this.length === 0){
      this.head = node
      this.tail = node
    }else {
      // let previous = null
      // let pointer = this.head
      // while (pointer){
      //   previous = pointer
      //   pointer = pointer.next
      // }
      // node.prev = previous
      // previous.next = node
      // this.tail = node
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }

    this.length ++
  }

  DoublyLinkedList.prototype.insert = function (position,data) {
    let node = new Node(data)

    if(position < 0 || position > this.length) return false

    if(this.length === 0){
      this.head = node
      this.tail = node
    }else{
      if(position === 0){
        this.head.prev = node
        node.next = this.head
        this.head = node
      }else if(position === this.length){
        // this.append(data)
        node.prev = this.tail
        this.tail.next = node
        this.tail = node
      }else {
        let index = 0
        // let previous = null
        // let next = null
        let pointer = this.head
        while(index ++ < position){
          // previous = pointer
          pointer = pointer.next
          // next = pointer.next
        }
        // previous.next = node
        // node.prev = previous
        // pointer.next.prev = node
        // node = pointer.next
        // pointer = node
        // node.prev = pointer.prev
        // previous.next = node
        // node.next = next
        // next.prev = node
        node.next = pointer
        node.prev = pointer.prev
        pointer.prev.next = node
        pointer.prev = node
      }
    }

    this.length ++

    return true
  }

  DoublyLinkedList.prototype.get = function (position) {
    if(position < 0 || position >= this.length) return false

    let pointer = null
    let index = 0
    if(position <= Math.floor(this.length/2)){
      pointer = this.head
      index = 0
      while(index ++ < position){
        pointer = pointer.next
      }
    }else {
      pointer = this.tail
      index = this.length - 1
      while (index -- > position){
        pointer = pointer.prev
      }
    }

    return pointer.data

  }

  DoublyLinkedList.prototype.indexOf = function(data){
    let pointer = this.head
    let index = 0
    while (pointer){
      if(pointer.data == data){
        return index
      }else {
        index ++
        pointer = pointer.next
      }
    }
    return -1
  }

  DoublyLinkedList.prototype.update = function(position,data) {
    if(position < 0 || position >= this.length) return false

    let pointer = null
    let index = 0
    if(position <= Math.floor(this.length/2)){
      pointer = this.head
      index = 0
      while(index ++ < position){
        pointer = pointer.next
      }
    }else {
      pointer = this.tail
      index = this.length - 1
      while (index -- > position){
        pointer = pointer.prev
      }
    }
    pointer.data = data

    return true
  }

  DoublyLinkedList.prototype.removeAt = function(position) {
    if(position < 0 || position >= this.length) return false

    if(this.length === 1){
      this.head = null
      this.tail = null
    }else {
      if(position == 0){
        this.head.next.prev = null
        this.head = this.head.next
      }else if(position == this.length - 1){
        this.tail.prev.next = null
        this.tail = this.tail.prev
      }else {
        let pointer = null
        let index = 0
        if(position <= Math.floor(this.length/2)){
          pointer = this.head
          index = 0
          while(index ++ < position){
            pointer = pointer.next
          }
        }else {
          pointer = this.tail
          index = this.length - 1
          while (index -- > position){
            pointer = pointer.prev
          }
        }
        pointer.prev.next = pointer.next
        pointer.next.prev = pointer.prev
      }
    }

    return true
  }

  DoublyLinkedList.prototype.remove = function(data){
    let position = this.indexOf(data)

    return this.removeAt(position)
  }

  DoublyLinkedList.prototype.isEmpty = function () {
    return this.length === 0
  }

  DoublyLinkedList.prototype.size = function () {
    return this.length
  }

  DoublyLinkedList.prototype.toString = function (direction) {
    let pointer = null
    let listString = ''

    if(direction != 'reverse'){
      pointer = this.head
      while(pointer){
        listString += pointer.data + '->'
        pointer = pointer.next
      }
    }else {
      pointer = this.tail
      while(pointer){
        listString += pointer.data + '->'
        pointer = pointer.prev
      }
    }

    return listString
  }

  DoublyLinkedList.prototype.getHead = function () {
    return this.head.data
  }

  DoublyLinkedList.prototype.getTail = function () {
    return this.tail.data
  }
}

const doublylinkedlist = new DoublyLinkedList()
doublylinkedlist.append(123)
doublylinkedlist.append(456)
doublylinkedlist.append(789)
doublylinkedlist.append('aaa')
doublylinkedlist.append('bbb')
doublylinkedlist.append('ccc')
console.log(doublylinkedlist.toString());
// console.log(doublylinkedlist.toString('reverse'));
// doublylinkedlist.insert(2,'aaa')
// console.log(doublylinkedlist.toString());
// console.log(doublylinkedlist.get(2));
// doublylinkedlist.update(4,'eee')
// console.log(doublylinkedlist.toString());
// doublylinkedlist.removeAt(5)
// console.log(doublylinkedlist.toString());
// doublylinkedlist.remove('ccc')
// console.log(doublylinkedlist.toString());