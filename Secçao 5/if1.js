function boletim(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
    else{
        console.log('Reprovado com ' + nota)
    }
}

boletim(8.1)
boletim(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1) // e verdade
seForVerdadeEuFalo(' ') // e verdade
seForVerdadeEuFalo('?')// e verdade
seForVerdadeEuFalo([])// e verdade
seForVerdadeEuFalo([1, 2])// e verdade
seForVerdadeEuFalo({})// e verdade