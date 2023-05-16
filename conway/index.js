/* Créer une fonction decoupeChaine qui prend en paramètre une string et renvoie
 la même string dans laquelle les caractères successifs non identiques sont
 séparés par un espace. */

function decoupeChaine(str) {
  let chaineStr = " ";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      chaineStr += str[i] + " ";
    } else {
      chaineStr += str[i];
    }
  }
  return chaineStr;
}

const newChaine = "aaabbccccddeeff";
const chaineStr = decoupeChaine(newChaine);
console.log(chaineStr);

/*  Créer une fonction decritChaine, inspirée de decoupeChaine, qui prend en paramètre 
 une string et renvoie une string qui décrit. */

function descritChaine(str1) {
  let desc = "";
  let compte = 1;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str1[i + 1]) {
      compte++;
    } else {
      desc += compte + str1[i] + " ";
      compte = 1;
    }
  }
  return desc;
}
console.log(descritChaine(newChaine));

/* 
    Créer une fonction suiteConway qui donne les n premiers termes de la suite 
    qui commence par le caractère carac. n et carac sont passés en paramètres de la fonction.
     */

function suiteConway(carac, n) {
  let sequence = [carac]; // Tableau pour stocker les termes de la suite

  for (let i = 1; i < n; i++) {
    let count = 1; // Compteur pour le nombre d'occurrences consécutives d'un caractère
    let term = ""; // Terme courant de la suite

    // Parcours des caractères du terme précédent
    for (let j = 0; j < sequence[i - 1].length; j++) {
      if (sequence[i - 1][j] === sequence[i - 1][j + 1]) {
        // Si le caractère actuel est identique au caractère suivant,
        // on incrémente le compteur
        count++;
      } else {
        // Si le caractère actuel diffère du caractère suivant,
        // on ajoute le compteur et le caractère actuel au terme courant
        term += count + sequence[i - 1][j];
        count = 1; // On réinitialise le compteur à 1
      }
    }

    // On ajoute le terme courant au tableau de la suite
    sequence.push(term);
  }

  // On renvoie les termes de la suite concaténés avec des sauts de ligne (\n)
  //return sequence.join('\n');
  return sequence;
}
console.log(suiteConway('a', 3));
console.log(suiteConway('1', 3));


const caracDepart = "1";
const nbTermes = 5;
const sequence = suiteConway(caracDepart, nbTermes);
const pyramidContainer = document.getElementById("conway-pyramid");

for (let i = 0; i < nbTermes; i++) {
  const termElement = document.createElement("p");
  const spaces = " ".repeat(nbTermes - i - 1);
  termElement.textContent = spaces + sequence[i];
  pyramidContainer.appendChild(termElement);
}
