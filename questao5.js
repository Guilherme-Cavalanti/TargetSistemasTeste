const InverterString = (s) => {
    let output = []
    for (let i = s.length-1; i>= 0; i--){
        output.push(s[i])
    }
    return output.join("")
}

//Inserir a palavra aqui
let palavra = "batata"

console.log(`String:${palavra}, saída: ${InverterString(palavra)}`)