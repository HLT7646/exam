const findMostCommonLength = (strings)=>{
    if (!strings || strings.length === 0) {
      return null;
    }

    const lengthCounts = {};
    
    for (let i = 0; i < strings.length; i++) {
      const length = strings[i].length;
      if (lengthCounts[length]) {
        lengthCounts[length]++;
      } else {
        lengthCounts[length] = 1;
      }
    }
  
    // Find the maximum count
    let maxCount = 0;
    for (const length in lengthCounts) {
      if (lengthCounts[length] > maxCount) {
        maxCount = lengthCounts[length];
      }
    }
  
    // Find the lengths with the maximum count
    const mostCommonLengths = [];
    for (const length in lengthCounts) {
      if (lengthCounts[length] === maxCount) {
        mostCommonLengths.push(parseInt(length));
      }
    }
  
    return mostCommonLengths;
  }
  const strings = ['a','b','c','d','ee','ff','gg','tt'];
  const mostCommonLengths = findMostCommonLength(strings);
  console.log(mostCommonLengths);
  // Unit Test 
  const testFindMostCommonLength=()=> {
    // Test case 1: Empty array
    let strings = [];
    console.log(findMostCommonLength(strings)); // Expected output: null
  
    // Test case 2: Array with one string of length 3
    strings = ['abc'];
    console.log(findMostCommonLength(strings)); // Expected output: 3
  
    // Test case 3: Array with multiple strings of different lengths
    strings = ['a', 'ab', 'abc', 'cd', 'def', 'gh'];
    console.log(findMostCommonLength(strings)); // Expected output: 2
  
    // Test case 4: Array with multiple strings of the same length
    strings = ['cat', 'dog', 'bat'];
    console.log(findMostCommonLength(strings)); // Expected output: 3
  }
  testFindMostCommonLength();
