function HashTable() {
  //定义属性
  this.storage = []
  this.count = 0
  this.limit = 8 //?

  //定义相关方法
  //哈希函数
  HashTable.prototype.hashFunc = function (str,max) {
    //1、初始化hashCode的值
    let hashCode = 0

    //2、霍纳算法，来计算hashCode的数值
    for(let i = 0;i < str.length; i++){
      //charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。
      //37是一个质数代表,使用它可以让hashCode均匀分布
      hashCode = 37 * hashCode + str.charCodeAt(i)
    }

    //3、取模运算,为了压缩数字
    hashCode = hashCode % max

    return hashCode
  }

  //插入数据的方法
  HashTable.prototype.put = function (key,value) {
    //1、获取key对应的index
    let index = this.hashFunc(key,this.limit)//获取存储下标

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

  //判断某个数字是否为质数
  HashTable.prototype.isPrime = function (num) {
    const temp = parseInt(Math.sqrt(num))

    for(let i = 0; i <= temp; i++){
      if(num % i == 0){
        return false
      }
    }

    return false
  }

  // HashTable.prototype.getPrmie = function (num) {
  //
  // }
}

const hashTable = new HashTable()
// console.log(hashTable.hashFunc('abc', 5));
hashTable.put('abc',100)
console.log(hashTable.get('abc'));