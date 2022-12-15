console.log(RepeatedLettersCounter("aabcde333"))

function RepeatedLettersCounter(word : string) : number{
    let letterCounter : number = 0
    let arrayWord : string [] = word.split('')
    arrayWord.forEach((x) => {
        let repeatedCounter : number = 0
        for(let i : number = 0; i < arrayWord.length; i++){
            if(x == arrayWord[i]){
                repeatedCounter++
            }
        }
        if(repeatedCounter > 1){
            arrayWord = arrayWord.filter(letter => letter == x)
            letterCounter++
        }
    })
    return letterCounter
}  

