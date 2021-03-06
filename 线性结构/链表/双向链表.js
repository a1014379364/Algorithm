//单向链表
  //只能从头遍历到尾或者从尾遍历到头
  //也就是链表相连的过程是单向的
  //实现的原理是上一个链表中有一个指向下一个的引用
//单向链表有一个比较明显的缺点
  //我们可以轻松地到达下一个节点，但是回到前一个节点是很难的
  //但是在实际开发中，经常会遇到需要回到上一个节点的情况
  //
  //举个例子：假设一个文本编辑用链表来存储文本，
  //每一行一个String对象存储在一个链表的一个节点中，
  //当用户在编辑器向上移动光标，就需要回到上一个节点
  //如果用单链表我们就需要从first开始，依次走想要的节点上

//双向链表
  //既可以从头遍历到尾，又可以从尾遍历到头
  //链表相连的过程是双向的
//双向链表有什么缺点呢？
  //每次在插入和删除某个节点时，需要处理四个引用，
  //实现起来会困难一些
  //并且与单向链表相比，必然占用内存空间更大一些
  //但是这些缺点和使用的方便度相比微不足道