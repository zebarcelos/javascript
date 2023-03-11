if (horariodeagora < 06 && horariodeagora > 12){
    back.style.background = 'yellow'
    img.src = 'Amanhecer01.jpg'
    saudacao.innerHTML = 'Bom dia!'
}   else if (horariodeagora < 13 && horariodeagora >17) { 
    back.style.background = 'yellow'
    img.src = 'Amanhecer01.jpg'
    saudacao.innerHTML='Boa Tarde!'
} else if (horariodeagora < 18 && horariodeagora > 23){
    back.style.backgroud= 'gray'
    img.src = 'fotonoite.jpg'
    saudacao.innerHTML='Boa Noite!'
} else {
    back.style.backgroud = 'gray'
    img.src = 'fotonoite.jpg'
    saudacao.innerHTML = 'Boa Madrugada!'