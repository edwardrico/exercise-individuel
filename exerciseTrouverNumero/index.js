// const win = 22;

// function rentreNombre() {
//   let givenNumber = parseInt(prompt(" puvais vous stp rentre un nombre "));
//   return givenNumber;
// }

// function didIWin(givenNumber) {
//   if (givenNumber < win) {
//     alert(" le nombre est plus petite ( false ) ");
//   }
//   return flase;
//   elseif(givenNumber > win);
//   {
//     alert(" le nombre est plus grand ( false ) ");
//   }
//   elseif(givenNumber == win);
//   {
//     alert(" tu as gagné ( true ) ");
//     return true;
//   }
//   return false;
// }

const winNumber = 22;

function askNumber() {
  return parseInt(prompt("Entre un chiffre, stp"));
}

function didIWin(tata) {
  if (tata == winNumber) {
    alert("Bravo, tu as gagné");
    return true;
  } else if (tata < winNumber) {
    alert("C'est plus grand");
  } else {
    alert("C'est plus petit");
  }
  return false;
}

function gamePlay() {
  let number = 0;
  let stock = false;
  do {
    number = askNumber();
    stock = didIWin(number);
  } while (stock == false);
}

gamePlay();
