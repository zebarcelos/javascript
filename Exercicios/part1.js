/* 
EXERCICIO

 */
function carregar (){
var horario = new Date()
var horariodeagora = horario.getHours()
var tituloinsidebox = (window.document.getElementById("tituloinsidebox"));
tituloinsidebox.innerHTML = `Agora são ${horariodeagora} horas`
var imagem = window.document.getElementById("imgoftime")
var back = window.document.getElementById('background')
    if (horariodeagora >= 12) {
        back.style.background = 'red'; 
    } else (horariodeagora <= 12 )
        back.style.background = 'gray'
        imagem.src = 'fotonoite.jpg'
}
