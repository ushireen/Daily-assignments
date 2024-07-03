// Tasks
// 1.Array Initialization
// Create an array of 10 random integers between 1 and 100
// Solution
let Array1 = [2, 67, 45, 4, 9, 75, 22, 27, 34, 69,];

// 2. Array Manipulation
// Adding a new number to the end of the array using push
Array1.push(85);
console.log(Array1); //prints the output on the console

// Removing the last element from the array using pop
Array1.pop();
console.log(Array1);

// Adding a new number to the begining of the array using unshift
Array1.unshift(20);
console.log(Array1);

// removing the first number from the array using shift
Array1.shift();
console.log(Array1);

//  3.Array Sorting
// Sort an array in ascending order using sort
let join = Array1.join();
let ascend = Array1.sort((a, b) => a - b);
console.log(" Sorted in ascending order " + ascend);

// Sort an array in descending order using sort
let join1 = Array1.join();
let descend = Array1.sort((a, b) => b - a);
console.log(" Sorted in descending order " + descend);

// 4. Array Iteration
// Iterate over the array and print each element using forEach

Array1.forEach((item) => console.log(item));

//5. Array Transformation
// Using Map
 let array2 = [ 3, 4, 8, 12, 14];
 let  square = array2.map(squr => squr ** 2);
 console.log(square);

//  6. Array Filtering
// using Filter
array3 = [ 8, 4, 5, 9, 25, 6];
let even = array3.filter((item) => item % 2 === 0);
console.log(even);

// 7.Array Reduction
// using reduce
sum = array3.reduce((accumulator, current) => accumulator + current);
console.log(sum);



