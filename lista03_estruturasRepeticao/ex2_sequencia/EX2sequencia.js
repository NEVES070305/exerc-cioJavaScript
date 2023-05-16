var btnCalcular = document.getElementById('btnCalcular')
btnCalcular.addEventListener('click', calcular)

function calcular() {
    let n1 = Number(document.getElementById('n1').value)    
    let n2 = Number(document.getElementById('n2').value)
    let result="Resultado= "

    if(n2>=n1){
        if (n1!=n2) {
            while (n2>n1) {
                result+= n1 + ", "
                n1++   
            } 
        }
        result+= n1 + "."
        
                   
    } else {
        if(n2!=n1){
        while (n2<n1) {
            result+= n1 + ", "
            n1--
        }
        }
        result+= n1 + "."
        
    }
    /*while (n2>=n1) {
        result+= n1 + ","
        n1++
    }*/
    document.getElementById("result").innerText = result
}