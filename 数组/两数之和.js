// 【题目】 给定一个整数数组nums和一个目标值target，请你在该数组中找出和为目标值的那两个整数，并返回他们的下标。
// （你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组的相同元素）
//
// 【个人思路】 先给传入的数组排序（需要重置sort方法），然后用双向扫描这样的穷举法完成匹配，若没有结果就返回匹配失败。

//冒泡排序
function maoPao(a,b) {
  return a-b;
}

function forSumNums(nums,target) {
  //先将数组进行冒泡排序
  nums.sort(maoPao)

  const len = nums.length

  //然后扫描数组拿出结果
  for(let i in nums){
    for(let j=len;j>i;j--){
      if(nums[j] + nums[i] === target){
        return [Number(i),j]
      }
    }
  }

}

const nums = [-1,2,1,5,6,112,34,0]

console.log(forSumNums(nums, 0));

