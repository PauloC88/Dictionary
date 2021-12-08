let warningMessage = document.querySelector("warning_message");
let searchResMessage = document.querySelector("search_result");

function validateFormat(input) {
  return /^[a-z]{2,35}$/.test(input);
}

function addWord() {
  // remove all previous messages from the page;
  warningMessage.innerHTML = "";
  searchResMessage.innerHTML = "";
  let word = document.getElementById("word").value;
  word = word.toLowerCase();
  let translation = document.getElementById("translation").value;
  translation = translation.toLowerCase();
  let wordList = document.getElementById("wordList");
  if (validateFormat(word) && validateFormat(translation)) {
    wordList.innerHTML += "<li class=\"word-item\">" + word + "</li><li class=\"word-item\">" + translation + "</li>";
  } else {
    warningMessage.innerHTML = "Introduceți doar litere! Minim 2, maxim 35.";
  }
  return false;
}
    
function searchWord() {
  // remove all previous messages from the page;
  warningMessage.innerHTML = "";
  searchResMessage.innerHTML = "";
  let searchedWord = document.getElementById("searchbox").value
  searchedWord = searchedWord.toLowerCase();
  let words = document.getElementsByClassName("word-item"); 
  let wordExists = 0; 
  for (i = 0; i < words.length; i += 2) { 
    if (words[i].innerText === searchedWord) {
      wordExists = 1;
    }
  }
  if (wordExists === 0) {
    searchResMessage.innerHTML = "<strong>&nbsp Cuvântul căutat nu există în dicționar!</strong><br>";
  } else {
    searchResMessage.innerHTML = "<strong>&nbsp Cuvântul căutat există în dicționar!</strong><br>";
  }
  return false;
}