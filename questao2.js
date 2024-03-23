const testeFibonnacci = (n) => {
    let prev = 0
    for (let i = 0; i<n; ){
        if(n==0 || n==1) {
            console.log(`${n} está na sequência de Fibonnacci!`); 
            return
        }
        if(i==0){
            i++          
            continue;
        }
        let k = i
        i += prev    
        prev = k
        if(i==n) {
            console.log(`${n} está na sequência de Fibonnacci!`); 
            return
        }
    }
    console.log(`${n} não está na sequência de Fibonnacci`)
}

// Inserir os valores aqui na variável teste
let teste = 832040
testeFibonnacci(teste)