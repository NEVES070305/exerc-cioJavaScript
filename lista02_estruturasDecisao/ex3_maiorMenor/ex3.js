let btnCalcular = document.getElementById('btnCalcular')
btnCalcular.addEventListener('click', calcular)

function calcular() {
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    var result;
    /*
    if(n1==n2) {
        document.getElementById('result').innerText = `${n1} é igual a ${n2}.`;
    }else if(n1>n2) {
        document.getElementById('result').innerText = `${n1} é maior que ${n2}.`;
    }else {
        document.getElementById('result').innerText = `${n1} é menor que ${n2}.`;
    }
    */
    result = (n1==n2)?`${n1} é igual a ${n2}.`: (n1>n2)? `${n1} é maior que ${n2}.`:`${n1} é menor que ${n2}.`
    document.getElementById('result').innerText = result
}