export function mergeArrays(array1, array2) {
  // The reduce() function iterates through each item in the array, and for each item it calls a callback function, (acc, b), which takes two arguments: the current accumulator value and the current item.
  return array1.reduce((acc, b) => {
    // finds the index of the item in array1 that has the same Id as the current item in array2, and assigns that index to the variable index.
    const index = acc.findIndex((item) => item.Id === b.Id);
    // If the index is not negative, that means there is a match, and so this line assigns a new object to the variable newObj.
    if (index > -1) {
      //The newObj object has the same Id as the current item in array2, and it also has the value of the accumulator from the previous iteration of the reduce() function.
      const newObj = Object.assign(b, acc[index]);
      // sets the accumulator for the current iteration to the newObj object.
      acc[index] = newObj;
      // returns the accumulator from the previous iteration of the reduce() function.
      return acc;
    }
    // If there is no match, that means the current item in array2 is unique, and so this line returns an array consisting of the current item in array1 and the current item in array2.
    return [...acc, b];
    //inital value of reduce is array2
  }, array2);
}
