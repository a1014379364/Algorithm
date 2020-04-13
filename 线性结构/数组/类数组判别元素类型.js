function type(target) {
  var template = {
    "[object Array]" :"array",
    "[object Object]" : "object",
    "[object Number]" : "number - object",
    "[object Boolean]" : "boolean - object",
    "[object String]" : "string - object"
  }
  if(target === null) {
    return null
  }
  if(typeof target == "object"){
    let str = Object.prototype.toString.call(target)
    return template[str]
  }else{
    return typeof target
  }
}