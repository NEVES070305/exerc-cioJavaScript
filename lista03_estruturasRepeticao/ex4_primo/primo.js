document.getElementById('btnCalcular').addEventListener('click', calcular)

function calcular() {
    
    let n = parseInt(document.getElementById('n1').value);
    
    let resposta = document.getElementById('result');
    
    let divisores=0;

    for(let count=1 ; count<=n ; count++){
        if(n % count == 0){
            divisores++;
        }
    }
        
    if(divisores==2){
        resposta.innerHTML=`${n} é primo.`;
    }else{
        resposta.innerHTML=`${n} não é primo.`;
    }
      
}