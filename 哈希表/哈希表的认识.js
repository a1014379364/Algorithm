//哈希表通常是基于数据进行实现的，但是相对于数组，它有很多优势:
  //它可以提供非常快的插入-删除-查找操作
  //无论多少数据，插入和删除值需要接近常量的时间:即O(1)的时间级
    //实际上，只需要几个机器指令即可完成
    //而数组进行插入、删除和查找效率相对而言很低
  //哈希表的速度比树还要快,基本可以瞬间查找到想要的元素
  //哈希表相对于树来说编码要容易很多
//
//哈希表到底是什么
//它的结构就是数组，但是它神奇的地方在于下标值的一种变换，
  //而这种变换我们可以称之为哈希函数，通过哈希函数可以获取到HashCode
