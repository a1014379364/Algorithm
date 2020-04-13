// 【题目】 给定一个整数数组nums和一个目标值target，请你在该数组中找出和为目标值的那两个整数，并返回他们的下标。
// （你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组的相同元素）
//
// 【个人思路】 先给传入的数组排序（需要重置sort方法），然后用双向扫描这样的穷举法完成匹配，若没有结果就返回匹配失败。

//冒泡排序
// function maoPao(a,b) {
//   return a-b;
// }
//
// function forSumNums(nums,target) {
//   //先将数组进行冒泡排序
//   nums.sort(maoPao)
//
//   const len = nums.length
//
//   //然后扫描数组拿出结果
//   for(let i in nums){
//     for(let j=len;j>i;j--){
//       if(nums[j] + nums[i] === target){
//         return [Number(i),j]
//       }
//     }
//   }
//
// }
//
// const nums = [-1,2,1,5,6,112,34,0]
//
// console.log(forSumNums(nums, 0));

/*题解*/
/*
*方法一
*/
// var twoSum = function(nums, target) {
//   for (var i = 0; i < nums.length; i++) {
//     var dif = target - nums[i];
//     // j = i + 1 的目的是减少重复计算和避免两个元素下标相同
//     for (var j = i + 1; j < nums.length; j++) {
//       if(nums[j] == dif)
//         return [i,j];
//     }
//   }
// };

/*
*方法二
*/
// 利用数组减少查询时间
// 在暴力法中，内层循环查找差值很浪费时间，那么如何减少查询时间呢？利用数组就可以减少查询时间。

// 使用一层循环，每遍历到一个元素就计算该元素与 target 之间的差值 dif，
// 然后以 dif 为下标到数组temp中寻找，
// 如果 temp[dif] 有值(即不是 undefined)，则返回两个元素在数组 nums 的下标，
// 如果没有找到，则将当前元素存入数组 temp 中(下标: nums[i], Value: i) 。
// 时间复杂度：O(n)。
const target = 100
const nums = [1,7,-1,0,9,10,100]

const twoSum = function (target,nums) {
  const length = nums.length
  const temp = []
  for(let i=0 ; i<length ; i++){
    let dif = target - nums[i]
    if(temp[dif] != undefined){
      return [temp[dif],i]
    }
    temp[nums[i]] = i
  }
}

console.log(twoSum(target, nums));







