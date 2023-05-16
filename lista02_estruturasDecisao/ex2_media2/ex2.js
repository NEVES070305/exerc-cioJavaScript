var btnCalcular = document.getElementById('btnCalcular')
btnCalcular.addEventListener("click", contar)

function contar() {
    let n1 = Number(document.getElementById('n1').value)
    let n2 =  Number(document.getElementById('n2').value)
    let media = (n1 + n2)/2;
    if (media>6) {
        document.getElementById('result').innerText = `Você foi aprovado com nota igual a: ${media}.`;
    } else if(5<=media<=6){
        document.getElementById('result').innerText = `Você está de recuperação, haja vista que sua nota é igual a: ${media}`;
    }else{
        document.getElementById('result').innerText = `Você foi reprovado com nota igual a: ${media}.`;
    }
}