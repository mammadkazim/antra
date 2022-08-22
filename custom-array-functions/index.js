// myMap
Array.prototype.myMap = function (callback) {
  let mappedArray = [];
  for (let i = 0; i < this.length; i++) {
    mappedArray.push(callback(this[i], i, this));
  }
  return mappedArray;
};

let myArray = [1, 2, 3, 4, 5, 6, 7];
console.log(myArray.myMap((item, index) => item * 2 + index)); // [2,5,8,11,14]

// myFilter
Array.prototype.myFilter = function (callback) {
  let filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this) && filteredArray.push(this[i]);
  }
  return filteredArray;
};

let myArray2 = [1, 2, 3, 4, 5, 6];
console.log(myArray2.myFilter((item, index) => item % 2 === 0)); // [2,4,6]

// myForEach
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

let myArray3 = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
myArray3.myForEach((item) => (sum += item));
console.log(sum);

//myReduce
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  if (initialValue) {
    if (this.length === 0) return accumulator;
    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  } else {
    if (this.length === 0)
      throw new TypeError("Reduce of empty array with no initial value");
    else if (this.length === 1) return this[0];
    else {
      accumulator = this[0];
      for (let i = 1; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
      }
    }
  }
  return accumulator;
};

let myArray4 = ["K", "a", "z", "i", "m"];
console.log(myArray4.myReduce((acc, cur) => acc + cur, "My name is "));
