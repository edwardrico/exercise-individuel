/*Créez une fonction parseTrip(trip) qui prend une ligne du même 
format que les lignes de l'exemple, la décompose en mot (séparés 
par un espace) puis range ces mots dans une structure de donnée que 
vous déterminerez.*/

let tripToParse = "Perdita 8 10 8";

function parseTrip(trip) {
  //
  let myTableau = trip.split(" ");
  //console.log(myTableau);
  let myObject = {
    client: myTableau[0],
    start: myTableau[1],
    duration: myTableau[2],
    price: myTableau[3],
  };
  return myObject;
}
//console.log(parseTrips(tripsToParse))

//Mais vous n'avez pas qu'un seul voyageur par jour, il nous faut donc passer
// à la vitesse supérieure.
//Utilisez la fonction `parseTrip(trip)` dans une autre fonction `parseTrips(trips)`
// prenant en entrée une journée complète (donc plusieurs lignes) et retournant une
// liste de structures `trips` définies précédemment  (`[]`).

let tripsToParse = [
  "Roger 0 5 10",
  "Pongo 3 7 14",
  "Perdita 8 10 8",
  "Anita 16 3 7",
];
// on cree un function avec une parametre (trip) que pour l'instant
// il y pas de valeur.
function parseTrips(trips) {
  // on cree un variable, tableau sans index pour l'instant
  let myArray = [];
  console.log(myArray);
  // on cree on boucle for la quelle on l'explique que si trips est majeur que i=0
  // alors i++ parcourire le tableau
  for (let i = 0; i < trips.length; i++) {
    // on cree une variable element la quelle va prend la valeur de notre
    // premiere function et le parametre de la dexiemen plus l'index du tableau [i]
    const element = parseTrip(trips[i]);
    // on puse dans notre tableau myArray tput la funtionalite de notre premiere
    // function que c'est la vqriqble element
    myArray.push(element);
  }
  // on fait un return de myArray que c'est notre tableau
  return myArray;
}

console.log(parseTrips(tripsToParse));

/*Pour optimiser vos journées, vous décidez d'écrire un code calculant l'enchaînement
 de clients le plus intéressant financièrement.
Créez une fonction `getTripsPrice` qui accepte en argument une liste de `voyages`
 et retourne la somme des prix de cet ensemble de `voyages`.*/

function getTripsPrice(trips) {
  let voyages = 0;
  for (const element of trips) {
    voyages += element.price;
  }
  return voyages;
}
console.log(
  getTripsPrice([
    { client: "Roger", start: 0, duration: 5, price: 10 },
    { client: "Pongo", start: 3, duration: 7, price: 14 },
  ])
);

/*Créez une fonction `checkCompatibility(tripA, tripB)` qui comparent deux structures 
`voyages` et retourne un booléen déterminant si les structures sont compatibles ou non.
Il s'agit de déterminer si un vol (représenté par une structure `trips`) 
n'empiète pas sur les horaires d'un autre.*/

const a = [
  { client: "Roger", start: 0, duration: 5, price: 10 },
  { client: "Pongo", start: 3, duration: 7, price: 14 },
];

const b = [
  { client: "Roger", start: 0, duration: 5, price: 10 },
  { client: "Perdita", start: 8, duration: 10, price: 8 },
];

function checkCompatibility(tripA, tripB) {
  myTemp = 0;
  for (const element of Object.keys(tripA)) {
    myTemp = tripA.start + tripA.duration;
    if (myTemp <= tripB.start) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(checkCompatibility(a, b));

/*Développez une fonction `findCompatibilities(trips)` qui retourne, à partir d'une liste de **voyages**, tous les ensembles de voyages compatibles les uns avec les autres.
En partant de l'exemple original, cette fonction retournerait alors*/
let myComparative = [
  { client: "Roger", start: 0, duration: 5, price: 10 },

  { client: "Pongo", start: 3, duration: 7, price: 14 },

  { client: "Perdita", start: 8, duration: 10, price: 8 },

  { client: "Anita", start: 16, duration: 3, price: 7 },
];

function findCompatibilities(trips) {
  let myTab = [];
  for (let i = 0; i < trips.length; i++) {
    const element1 = trips[i];

    for (let y = 0; y < trips.length; y++) {
      const element2 = trips[y];

      if (checkCompatibility(element1, element2) == true) {
        myTab.push([element1, element2]);
        //console.log(element2);
      }
    }
  }
  return myTab;
}
console.log(findCompatibilities(myComparative));

/*Développez une dernière fonction `findBestPrice(trips)`, qui renverra le combo ou le voyage seul qui rapportera le plus à votre entreprise.
Vous avez alors tous les outils pour déterminer, à partir d'une chaîne de caractères des vols d'une journée, la liste optimale des clients à 
transporter, les horaires de leurs vols, ainsi que votre gain !
PS: 
Avec l'exemple précédent, la meilleur combinaison est Pongo (3h -> 10h) et Anita (16h -> 19h) car 14 + 7 = 21.*/

// function findBestPrice(trips)

// let myVoy = findCompatibilities(myComparative)
// //console.log(myVoya);
// for (let i = 0; i < myVoya.length; i++) {
//   const element = myVoy[i];
//   if ( )
//   console.log(element);
//   //if ( element)
  
// }