
function askName ()
{

    let nom = prompt(" quelle est votre nom svp : ", "chloe liz")
    let prenom = (nom)

        document.body.innerHTML += "<h1> COUCOU </h1>" ;
        document.body.innerHTML += "<h2>" + "Bonjour " + prenom; "</h2>" ;
}
askName();


function  askBirthYear(){

    let moisNaicense = parseInt(prompt( " quelle est votre mois de naicense ", 6))
    let anneeNaicense =parseInt(prompt (  " pouvais vous rentre votre annee de naisence", 1970)) 

    const date = new Date();
    let annee = date.getUTCFullYear() ;
    let mois =  date.getUTCMonth() ;
    let age = annee-anneeNaicense;
        if (moisNaicense > mois )
        {
            age = age-1
        }
    document.body.innerHTML += "<h3>" + "Merci " + " vous avez " + age + " ans " + "<h3>";
}
askBirthYear();


