// function qSort(arr) {
//   if(arr.length == 0){
//     return []
//   }
//
//   let lesser = []
//   let greater = []
//   let pivot = arr[0]
//
//   for(let i= 1; i<arr.length; i++){
//     if(arr[i]<pivot){
//       lesser.push(arr[i])
//     }else {
//       greater.push(arr[i])
//     }
//
//     return qSort(lesser).concat(pivot,qSort(greater))
//   }
// }
//
// const arr = [0,-1,123,5,8,11,100,7]
// console.log(qSort(arr));