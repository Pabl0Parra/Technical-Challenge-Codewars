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

// B- *****A shorter way w/out the switch*****
function filterTypes(values) {
  const result = {number: [], string: [], object: [], others: []};
  for(const value of values) {
    const type = typeof value;
    const key = value === null || !Object.hasOwn(result, type) ? "others" : type;
    result[key].push(value);
  }

  return result;
// }

// B-EXPLANATION -- Since the keys of the object match the string value I get when I use typeOf, I can use the result of calling typeof on each value to determine the key I want to push to. I can add some expectations such as if the value is null to use "others" as key instead of "object".
// If the "typeof" value isn´t in the result "object" that I´m building, choose "other" (I´ve used "Object.hasOwn() to check if the type is in the object")




// **** Using the reduce method (harder to read IMO) ****
const filterTypes = values => values.reduce((acc, value) => {
  const type = typeof value;
  const key = value === null || !Object.hasOwn(acc, type) ? "others" : type;
  return {...acc, [key]: [...acc[key], value]};
}, {number: [], string: [], object: [], others: []});

// // C-EXPLANATION -- using the .reduce() method. I´m building up an accumulated object with the spread syntax(...) which is returned from the reduce callback, that also has an updated "key" value to hold a new array with the current value. It uses the given result variable as the initial values for the reduce method 