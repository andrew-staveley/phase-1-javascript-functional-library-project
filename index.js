const myEach = function(collection, alert) {
    for (let num of Object.values(collection)) {
        alert(num);
    };
    return collection;
};
const myMap = function(collection, callback) {
    let newCollection = [];
    myEach(collection, (x) => newCollection.push(callback(x)));
    return newCollection;
};
const myReduce = function(collection, callback, acc) {
    let startIdx = 0;
  
    if (acc === undefined) {
      if (Array.isArray(collection)) {
        if (collection.length === 0) {
          throw new Error('Cannot reduce an empty array without a start value.');
        }
        acc = collection[0];
        startIdx = 1;
      } else if (typeof collection === 'object' && collection !== null) {
        const keys = Object.keys(collection);
        if (keys.length === 0) {
          throw new Error('Cannot reduce an empty object without a start value.');
        }
        const firstKey = keys[0];
        acc = collection[firstKey];
        startIdx = 1;
      } else {
        throw new TypeError('Invalid collection type. Expected an array or an object.');
      }
    }
  
    if (Array.isArray(collection)) {
      for (let i = startIdx; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const keys = Object.keys(collection);
      for (let i = startIdx; i < keys.length; i++) {
        const key = keys[i];
        acc = callback(acc, collection[key], collection);
      }
    } else {
      throw new TypeError('Invalid collection type. Expected an array or an object.');
    }
  
    return acc;
};
const myFind = function(collection, callback) {
    for (let value of Object.values(collection)) {
        if (callback(value) === true) {
            return value;
        };
    };
};
const myFilter = function(collection , callback) {
    let finalArray = [];
    for (let value of Object.values(collection)) {
        if (callback(value) === true) {
            finalArray.push(value);
        };
    };
    return finalArray;
};