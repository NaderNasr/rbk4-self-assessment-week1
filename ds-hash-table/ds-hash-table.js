var makeHashTable = function() {
  //Do not change the max!
  var max = 4;



//check if there is a value according to the key
// Check if there is a value in the index onwards
// if there is a value in the specified index, return the value
  return{
    _storage: []
    insert : function(key, value){
      var index = hashFn(key, max)
      if(this._storage[index] === undefined){
        this._storage[index] = [[key,value]]
      } else {
        this._storage[index].push([key,value]);
      }
    }



//check if there is a value according to the key
//if there is a value return the value
//if there isnt a value
    retrieve : function(key){
      var index = hashFn(key, max)
      for (var i = 0; i < this._storage[index].length; i++) {
        if(this._storage[index][i][0] === key){
          return this._storage[index][i][1]
        }
      }
    }
  }


//     return {
//       _storage: [],
//       retrieve: function(key) {
//         return this._storage[hashFn(key, max)];
//       },
//
//       insert: function(key, value) {
//         //your code is here
//         //insert or add key and value into hash table.
//
//         var Object.create(obj)
//
//         this._storage.push(obj)
//         this._storage[hashFn(key, max)] = value;
//     }
//   }
// };

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};
