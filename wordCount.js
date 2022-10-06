let wordMap;

function countRepeatedWords() {
  let sentence = document.getElementById("send").value;
  let words = sentence.split(' ');
  let wordMap = {};

  for (let i = 0; i < words.length; i++) {
    let currentWordCount = wordMap[words[i]];
    let count = currentWordCount ? currentWordCount : 0;
    wordMap[words[i]] = count + 1;
  }

let sortable = [];
  for (var word in wordMap){
  sortable.push([word, wordMap[word]]);
}
const sorted_words = sortable.sort((a, b) => b[1] - a[1]);
  
console.log(sorted_words);

document.getElementById('id').innerHTML = JSON.stringify(sorted_words);
return wordMap;
  
}

 
function countWords(str) {
  const arr = str.split(' ');
  
  return arr.filter(word => word !== '').length;
  
}


const btn = document.querySelector("#name");

btn.addEventListener("click", function(e) {
    e.preventDefault();
    const name = document.querySelector("#send");
    const value = name.value;
    console.log(countWords(value));
    document.getElementById('id1').innerHTML = JSON.stringify(countWords(value));
});


