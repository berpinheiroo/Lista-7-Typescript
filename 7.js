console.log(ContarCaracteresRepetidos("aabcde333"));
function ContarCaracteresRepetidos(palavra) {
    var contadorCaractere = 0;
    var arrayPalavra = palavra.split('');
    arrayPalavra.forEach(function (x) {
        var contadorRepetido = 0;
        for (var i = 0; i < arrayPalavra.length; i++) {
            if (x == arrayPalavra[i]) {
                contadorRepetido++;
            }
        }
        if (contadorRepetido > 1) {
            arrayPalavra = arrayPalavra.filter(function (caractere) { return caractere == x; });
            contadorCaractere++;
        }
    });
    return contadorCaractere;
}
