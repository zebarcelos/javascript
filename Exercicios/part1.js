/* 
EXERCICIO

 */
function carregar (){
var horario = new Date()
var horariodeagora = horario.getHours()
var tituloinsidebox = (window.document.getElementById("tituloinsidebox"));
var textoreferente = (window.document.getElementById('textoreferente'));
var saudacao = (window.document.getElementById('saudacao'));
var textoreferente =(window.document.getElementById('textoreferente'));
tituloinsidebox.innerHTML = `Agora são ${horariodeagora} horas`
// ABAIXO AS FUNCOES DE IMG E BACKGROUND //
var img = window.document.getElementById("imgoftime")
var back = window.document.getElementById('background')
    if (horariodeagora >= 0 && horariodeagora < 6){
        document.body.style.background = '#232937'
        saudacao.innerHTML = 'Boa Madrugada!'
        img.src = 'fotonoite.jpg'
        textoreferente.innerHTML = '"A noite é uma criança, a madrugada é um brinquedo. Não sou eu quem dorme tarde, é o sol que nasce cedo."'
    } else if (horariodeagora >= 6  && horariodeagora < 12){
        document.body.style.background = '#fce0d4'
        saudacao.innerHTML = 'Bom dia!'
        img.src = 'amanhecer01.jpg'
        textoreferente.innerHTML = '"Quando abro a cada manhã a janela do meu quarto é como se abrisse o mesmo livro numa página nova..."'
    } else if (horariodeagora >= 12 && horariodeagora < 18){
        document.body.style.background = '#fce0d4'
        saudacao.innerHTML = 'Boa Tarde!'
        img.src = 'amanhecer01.jpg'
        textoreferente.innerHTML = '"A amizade é como a sombra na tarde - cresce até com o ocaso da vida."'
    } else {
        document.body.style.background = '#232937'
        saudacao.innerHTML = 'Boa Noite!'
        img.src = 'fotonoite.jpg'
        textoreferente.innerHTML = '"Há noites que eu não posso dormir de remorso por tudo o que eu deixei de cometer."'
    }
}
