function LinkedList(){
  //内部类,节点
  function Node(data) {
    this.data =data
    this.next = null
  }

  //属性
  this.head = null
  this.length = 0

  LinkedList.prototype.append = function (data) {
    let node = new Node(data)
    if(this.length === 0){
      this.head = node
    }else {
      let pointer = this.head
      // while(pointer){ //可能这是节点赋节点
      while(pointer.next){ //这个是指针赋指针，所以不报错
        pointer = pointer.next
        // node = pointer
      }
      pointer.next = node
    }
    this.length ++
  }
  // LinkedList.prototype.append = function(data){
  //   let node = new Node(data)
  //
  //   if(this.length === 0){
  //     this.head = node
  //   }else {
  //     let pointer = this.head.next //这样做就相当于指向头节点的下一个节点
  //     //然而这样做，会使得pointer总指向空
  //     while(pointer){
  //       pointer = pointer.next
  //     }
  //     pointer = node
  //   }
  //
  //   this.length ++
  // }


  LinkedList.prototype.toString = function () {
    let pointer = this.head
    let listString = ''

    while(pointer){
      listString +=   pointer.data + '--'
      pointer = pointer.next
    }

    return listString
  }

  LinkedList.prototype.insert = function (position,data) {
    //越界判断
    if(position < 0 || position > this.length) return false

    let node = new Node(data)

    if(position === 0){
      node.next = this.head
      this.head = node
    }else {
      let index = 0
      let pointer = this.head
      let previous = null
      while(index ++ < position){
        previous = pointer
        pointer = pointer.next
      }
      node.next = pointer
      previous.next = node
    }

    this.length ++

    return true
  }

  LinkedList.prototype.get = function (position) {
    if(position < 0 || position > this.length) return false

    let pointer = this.head
    let index = 0
    while(index ++ < position){
      pointer = pointer.next
    }
    return pointer.data
  }

  LinkedList.prototype.update = function (position,data) {
    if(position < 0 || position > this.length) return false

    let pointer = this.head
    let index = 0
    while(index ++ < position){
      pointer = pointer.next
    }
    pointer.data = data
    return true
  }

  LinkedList.prototype.indexOf = function (data) {//返回在链表中的下标索引
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

  LinkedList.prototype.removeAt = function (position) {
    if(position < 0 || position > this.length) return false

    let node = null
    if(position === 0){
      node = this.head
      this.head = this.head.next

    }else {
      let pointer = this.head
      let previous = null
      let index = 0
      while (index ++ < position){
        previous = pointer
        pointer = pointer.next
      }
      node = pointer
      previous.next = pointer.next

    }
    this.length --

    return node.data
  }

  LinkedList.prototype.remove = function (data) {
    let position = this.indexOf(data)

    return this.removeAt(position)
    // let index = 0
    //
    // if(data == this.head.data){
    //   this.head = this.head.next
    // }else {
    //   let pointer = this.head
    //   let previous = null
    //   let index = 0
    //   while (pointer.data != data && pointer != null){
    //     previous = pointer
    //     pointer = pointer.next
    //     index ++
    //   }
    //
    //   if(pointer == null){
    //     return -1
    //   }else {
    //     previous.next = pointer.next
    //   }
    //
    // }
    // this.length --
    //
    // return index
  }

  LinkedList.prototype.isEmpty = function () {
    return this.length === 0
  }

  LinkedList.prototype.size = function () {
    return this.length
  }

}

let list = new LinkedList()
list.append(123)
list.append(456)
list.append(789)
list.insert(1,'aaa')
console.log(list.toString());
console.log(list.get(1));
list.update(2,'bbb')
console.log(list.toString());
console.log(list.indexOf('123'));
console.log(list.indexOf('ccc'));
list.removeAt(0)
console.log(list.toString());
list.removeAt(2)
console.log(list.toString());
list.remove('aaa')
console.log(list.toString());
// console.log(list.remove(1));