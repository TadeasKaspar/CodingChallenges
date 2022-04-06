// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  let strSplit = str.split(" ");
  let words = [];
  for (let i = 0; i < strSplit.length; i++) {
    words.push(strSplit[i].split("").reverse());
    words.push(" ");
  }
  return words.flat().join("").slice(0, -1);
}
