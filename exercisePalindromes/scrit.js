let oneDate = '01/01/2021'
let date2 = '42/12/2024'

function isValidDate(date){
    let checkDate
    if (maxDaysInMonth(date) == true && goodYear(date) == true && goodFormat(date) == true){
        return checkDate = true
    } else {
        return checkDate = false
    }
}

// Vérifier si la date est bien au format dd/mm/aaaa
function goodFormat(date){
    let format = date.split('')
    let check
    if (format[2] == '/' && format [5] == '/' && format.length == 10){
        return check = true
    } else {
        return check = false
    }
}

// Vérifier si la date est bien comprise entre 999 et 10000
function goodYear(date){
    let year = date.substring(6,10)
    let check
        if (year<10000 && year > 999){
            return check = true
        } else {
            return check = false
        }
}

// Vérifie si le mois est bien compris entre 1 et 12; et si le mois a bien le bon nombre de jours
function maxDaysInMonth(date){
    let takeMonth = date.substring(3,5)
    let arrMonth31 = ['01','03','05','07','08','10']
    let arrMonth30 = ['04','06','09','11']
    let oneDay = date.substring(0,2)
    let day = parseInt(oneDay)
    let check
        if (takeMonth == '02' && day<28 && day>0) {
            return check = true
        }
        else if ( arrMonth31.includes(takeMonth) && day<32 && day>0) {
            return check = true
        }
        else if ( arrMonth30.includes(takeMonth) && day<31 && day>0) {
            return check = true
        }
        else {return check = false}

    }
    // switch (goodMonth){
    //     case '02' : return '28';
    //     case '04' : case '06' : case '09' : case '11' : return '30';
    //     case '01' : case '03' : case '05' : case '07' : case '08' : case '10' : return '31';
    //             default : return 'Mois non valide'
    // 

// Enléve les slashs de la date
function noSlash(date){
    date = date.replace(/\//g,'')
    return date
}

// inverse la 1ere partie de la date 
function reverseString(date){
    let newDate = noSlash(date)
    let halfDate = newDate.substring(0,4)
    let arrayDate = halfDate.split('')
    let reverseArray = arrayDate.reverse()
    let joinArray = reverseArray.join("")

    return joinArray
}

//vérifie si c'est un palindrome en comparant la 1ere partie inversée de la date + la 2eme partie de la date 
function isPalindrome(date){
    let endDate = date.substring(6,10)
    let checkPalindrome 
       if (endDate == reverseString(date)) {
        return checkPalindrome = true
    } else {
        return checkPalindrome = false
    }
}
let testPalin = "11/02/2011"
console.log(isPalindrome(testPalin)) //true
console.log(isPalindrome("03/04/2001")) //false

// Quelles sont les prochaines dates palindromes, à partir de la date d'aujourd'hui


function getNextPalindromes(x){
    let arrPalindrome = []
    let today = new Date()
    let jour = today.toLocaleDateString('fr')
        while (arrPalindrome.length < x){
            if(isPalindrome(jour) == true){
                arrPalindrome.push(jour)
    }
            today.setDate(today.getDate()+1)
            jour = today.toLocaleDateString('fr')
    } 
        return arrPalindrome
} 

  
    // dés que le tableau à x élement, on sort de la fonction

console.log(getNextPalindromes(8))



function isMyDatePalindrome(date){
    let checkDate
    if (isValidDate(date) == true){
         if (isPalindrome(date) == true){
            return checkDate = true}
            else {
                return checkDate = false
            }
         }
         else {
            return checkDate = false
         }
    }
    
console.log(isMyDatePalindrome("11/02/2011"))












