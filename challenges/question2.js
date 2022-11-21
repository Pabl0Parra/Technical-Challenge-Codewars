export function filterTypes(values) {
  const result = {
    number: [],
    string: [],
    object: [],
    others: [],
  };
  // for-of loop to iterate through all cases & push values to the correct type
  for (const value of values) {
    switch (typeof value) {
      case "number":
        result.number.push(value);
        break;
      case "string":
        result.string.push(value);
        break;
      case "object":
        // null is a falsy object so if null --> push to others, otherwise push to object
        value === null ? result.others.push(value) : result.object.push(value);
        break;
      default:
        // undefined, bigint, symbol, boolean, function
        result.others.push(value);
    }
  }

  return result;
}
