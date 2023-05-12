

const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

function getLatinCharacterList(carat) {
  console.log(carat.split(""));
  return carat.split("");
}
getLatinCharacterList("hello, word");


function translateLatinCharacter(character) {
  console.log(latinToMorse[character]);
  return latinToMorse[character];
}
//translateLatinCharacter("A");

function encode(texte) {
  let translateLatinCharacter = getLatinCharacterList(texte);
  let morseText = "";
  for (i = 0; i < translateLatinCharacter.length; i++) {
    morseText += translateLatinCharacter(latinCharacterList[i]);
  }
  console.log(morseText);
  return morseText;
}
encode(texte);
