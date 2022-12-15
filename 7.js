// console.log(RepeatedLettersCounter("aabcde333"))
// function RepeatedLettersCounter(word : string) : number{
//     let letterCounter : number = 0
//     let arrayWord : string [] = word.split('')
//     arrayWord.forEach((x) => {
//         let repeatedCounter : number = 0
//         for(let i : number = 0; i < arrayWord.length; i++){
//             if(x == arrayWord[i]){
//                 repeatedCounter++
//             }
//         }
//         if(repeatedCounter > 1){
//             arrayWord = arrayWord.filter(letter => letter == x)
//             letterCounter++
//         }
//     })
//     return letterCounter
// }  
var names = ["Bernardo", "Argollo"];
ReturnText(names);
function ReturnText(names) {
    if (names.length == 0) {
        console.log("No one liked it.");
    }
    else if (names.length == 1) {
        console.log(names[0] + " liked it.");
    }
    else if (names.length == 2) {
        console.log(names[0] + " e " + names[1] + " liked it.");
    }
    else if (names.length == 3) {
        console.log(names[0] + ", " + names[1] + " and " + names[2] + " liked it.");
    }
    else if (names.length > 3) {
        console.log(names[0] + ", " + names[1] + " and others " + (names.length - 2) + " liked it.");
    }
}
