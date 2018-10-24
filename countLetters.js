function countLetters(word) {
  word = word.split(" ").join("");
  var count = {};
  for (var i = 0; i < word.length; i++) {
    if(word[i] in count) {
      count[word[i]] += 1;
    } else {
      count[word[i]] = 1;
    }
  }
  return count;
}

console.log(countLetters("lighthouse in the house"));
