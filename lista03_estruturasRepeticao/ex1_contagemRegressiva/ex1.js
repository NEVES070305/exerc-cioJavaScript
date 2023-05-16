document.getElementById('btnCalcular').addEventListener('click', contar)
function contar(params) {
    let n = Number.parseInt(document.getElementById('n1').value)

    let resultado= "Resultado= "
    
    if (n<0){
        while (n<0) {
            if (n!=1) {
            resultado+= n + ","
            n++
            } else{
            resultado+= n + "."
            n++
            }    
        }
    }else{
    while (n>0) {
        if (n!=1) {
            resultado+= n + ","
            n--
            } else{
            resultado+= n + "."
            n--
            }
    }
    }
    
    document.getElementById('result').innerText = resultado
}