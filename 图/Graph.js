function Dictionary() {
  this.items = {}

  Dictionary.prototype.set = function (key,value) {
    this.items[key] = value
  }

  Dictionary.prototype.has = function (key) {
    return this.items.hasOwnProperty(key)
  }

  Dictionary.prototype.remove = function (key) {
    if(!this.has(key)) return false

    delete this.items[key]
    return true
  }

  Dictionary.prototype.get = function (key) {
    return this.has(key) ? this.items[key] : undefined
  }

  Dictionary.prototype.keys = function () {
    return Object.keys(this.items)
  }

  Dictionary.prototype.values = function () {
    return Object.keys(this.items)
  }

  Dictionary.prototype.size = function () {
    return this.keys().length
  }

  Dictionary.prototype.clear = function () {
    this.items = {}
  }
}//字典

function Queue() {
  this.items = []

  Queue.prototype.enqueue = function (element) {
    this.items.push(element)
  }

  Queue.prototype.dequeue = function () {
    return this.items.shift()
  }

  Queue.prototype.front = function () {
    return this.items[0]
  }

  Queue.prototype.isEmpty = function () {
    return this.items.length === 0
  }

  Queue.prototype.size = function () {
    return this.items.length
  }

  Queue.prototype.toString = function () {
    return this.items.toString()
  }
}//队列

function Graph() {//无向图
  this.vertexes = []
  this.edges = new Dictionary()

  //添加顶点的方法
  Graph.prototype.addVertex = function (v) {
    this.vertexes.push(v)
    this.edges.set(v,[])
  }

    //添加边的方法
  Graph.prototype.addEdge = function (v1,v2) {
    this.edges.get(v1).push(v2)
    this.edges.get(v2).push(v1)
  }

  Graph.prototype.toString= function () {
    let resultString = ''
    for(let v of this.vertexes){
      resultString += v + '->'
      const vEdges = this.edges.get(v)
      for (let edge of vEdges){
        resultString += edge + ' '
      }
      resultString += '\n'
    }
    return resultString
  }

  //有两种算法可以对图进行遍历
    //1、广度优先搜索BFS
    //2、深度优先搜索DFS
    //两种遍历算法，都需要明确指定第一个被访问的顶点
  //为了记录顶点是否被访问过,我们使用三种颜色来反应他们的状态
    //白色:表示该顶点还没有被访问
    //灰色:表示该顶点被访问过,但未被探索过
    //黑色:表示该顶点被访问过且被完全探索过

  //初始化颜色状态
  Graph.prototype.initColor = function () {
    const colors = []
    for (let v of this.vertexes){
      colors[v] = 'white'
    }
    return colors
  }

  //广度优先搜索算法的思路:
    //广度优先算法会从指定的第一个顶点开始遍历图,先访问其所有的相邻点，就像一次访问图的一层
    //换句话说,就是先宽后深地访问顶点
  //广度优先搜索的实现
    //创建一个队列Q
    //将v标注为被发现的(灰色)，并将v列入队列Q
      //将v从Q中取出队列
      //将v标注被发现的灰色
      //将v所有的未被访问过的邻接点(白色),加入至队列中
      //将v标志为黑色

  //广度优先搜索(BFS):
  Graph.prototype.bfs = function (initV,handler) {//开始遍历的顶点,处理遍历结果的函数(传入遍历结果)
    //初始化颜色
    let colors = this.initColor()

    //创建队列
    let queue = new Queue()

    //将顶点加入队列
    queue.enqueue(initV)

    //循环从队列中取出元素
    while(!queue.isEmpty()){
      //从队列中取出一个顶点
      let v = queue.dequeue()

      //然后取出与该顶点相关的顶点
      let vList = this.edges.get(v)

      //将v的颜色设成灰色
      colors[v] = 'gray'

      //遍历与之相关的所有顶点，并加入队列中
      for(let item of vList){
        if(colors[item] === 'white'){
          colors[item] = 'gray'
          queue.enqueue(item)
        }
      }

      //已经被探测,用处理函数访问
      handler(v)

      //被探测且被处理完，转为黑色
      colors[v] = 'black'
    }
  }

  //深度优先搜索思路:
    //深度优先搜索算法将会从第一个指定的顶点开始遍历图，沿着路径知道这条路径最后被访问了
    //接着原路回退并探索另一条路径
  //深度优先搜索算法的实现：
    //广度优先搜索算法我们使用的是队列，这里可以使用栈完成，也可以使用递归
    //方便代码书写，我们还是使用递归（递归本质上就是函数栈的调用）

  //深度优先搜索(DFS)
  Graph.prototype.dfs = function (initV,handler) {
    //初始化颜色
    const colors = this.initColor()

    //从某个顶点开始依次递归访问
    this.dfsVList(initV,colors,handler)
  }
  Graph.prototype.dfsVList = function(v,colors,handler){
    //将颜色设为灰色
    colors[v] = 'gray'

    //处理v顶点
    handler(v)

    //访问v相连的顶点
    let vList = this.edges.get(v)
    for(let item of vList){
      if(colors[item] === 'white'){
        this.dfsVList(item,colors,handler)
      }
    }

    colors[v] = 'black'
  }
}

const graph = new Graph()

const myVertexes = ['A','B','C','D','E','F','G','H','I']
for(let item of myVertexes){
  graph.addVertex(item)
}

graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('A','D')
graph.addEdge('C','D')
graph.addEdge('C','G')
graph.addEdge('D','G')
graph.addEdge('D','H')
graph.addEdge('B','E')
graph.addEdge('B','F')
graph.addEdge('E','I')
// console.log(graph);
// console.log(graph.toString());
// console.log(graph.initColor());
// let result = ''
// graph.bfs(graph.vertexes[0],function (v) {
//   result += v + ''
// })
// console.log(result);
let result = ''
graph.dfs(graph.vertexes[0],function (v) {
  result += v + ' '
})
console.log(result);