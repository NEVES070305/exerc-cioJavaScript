var btnCalcular = document.getElementById('btnCalcular')
btnCalcular.addEventListener("click",contar)

function contar() {
    let n1 = Number(document.getElementById('n1').value)
    let n2 =  Number(document.getElementById('n2').value)
    let media = (n1 + n2)/2;
    (document.getElementById('result')).innerText = (`A média de n1 e n2 é ${media}`);
}