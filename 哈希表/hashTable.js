
function HashTable() {
  //定义属性
  this.storage = []
  this.count = 0
  this.limit = 8

  //定义相关方法
  //哈希函数
  HashTable.prototype.hashFunc = function (str,max) {
    //1、初始化hashCode的值
    let hashCode = 0

    //2、霍纳算法，来计算hashCode的数值
    for(let i = 0;i < str.length; i++){
      hashCode = 37 * hashCode + str.charCodeAt(i)
    }

    //3、取模运算
    hashCode = hashCode % max

    return hashCode
  }

  //插入数据的方法
  HashTable.prototype.put = function (key,value) {
    //1、获取key对应的index
    let index = this.hashFunc(key,this.limit)

    //2、取出数组(也可以是链表)
    let bucket = this.storage[index]

    //3、判断这个数组是否存在
    if(bucket === undefined){
      // 3.1创建桶
      bucket = []
      this.storage[index] = bucket
    }

    // 4.判断是新增还是修改原来的值.
    let override = false
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        tuple[1] = value
        override = true
      }
    }

    // 5.如果是新增, 前一步没有覆盖
    if (!override) {
      bucket.push([key, value])
      this.count++
    }
  }

  // 获取存放的数据
  HashTable.prototype.get = function (key) {
    // 1.获取key对应的index
    let index = this.hashFunc(key, this.limit)

    // 2.获取对应的bucket
    let bucket = this.storage[index]

    // 3.如果bucket为null, 那么说明这个位置没有数据
    if (bucket == null) {
      return null
    }

    // 4.有bucket, 判断是否有对应的key
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        return tuple[1]
      }
    }

    // 5.没有找到, return null
    return null
  }

  // 删除数据
  HashTable.prototype.remove = function (key) {
    // 1.获取key对应的index
    let index = this.hashFunc(key, this.limit)

    // 2.获取对应的bucket
    let bucket = this.storage[index]

    // 3.判断同是否为null, 为null则说明没有对应的数据
    if (bucket == null) {
      return null
    }

    // 4.遍历bucket, 寻找对应的数据
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        bucket.splice(i, 1)
        this.count--
        return tuple[1]
      }
    }

    // 5.来到该位置, 说明没有对应的数据, 那么返回null
    return null
  }

  // isEmpty方法
  HashTable.prototype.isEmpty = function () {
    return this.count == 0
  }

  // size方法
  HashTable.prototype.size = function () {
    return this.count
  }
}