// your code here
//retrieve the fist and last elements in the array
//extension

// var arr = []
// var this.first = arr[0]
// var this.last = arr[arr.length - 1]
// function extndArr (){

Array.prototype.first = function (){

  return this[0]
}

Array.prototype.last = function(){
  return this[this.length - 1]
}
  //return arr
// }
