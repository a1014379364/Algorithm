//一个一维数组内有多个对象，且对象可重复出现，
//要求写一个函数，返回出现频次最高的对象列表。

//关键难点在于怎么记录出现频次（查找）

const obj1 = { id:1 ,name:'aaa'}
const obj2 = { id:2 ,name:'bbb'}
const obj3 = { id:3 ,name:'ccc'}
const arr = [obj1,obj2,obj3,obj1,obj1,obj2,obj2,obj2,obj2]

// function find(arr){
//   const length = arr.length
//   const temp = []
//   const MAX = {
//     obj : null,
//     count : 0
//   }
//
//   for(let item of arr){
//     // if(temp[item] !== undefined){
//     //   temp[item] ++
//     //   if(MAX.count < temp[item]){
//     //     MAX.obj = item
//     //     MAX.count = temp[item]
//     //   }
//     // }else {
//     //   console.log("!",item);
//     //   temp[item] = 1
//     // }
//   }
//
//   return MAX.obj
// }
// find(arr)
// console.log(find(arr));
//可能内存消耗方面，会很大。
//算法出现错误，原因应该是内存指向都很大，所以每次都指向最后一个
//只适合存在明确id的对象，若对象id为字符串，可以用类数组，原理一样

//目前为止，只能用两层遍历解决问题
