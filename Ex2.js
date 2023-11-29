const findSumOfTopTwoIntegers=(numbers)=>{
    if (!numbers || numbers.length < 2) {
      return "There is no top 2 numbers";
    }
    let min = -Infinity;
    let max1 = -Infinity;
    let max2 = -Infinity;
  
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max1) {
            max2 = max1;
            max1 = numbers[i];
          } else if (numbers[i] > max2) {
            max2 = numbers[i];
          }
      if (numbers[i] < min){
        min = numbers[i]
      }
    }

  
    if (max1 === max2 === min) {
      return  "There is no top 2 numbers";
    }
  
    return max1 + max2;
  }
  
  const numbers = [2,2 , 2, 1, 2];
console.log(findSumOfTopTwoIntegers(numbers)); // Expected output: 4
// Test
const testFindSumOfTopTwoIntegers=()=>{
    // Test case 1: Empty array
    let numbers = [];
    console.log(findSumOfTopTwoIntegers(numbers)); // Expected output: "There is no top 2 numbers"
  
    // Test case 2: Array with only one element
    numbers = [1];
    console.log(findSumOfTopTwoIntegers(numbers)); // Expected output: "There is no top 2 numbers"
  
    // Test case 3: Array with two elements
    numbers = [4, 2];
    console.log(findSumOfTopTwoIntegers(numbers)); // Expected output: 6
  
    // Test case 4: Array with multiple elements
    numbers = [1, 2, 3, 4, 5];
    console.log(findSumOfTopTwoIntegers(numbers)); // Expected output: 9
  
    // Test case 5: Array with multiple equal numbers
    numbers = [10, 10, 10, 10,20,10];
    console.log(findSumOfTopTwoIntegers(numbers)); // Expected output: 30
  }
  
  testFindSumOfTopTwoIntegers();
