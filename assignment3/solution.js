
// Prototype - Every function in JavaScript has a 'prototype' property. It's an object that is 
// used for inheritance. Simply, all objects created from this function will inherit all methods 
// and properties.

// Prototype chain - It's a mechanism where JavaScript objects inherit features from one another. 
// When you try to access a property or a method on an object, JavaScript first looks for it on the 
// object itself. If it doesn't find it there, it will look at the object's prototype, and then 
// the prototype's prototype, and so on.

// map()
Array.prototype.myMap = function(callbackfn, thisArg) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray[i] = callbackfn(thisArg, this[i], i, this);
    }
    return newArray;
}
// test myMap
const arrForMap = [1, 2, 3, 4, 5, 6];
const mappedArr = arrForMap.myMap((value, index, array) => {
    return value * 2;
});
// console.log(mappedArr);


// filter
Array.prototype.myFilter = function(predicate, thisArg) {
    let newArray = [];
    let j = 0;
    for (let i = 0; i < this.length; i++) {
        if (predicate(thisArg, this[i], i, this) === true) {
            newArray[j] = this[i];
            j++;
        }
    }
    return newArray;
}
// test myFilter
const arrForFilter = [1, 2, 3, 4, 5]
const resultOfFilter = arrForFilter.myFilter((elem) => elem % 2 === 0);
// console.log(resultOfFilter);


// reduce
Array.prototype.myReduce = function(callbackfn, initialValue) {
    if (this.length === 0 && initValue !== undefined) {
        return initValue;
    }
    if (this.length === 1 && initValue === undefined) {
        return this[0];
    }
    let accumulator;
    let i;
    if (initialValue !== undefined) {
        accumulator = initialValue;
        i = 0;
    } else {
        accumulator = this[0];
        i = 1;
    }

    for (i; i < this.length; i++) {
        accumulator = callbackfn(accumulator, this[i], i, this);
    }
    return accumulator;
}
// test myReduce
const arrForReduce = [1, 2, 3, 4, 5];
const initValue = 20;
const resultOfReduce = arrForReduce.myReduce((accumulator, currentValue) => accumulator + currentValue, initValue);
// console.log(resultOfReduce);


// every
Array.prototype.myEvery = function(predicate, thisArg) {
    for (let i = 0; i < this.length; i++) {
        if (predicate(thisArg, this[i], i, this) === false) {
            return false;
        }
    }
    return true;
}
// test myEvery
const arrForEvery = [1, 2, 3, 4, 5];
const resultOfEvery = arrForEvery.every((element) => element > 0);
// console.log(resultOfEvery);


// find()
Array.prototype.myFind = function(predicate, thisArg) {
    for (let i = 0; i < this.length; i++) {
        if (predicate(thisArg, this[i], i, this) === true) {
            return this[i];
        }
    }
    return undefined;
}
// test myFind
const arrForFind = [1, 2, 3, 4, 5];
const resultOfFind = arrForFind.myFind((value, index, arr) => value === 3);
// console.log(resultOfFind);


// includes
Array.prototype.myIncludes = function(searchElement, fromIndex) {
    let i = 0;
    if (fromIndex !== undefined) i = fromIndex;
    for (i; i < this.length; i++) {
        if (searchElement === this[i]) {
            return true;
        }
    }
    return false;
}
// test myIncludes
const arrForIncludes = [1, 2, 3, 4, 5];
const resultOfIncludes = arrForIncludes.myIncludes(2, 1);
// console.log(resultOfIncludes);


// join
Array.prototype.myJoin = function(seperator) {
    let result = this[0]+"";
    let sep = seperator;
    if (seperator === undefined) sep = ',';
    for (let i = 1; i < this.length; i++) {
        result += sep + this[i];
    }
    return result;
}
// test myJoin
const arrForJoin = [1, 2, 3, 4, 5];
const resultOfJoin = arrForJoin.myJoin('-');
// console.log(resultOfJoin);


// pop()
Array.prototype.myPop = function() {
    if (this.length == 0) {
        return undefined;
    }
    let newArray = this.slice(0, this.length - 1);
    const poppedElem = this[this.length - 1];

    this.length = newArray.length;
    newArray.forEach((value, index) => {
        this[index] = value;
    });
    return poppedElem;
};
// test myPop
const arrForPop = [1, 2, 3, 4, 5];
// console.log(arrForPop);
const returnedPop = arrForPop.myPop();
// console.log(returnedPop);
// console.log(arrForPop);


// push
Array.prototype.myPush = function(...items) {
    let newArray = [...this, ...items];
    this.length = newArray.length;
    newArray.forEach((val, index) => {
        this[index] = val;
    });
    return this.length;
}
// test myPush
const arrForPush = [5, 4, 3, 2, 1];
const newLenOfArray = arrForPush.myPush(100, 'hello');
// console.log(arrForPush, newLenOfArray);


// reverse
Array.prototype.myReverse = function() {
    let l = 0, r = this.length - 1;
    while (l < r) {
        let temp = this[l];
        this[l] = this[r];
        this[r] = temp;
        l++;
        r--;
    }
    return this;
}
// test myReverse
const arrToReverse = [1, 2, 3, 4, 5, "hello world"];
const ref = arrToReverse.reverse();
// console.log(arrToReverse, ref === arrToReverse);


// slice
Array.prototype.mySlice = function(paramStart, paramEnd) {
    let start = paramStart;
    let end = paramEnd;
    let newArray = [];
    if (paramStart === undefined) start = 0;
    if (paramEnd === undefined) end = this.length;
    if (paramStart < 0) start = this.length + paramStart;
    if (paramEnd < 0) end = this.length + paramEnd;
    if (end < start) return newArray;
    if (start < 0) return this;
    let j = 0;
    for (start; start < end; start++) {
        newArray[j] = this[start];
        j++;
    }
    return newArray;
}
const arrForSlice = [1, 2, 3, 4, 5, 6];
const slicedArr = arrForSlice.mySlice(-3, -1);
// console.log(slicedArr);


// sort
Array.prototype.mySort = function(compareFn){
    const swap = (arr, i, j) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    const partition = (arr, low, high) => {
        let pivot = arr[high];

        let i = (low - 1);
        for (let j = low; j <= high; j++) {
            if (arr[j] < pivot) {
                i++;
                swap(arr, i, j);
            }
        }
        swap(arr, i + 1, high);
        return (i + 1);
    }

    const quickSort = (arr, low, high) => {
        if (low < high) {
            const pivot_location = partition(arr, low, high);
            quickSort(arr, low, pivot_location - 1);
            quickSort(arr, pivot_location + 1, high);
        }
    }
    let newArray = [];
    this.length = newArray.length;
    newArray = quickSort(this, 0, this.length - 1);
    newArray.forEach((value, index) => {
        this[index] = value;
    });
}

const array1 = [3, 1, 9, 5];
console.log(array1.mySort());