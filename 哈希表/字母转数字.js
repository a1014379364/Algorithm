//目标将字符串转成下标值
  //其实单词/字符串转下标值，其实就是字母/文字转数字
//所以我们需要设计一种方案，可以将单词转成适当的下标(最具代表就是编码字符集，如ASCII编码)
  //当然我们也可以设计一套自己的编码字符集来帮助理解哈希表
  //如a=1，b=2,...,z=24,0代表空格等
//
//方案一:数字相加
  //一种转换单词的简单方案就是把单词每个字符的编码求和
  //例如单词cats转成数字:3+1+20+19=43
  //那么43就作为cats单词的下标存在数组中
  //很明显的，后面有很多单词之和都是43，也就是说下标一直，之前存储的元素会被取代
//
//方案二:幂的连乘
  //例如我们平时使用的大于10的数字，可以用一种幂的连乘来表示它的唯一性
  //比如：7654 = 7*10^3 + 6*10^2 + 5*10^1 + 4*10^0
  //而我们单词也可以使用这样的方案来表示，如cats = ......
  //这样就基本保证它的唯一性
  //但也很明显的，这样就会很容易让数字变得巨大无比
