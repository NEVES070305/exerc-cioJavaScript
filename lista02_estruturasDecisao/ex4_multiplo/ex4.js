document.getElementById('btnCalcular').addEventListener('click', calcular)

function calcular(params) {
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)

    if (n1<n2) {
       document.getElementById('result').innerText=`Não tem como ${n1} ser múltiplo de ${n2}.` 
    }else {
        if (n1%n2==0) {
            document.getElementById('result').innerText = `${n1} é múltiplo de ${n2}.`
        }else{
            document.getElementById('result').innerText=`${n1} não é múltiplo de ${n2}.`
        }
    }
}