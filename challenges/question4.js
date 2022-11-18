export function maybeDisemvowel(input) {
  // Store what we need in variables. The ^ means NOT, -i flag = not case sensitive, -g matches all ocurrences.
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
