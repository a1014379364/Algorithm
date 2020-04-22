//一个一维数组内有多个对象，且对象可重复出现，
//要求写一个函数，返回出现频次最高的对象列表。

//关键难点在于怎么记录出现频次（查找）

const obj1 = { id:1 ,name:'aaa'}
const obj2 = { id:2 ,name:'bbb'}
const obj3 = { id:3 ,name:'ccc'}
const arr = [obj1,obj2,obj3,obj1,obj1,obj3]

//用map的思路
//数组实现
// function find(arr){
//   const length = arr.length
//   const temp = []
//   const MAX = {
//     obj : null,
//     count : 0
//   }
//
//   for(let item of arr){
//     if(temp[item.id] !== undefined){
//       temp[item.id] ++
//       if(MAX.count < temp[item.id]){
//         MAX.obj = item
//         MAX.count = temp[item.id]
//       }
//     }else {
//       temp[item.id] = 1
//     }
//   }
//
//   return MAX.obj
// }
//
//对象/类数组/字典实现
// function find(arr){
//   const length = arr.length
//   const temp = {}
//   const MAX = {
//     obj : null,
//     count : 0
//   }
//
//   for(let item of arr){
//     if(temp[item.id] !== undefined){
//       temp[item.id] ++
//       if(MAX.count < temp[item.id]){
//         MAX.obj = item
//         MAX.count = temp[item.id]
//       }
//     }else {
//       temp[item.id] = 1
//     }
//   }
//
//   return MAX.obj
// }
//
//只适合存在明确id的对象，若对象id为字符串，或者可以用类数组，原理一样

//目前为止，只能用两层遍历解决问题
function find(arr) {
  const temp = []
  function Node(obj) {
    this.obj = obj
    this.count = 0
  }
  const MAX = {
    obj : null,
    count : 0
  }

  const length = arr.length
  for(let i = 0;i < length; i++){
    let isAdd = false
    for(let item of temp){//判别是否已经找到过
      if (item.obj === arr[i]){
        item.count ++
        isAdd = true

        //与当前Max比较
        if(MAX.obj == null){
          MAX.obj = item.obj
          MAX.count ++
        }else {
          if(MAX.count < item.count){
            MAX.obj = item.obj
            MAX.count = item.count
          }
        }

        break
      }
    }
    if(!isAdd){//新的对象，push到temp
      let node = new Node(arr[i])
      temp.push(node)
    }
  }

  return MAX.obj
}

find(arr)
console.log(find(arr));