# WORD_COUNTER

Projeto feito para a disciplina de Programação Web do curso de Sistemas para Internet.

Tecnologias utilizadas:
- HTML
- CSS
- JavaScript
- JSON


## ÍNDICE
* [Utilizando o projeto](#Utilizando-o-projeto)
* [Métodos do projeto](#Métodos-do-projeto)
* [Utilizando](#Utilizando)

## Utilizando o projeto

Para utilizar o projeto execute:

```
git clone 
```

# Métodos do projeto

Conta a quantidade de palavras:

```js
function countWords(str) {
  const arr = str.split(' ');
  
  return arr.filter(word => word !== '').length;
  
}
```  

Conta quantas vezes a palvra foi repetida:

```js
function countRepeatedWords() {
  let sentence = document.getElementById("send").value;
  let words = sentence.split(' ');
  let wordMap = {};

  for (let i = 0; i < words.length; i++) {
    let currentWordCount = wordMap[words[i]];
    let count = currentWordCount ? currentWordCount : 0;
    wordMap[words[i]] = count + 1;
  }  
```

Projeto feito por: Gabriele Ferreira, Ian Oliveira, Thayna Santana, Emily Yasmin e Juliana Aguiar
