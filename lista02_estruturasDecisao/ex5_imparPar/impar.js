document.getElementById('btnCalcular').addEventListener('click', calcular)

function calcular(params) {
    let n1 = Number(document.getElementById('n1').value)

    if (n1%2==0) {
       document.getElementById('result').innerText=`${n1} é par.` 
    }else{
        document.getElementById('result').innerText =`${n1} é ímpar.`
    }
}