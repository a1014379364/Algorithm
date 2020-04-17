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

}

let set = new Set()
set.add(123)
set.add(456)
set.add(789)
console.log(set.values());