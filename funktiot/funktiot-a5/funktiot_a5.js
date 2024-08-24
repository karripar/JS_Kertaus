'use strict';

/**Enhance the existing sortArray function to include an additional parameter that defines whether the array should be sorted in ascending or descending order.

Create a function called sortArray that takes two parameters: numbers (an array of numbers) and order (a string indicating the sorting order).

If the order parameter is set to "asc" (ascending), the function should sort the numbers array in ascending order.

If the order parameter is set to "desc" (descending), the function should sort the numbers array in descending order.

Return a new array with the sorted numbers.

Test the function by passing different arrays and sorting orders.

*/

function sortArray(array, ord) {
    const sorted = array;
    if (ord === "asc") {
        sorted.sort((a, b) => a - b);
    } else if (ord === "desc") {
        sorted.sort((a, b) => b - a);
    } else {
        console.dir("Invalid parameter, fix it!")
        return
    }
    return sorted;
}

const numbers = [2, 42, 4, 64, 13, 12, 31, 21, 22, 100];
console.dir(`Original: ${numbers}`);
console.dir(`Sorted (ascending): ${sortArray(numbers, "asc")}`);
console.dir(`Sorted (descending): ${sortArray(numbers, "desc")}\n`);

const numbers2 = [3, 53, 23, 22, 1, 5, 14, 13, 99, 65, 72];
console.dir(`Original: ${numbers2}`);
console.dir(`Sorted (ascending): ${sortArray(numbers2, "asc")}`);
console.dir(`Sorted (descending): ${sortArray(numbers2, "desc")}\n`);