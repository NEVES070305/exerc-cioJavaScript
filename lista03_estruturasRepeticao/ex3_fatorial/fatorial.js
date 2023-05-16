document.getElementById('btnCalcular').addEventListener('click', fatoriar)

function fatoriar(params) {
    let n = Number.parseInt(document.getElementById('n1').value)


    let produto=n

    var cont = 2
/*
    if (n>=0) {
        if (n>0) {
            while(n>0){
                produto=produto*n 
                n--
            }
        } else {
            produto= 1
        }
    }else{
        result= "Não existe."
    }
    */
   if(n1<=0){
    resultado = "Informe número positivo."
   } else{
    while(cont<=n1){
        resultado *= cont
        cont++
    }
   }
    document.getElementById('result').innerText=`O fatorial do número que você digitou é igual a ${produto}.`
}