// 1. 1) O(1) 
//    2) o(n)

// 2. o(1) bc you're operating on the value once to check its value % 2

// 3. o(n^2) nested loops require operating on each item multiple times

// 4. o(n) one operation (doubling) is done per item in an array

// 5. o(n) each item in the array is checked once and evaluated for a match on the item

// 6. o(n^2) nested loops require operating on each item multiple times

// 7. returning an array of the fibonacci sequence (where the previous two numbers in a seq are added to find the next number). 
//    o(n) each set of operations (evaluation + pushing into array) is done once per value. 

// 8. o(log n) the array is split in half at the midpoint of the dataset and then only half of array is evaluated

// 9. o(1) only one item is returned from the array at a random index so the size of the dataset does not matter. 

// 10. evaluates whether a number is prime. 
//     o(n) worst case, if a number is prime it has to check all the numbers up to itself. 


// 11. 
// input: number of disks
// output: string of instructions

function setRodA(numDisks, rodA=[]) {
  for (let i = numDisks; i > 0; i--) {
    rodA.push(i)
  }
  return console.log(rodA)
}

setRodA(5);

function towerOfHanoi(rodA=[], rodB=[], rodC=[], steps=[], moveTo='') {
  
}

