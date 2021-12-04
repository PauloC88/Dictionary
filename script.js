function addWord() {
  var word = document.getElementById("word").value;
  word = word.toLowerCase();
  var translation = document.getElementById("translation").value;
  translation = translation.toLowerCase();
  let div1 = document.querySelector("div1");
  div1.innerHTML = "";
  let div2 = document.querySelector("div2");
  div2.innerHTML = "";
  let div3 = document.querySelector("div3");
  div3.innerHTML = "";
  var theList = document.getElementById("wordList");
  if (/^[a-z]{2,35}$/.test(word) && /^[a-z]{2,35}$/.test(translation)) {
    theList.innerHTML += "<li class=\"word-item\">" + word + "</li><li class=\"word-item\">" + translation + "</li>";
  } else {
    div1.innerHTML = "Introduceți doar litere! Minim 2, maxim 35.";
  }
  return false;
}
    
function searchWord() {
  let input = document.getElementById("searchbox").value
  input = input.toLowerCase();
  if (/^[a-z]{2,35}$/.test(input)) {
    let wordlist = document.getElementsByClassName("word-item"); 
    let wordExists = 0; 
    for (i = 0; i < wordlist.length; i += 2) { 
      if (wordlist[i].innerText === input) {
        wordExists = 1;
      }
    }
    let div1 = document.querySelector("div1");
    div1.innerHTML = "";
    let div2 = document.querySelector("div2");
    div2.innerHTML = "";
    let div3 = document.querySelector("div3");
    div3.innerHTML = "";
    if (wordExists === 0) {
      div3.innerHTML = "<strong>&nbsp Cuvântul căutat nu există în dicționar!</strong><br>";
    } else {
      div3.innerHTML = "<strong>&nbsp Cuvântul căutat există deja în dicționar!</strong><br>";
    }
  } else {
    div2.innerHTML = "Introduceți doar litere! Minim 2, maxim 35.";
  }
  return false;
}