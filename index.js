let numbers = [1, 4, 8, 7, 0, 20, 5, 6];
console.log(numbers);
console.log("array length = ", numbers.length - 1);
console.log("typeof = ", typeof numbers);
numbers[numbers.length] = 55;
numbers[numbers.length] = 25;
console.log("new array = ", numbers);

// add item to akhare array
numbers.push(41);
console.log("new array with push = ", numbers);

// add item to avale array
numbers.unshift(14);
console.log("new array with unshift = ", numbers);

// remove item as akhar array
numbers.pop(25);
console.log("new array with pop = ", numbers);

// remove item as avale array
numbers.shift(4);
console.log("new array with shift = ", numbers);