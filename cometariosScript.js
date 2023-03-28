function leiaMais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnLeiaMais=document.getElementById("btnLeiaMais");
    if(pontos.style.display === "none"){    
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Leia Mais...";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="Leia Menos";
    }
}

function atribuiNota(e){
    let stars = document.querySelectorAll('.starIcon');
    let classStar = e.target.classList;
    if(!classStar.contains('ativo')){
        stars.forEach(function(star){
            star.classList.remove('ativo');
        });
        classStar.add('ativo');
        console.log(`Você atribuiu nota ${e.target.getAttribute('avaliacaoNota')}`);
    }
}

function message(){
    alert('Função implementada na versão React!');
}
// document.addEventListener('click', function(e){
//     let classStar = e.target.classList;
//     if(!classStar.contains('ativo')){
//         stars.forEach(function(star){
//             star.classList.remove('ativo');
//         });
//         classStar.add('ativo');
//         console.log(`Você atribuiu nota ${e.target.getAttribute('avaliacaoNota')}`);
//     }
// });