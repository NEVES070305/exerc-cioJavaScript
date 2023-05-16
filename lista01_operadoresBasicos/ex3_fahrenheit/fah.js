var btn = document.getElementById('btnCalcular')
btn.addEventListener('click', calcular)

function calcular() {
    let n1 = Number(document.getElementById('n1').value)
    document.getElementById('result').innerText = ((n1+32)*5)/9
}