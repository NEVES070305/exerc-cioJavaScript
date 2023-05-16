var btn = document.getElementById('btnCalcular')
btn.addEventListener('click', media2)

function media2() {
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    document.getElementById('result').innerText = ((n1 + 2*n2)/3).toFixed(2)
    //let media= (n1 + 2*n2)/3
    //media=(media<0 || media>10)?"Verifique a nota.": media
    //media=(media>=0 && media<=10)?media:"Verifique a nota."

}
