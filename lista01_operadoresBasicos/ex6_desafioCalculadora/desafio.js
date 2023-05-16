/*var bntsoma = document.getElementById('btnSomar')
bntsoma.addEventListener('click', somar)

var btnmenos = document.getElementById('btnSub')
btnmenos.addEventListener('click', subtrair)

var btnmultiplicacao = document.getElementById('btnMult')
btnmultiplicacao.addEventListener('click', multiplicar)

var btndivisao = document.getElementById('btnDiv')
btndivisao.addEventListener('click', dividir)

function somar() {
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    document.getElementById('result').innerText = n1+n2
}

function subtrair() {
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    document.getElementById('result').innerText = n1-n2
}

function multiplicar() {
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    document.getElementById('result').innerText = n1*n2
}
function dividir(params) {
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    document.getElementById('result').innerText = n1/n2
}
*/

var btnSomar = document.getElementById('btnSomar')
btnSomar.addEventListener('click', ()=>{calcular('+')})

var btnmenos = document.getElementById('btnSub')
btnmenos.addEventListener('click', ()=>{calcular('-')})

var btnmultiplicacao = document.getElementById('btnMult')
btnmultiplicacao.addEventListener('click', ()=>{calcular('*')})

var btndivisao = document.getElementById('btnDiv')
btndivisao.addEventListener('click', ()=>{calcular('/')})


function calcular(operacao) {
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    let exibir;

    switch (operacao) {
        case '+':
            exibir = n1+n2
            break;
        case '-':
            exibir = n1-n2
            break;
        case '*':
            exibir = n1*n2;
            break;
        default:
            exibir = n1/n2
            break
            
    }
    document.getElementById('result').innerText = exibir
}