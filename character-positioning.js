function cPosition(word) {
  word = word.split(" ").join("");
  var count = {};
  for (var i = 0; i < word.length; i++) {
    if(word[i] in count) {
      var array = count[word[i]];
      array.push(i);
    } else {
      count[word[i]] = [i];
    }
  }
  return count;
}

console.log(cPosition("lighthouse in the house"));

/* with no spaces - expected output
{ l: [ 0 ],
  i: [ 1, 10 ],
  g: [ 2 ],
  h: [ 3, 5, 13, 15 ],
  t: [ 4, 12 ],
  o: [ 6, 16 ],
  u: [ 7, 17 ],
  s: [ 8, 18 ],
  e: [ 9, 14, 19 ],
  n: [ 11 ] }

*/

