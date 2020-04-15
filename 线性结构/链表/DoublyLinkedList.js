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
    }else {
      let previous = null
      let pointer = this.head
      while (pointer){
        previous = pointer
        pointer = pointer.next
      }
      node.prev = previous
      previous.next = node
      this.tail = node
    }

    this.length ++
  }

  DoublyLinkedList.prototype.insert = function (position,data) {
    let node = new Node(data)

    if(position === 0){

    }else{

    }

    this.length ++
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

}

const doublylinkedlist = new DoublyLinkedList()
doublylinkedlist.append(123)
doublylinkedlist.append(456)
doublylinkedlist.append(789)
console.log(doublylinkedlist.toString());