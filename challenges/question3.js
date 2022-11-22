export function mergeArrays(array1, array2) {
  // reduce method
  return array1.reduce((acc, b) => {
    const index = acc.findIndex((item) => item.Id === b.Id);
    if (index > -1) {
      const newObj = Object.assign(b, acc[index]);
      acc[index] = newObj;
      return acc;
    }
    //if we don't find anything, it means "b" is an unique entry
    return [...acc, b];
    //inital value of reduce is array2
  }, array2);
}
