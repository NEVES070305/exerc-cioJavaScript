var btnCalcular = document.getElementById('btnCalcular')
btnCalcular.addEventListener('click', calcular)

function calcular() {
    let n1 = Number(document.getElementById('n1').value)
    
    document.getElementById('result').innerText = n1 * 1.60934
}
