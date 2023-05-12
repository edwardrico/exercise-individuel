/* const paysE = {

    pays:"venezuela",
    habitant:35000000,
    territoire:100000000,
    cotinant: "amerique",
    tradition: "folklore",
    president:"maduro", 
    gastronomie: "arepa"
}
for (const key in paysE) {
    console.log(`${key}:${paysE[key]}`);
    
} */

/* const fruit = ["fraise", "citron", "mangue", "raisin", "ananas" ];

for (const iterator of fruit) {
    console.log(iterator);
    
} */

/* function trouveNombre (nombre){

    for ( i = 0; i < nombre.length; i++) {
       if ( nombre[i] === 6){
       console.log("votre equation il y a un  vous peu pas rentre ");
       }else{
        console.log("votre equatio est parfait rentre ");
        break
       }
    }

}
console.log(trouveNombre(123334556)) */




 /* let btn = document.querySelector("button");

btn.addEventListener( `click`,()=> {
    let motPasse = alert(prompt("rentre votre prenom"));
    motPasse.innerHtml
   
} ) 
 */

/* Faire une fonction qui prend en paramètre le nombre d'allumettes à enlever du reste. 

Pour rappel, une nom de fonction doit décrire clairement ce que fait celle-ci.
 */


/* const alu = 50

function jeuxAllumette(nb){
    let prendAll = alert ( prompt( "combien d'allumettes aimere vous prendre"))

} */


/* function descriptionPers() {
    

const personne = {
    nombre: "edward",
    autor: 182,
    nationalite:"venezoline",
    couleurChau:"noir",

}
return personne.nombre + "" + "" + personne.nationalite
}
console.log(descriptionPers());
 */
/* i=0
while (i<=10){
    i++
}
console.log(i)

for (let index = 0; index <= 10; index++) {
    console.log(index);
    
}

let myTableau = [1,3,2,4]

function tab() {
    for (let index = 0; index < myTableau.length; index++) {
        const element = myTableau[index];
        
    }
    
    let ani = myTableau.push(6);

      
    ani = myTableau.splice(2,1)
    
    ani = myTableau
    return ani
    
}
console.log(tab())
 */

/* function name() {
let nom = "edward";
for (let index = 0; index < nom.length; index++) {
    const element = nom[index];
    nom.splice ( 6 , 1 , "almedo")
    return nom
}

}
console.log(name()); */



let phot = 
[
    "imgs/plage.jpg",
    "imgs/fetival.jpg",
    "imgs/lake.jpg",
    "imgs/palmier.jpg",
    "imgs/plage2.jpg",
    
]

let btn = document.querySelector("button")
let img = document.querySelector("img")
 let counter = 1
btn.addEventListener("click", function() {
    if (counter == 5){
    counter = 0
    }
    img.src = phot[counter]
    counter = counter + 1
 
}); 

