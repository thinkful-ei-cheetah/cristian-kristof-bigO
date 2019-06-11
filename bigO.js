// 'use strict';

// // 1. 1) O(1) 
// //    2) o(n)

// // 2. o(1) bc you're operating on the value once to check its value % 2

// // 3. o(n^2) nested loops require operating on each item multiple times

// // 4. o(n) one operation (doubling) is done per item in an array

// // 5. o(n) each item in the array is checked once and evaluated for a match on the item

// // 6. o(n^2) nested loops require operating on each item multiple times

// // 7. returning an array of the fibonacci sequence (where the previous two numbers in a seq are added to find the next number). 
// //    o(n) each set of operations (evaluation + pushing into array) is done once per value. 

// // 8. o(log n) the array is split in half at the midpoint of the dataset and then only half of array is evaluated

// // 9. o(1) only one item is returned from the array at a random index so the size of the dataset does not matter. 

// // 10. evaluates whether a number is prime. 
// //     o(n) worst case, if a number is prime it has to check all the numbers up to itself. 


// // 11. 
// // input: number of disks
// // output: string of instructions

// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// // function sheepCount(num){
// //   let x = 0;

// //   while (x < num){
// //     console.log(`${x+1}: Another sheep jumped over the fence`);
// //     x++;
// //   }
// //   console.log('All the sheep jumped over the fence');
// // }
// // sheepCount(4);


// // // 2. Power Calculator

// // function powerCalculator(base, pwr){
// //   if (pwr < 0 ) return false;
// //   if (pwr === 0) return 1;
// //   let result = base;
// //   for(let x = 1; x < pwr; x++){
// //     result *= base;
// //   }
// //   return result;
// }

// //
// // function reverseString(str){
// //   let result = '';
// //   for (let x = str.length - 1; x !== -1; x--){
// //     result += str[x];
// //   }
// //   return result;
// // }



// // function reverseString(str) {
// //   let result = ''
// //   for (let i = str.length-1; i >= 0; i--) {
// //     result += str[i]
// //   }
// //   return console.log(result)
// // }

// // reverseString('johnny')



// //Prob 4

// // function triangleNumber(num){
// //   if (num === 1) return 1;
// //   let result = 0;
// //   for(let x = 0; x <= num; x++){
// //     result += x;
// //   }
// //   return result;
// // }


// // // 5. String Splitter

// // function stringSplitter(str, splitter){
// //   let result = '';
// //   for (let x = 0; x < str.length; x++){
// //     if(str[x] === splitter) continue;
// //     result += str[x];

// //   }
// //   return result;
// // }




// // // 6. Fibonacci


// // function compute(num) {
// //   let result = [];
// //   for (let i = 1; i <= num; i++) {

// //     if (i === 1) {
// //       result.push(0);
// //     }
// //     else if (i == 2) {
// //       result.push(1);
// //     }
// //     else {
// //       result.push(result[i - 2] + result[i - 3]);
// //     }
// //   }
// //   return result;
// // }

// // // 7. Factorial
// // function factorial(num){
// // let result = 1;

// //   for (let x = 1; x <= num; x++){
// //     result *= x;
// //   }
// //   return result;
// // }

// // // 13. recursive big O

// // 1. o(n) one recursion call per number sheep 
// // 2. o(n) one set of operations (recursion call + multiplying by base)
// // 3. o(n) 
// // 4. o(n)
// // 5. o(n)
// // 6. o(2^n) two recursive calls are done for every number
// // 7. o(n)
// // 8. o(2^n)
// // 9. o(2^n)
// // 10. o(n^2)
// // 11. o(n^2)
// // 12. o(n)

// // 14. all are o(n)

function towerOfHanoi(n, start, last, temp){
  
  if (n === 1){
    console.log(`Move from ${start} to ${last}`)
    return
  } 
    towerOfHanoi(n - 1, start, temp, last)
    console.log(`Move from ${start} to ${last}`)
    towerOfHanoi(n - 1, temp, last, start)
}

towerOfHanoi(4, 'A', 'C', 'B')