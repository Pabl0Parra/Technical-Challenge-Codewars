export function maybeDisemvowel(input) {
  // Store what we need in variables. The [^xyxy] means NOT those characters, -i flag = case-insensitive, -g matches all ocurrences.
  const onlyConsonants = input.replace(/[^bcdfghjklmnpqrstvwxys]/gi, "");
  const onlyVowels = input.replace(/[^aeoiu]/gi, "");
  const withoutVowels = input.replace(/[aeoiu]/gi, "");
  // Check if it´s true or not that there are more consonants than vowels in the string.
  const shouldReturnOriginal = onlyConsonants.length > onlyVowels.length;
  // if shouldReturnOriginal = true --> return original input.
  return shouldReturnOriginal
    ? input
    : // if it is false --> return string w/out vowels, trim whitespaces from start & end & also replace ("\s") any whitespace from the string.
      withoutVowels.trim().replace(/\s+/g, " ");
}

//*** Notes */

// 1. Variable with only consonants
// 2. Variable with only vowels
// Need those values so that we can check which one is bigger in order to return what it is requested.
// 3. Another variable to store the string without vowels
// 4. Check if there are more vowels than consonants in string
// 5. If more consonants --> return original string
// 6. If more vowels --> return string w/out vowels & make sure there are no excess whitespace (preserving spaces between words)

// ***Regex reference***
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
// https://bobbyhadz.com/blog/javascript-remove-vowels-from-string
