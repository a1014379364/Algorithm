function Set(){
  this.items = {}

  Set.prototype.add = function (value) {
    //判断当前集合是否已经包含了该元素
    if(this.has(value)){
      return false
    }

    this.items[value] = value
    return true
  }

  Set.prototype.has = function (value) {
    return this.items.hasOwnProperty(value)
  }

  Set.prototype.remove = function (value) {
    if(this.has(value)){
      return false
    }

    delete  this.items[value]
    return true
  }

  Set.prototype.clear = function () {
    this.items = {}
  }

  Set.prototype.size = function () {
    return Object.keys(this.items).length
  }

  Set.prototype.values = function () {
    return Object.keys(this.items)
  }

  //集合间的操作
  Set.prototype.union = function (otherSet) {//并集
    const unionSet = new Set()

    let values = this.values()
    for(let i = 0 ; i<values.length ; i++){
      unionSet.add(values[i])
    }

    values = otherSet.values()
    for (let i = 0;i < values.length ; i++){
      unionSet.add(values[i])
    }

    return unionSet
  }

  Set.prototype.intersection = function (otherSet) {
    const interSet = new Set()

    // const valuesA = this.values()
    // const valuesB = otherSet.values()
    const values = this.values()
    for(let i = 0 ; i < values.length ; i++){
      // for(let j = 0 ; j < valuesB.length ; i++){
      //   if(valuesA[i] === valuesB[j]){
      //     interSet.add(valuesA[i])
      //     // valuesB.remove(j)
      //     break
      //   }
      // }
      let item = values[i]
      if(otherSet.has(item)){
        interSet.add(item)
      }
    }

    return interSet
  }

  Set.prototype.difference = function (otherSet) {
    const difSet = new Set()

    const values = this.values()
    for(let i = 0 ; i < values.length ; i++){
      let item = values[i]
      if(!otherSet.has(item)){
        difSet.add(item)
      }
    }

    return difSet
  }

  Set.prototype.subSet = function (otherSet) {
    const values = this.values()
    for(let i = 0 ; i < values.length ; i++){
      let item = values[i]
      if(!otherSet.has(item)){
        return false
      }
    }
    return true
  }
}

let set = new Set()
set.add(123)
set.add(456)
set.add(789)
// console.log(set.values());
let otherSet = new Set()
otherSet.add('aaa')
otherSet.add('bbb')
otherSet.add('ccc')
otherSet.add(123)
// let unionSet = set.union(otherSet)
// console.log(unionSet);
let interSet = set.intersection(otherSet)
console.log(interSet);