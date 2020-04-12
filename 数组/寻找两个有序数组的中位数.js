// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
//
// 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
//
// 你可以假设 nums1 和 nums2 不会同时为空。

// const nums1 = [1,2,3,4,5,6]
// const nums2 = [-1,0,1,2,3]
//
// // 冒泡排序
// function maoPao(a,b) {
//   return a-b;
// }
//
// const getMiddle = function (nums) {
//   let middle = null
//   let length = nums.length
//
//   if(length){
//     if(length % 2 === 0){
//       middle = (nums[length/2] + nums[length/2 - 1])/2
//     }else {
//       middle = nums[Math.floor(length/2)]
//     }
//     return middle
//   }else{
//     return 0
//   }
// }
//
// const findMedianSortedArrays = function(nums1, nums2) {
//   const allNums = nums1.concat(nums2)
//   return getMiddle(allNums.sort(maoPao))
// };
//
// console.log(findMedianSortedArrays(nums1, nums2));

//我认为关键在排序