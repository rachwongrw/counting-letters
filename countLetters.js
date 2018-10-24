function countLetters(word) {
  word = word.split(" ").join(""); // this will get rid of the spaces and not count them
  var count = {}; // this will create an object
  for (var i = 0; i < word.length; i++) {
    if(word[i] in count) {
      count[word[i]] += 1; // this will fire when there is a key in the object and add each instance it comes across the same letter
    } else {
      count[word[i]] = 1; // this will fire first in the if statement, as there is no key yet. this creates a key and assigns it a value of 1.
    }
  }
  return count;
}

console.log(countLetters("lighthouse in the house"));
