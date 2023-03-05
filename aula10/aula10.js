var area = window.document.getElementById("area");
    area.addEventListener("click", clicar)
    area.addEventListener("mouseenter", entrar)
    area.addEventListener("mouseout", sair)
    function clicar() {
        area.innerText = 'OPA BOM DIA!'
        area.style.background = 'blue'
}
    function entrar (){
        area.innerText = 'CLICA LOGO!'
        area.style.background = 'green'
    }
    function sair() {
        area.innerText = 'NAAAAO'
        area.style.background = 'black'
    }