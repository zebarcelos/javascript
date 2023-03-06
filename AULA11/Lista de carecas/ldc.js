function calvicionar(){
    var c1 = String(window.document.getElementById("tdc1").value).toUpperCase();
    var c2 = (window.document.getElementById("resultadodacalvice"));
        if (c1 == "CLAUDIO" ||
        c1 == "ZIMMER"||
        c1 == "PEDRO HOMEM"||
        c1 == "FIUZA"||
        c1 == "BEBELA"||
        c1 == "XANDI"||
        c1 == "GUI GOLEIRO"||
        c1 == "BZZ" ||
        c1 == "JOSE"){
            c2.innerHTML = "Este é careca!"
            c2.style.font = 'bolder 40pt Arial'
            c2.style.color = 'blue'
        } else 
            c2.innerHTML = "Este não é careca!"
    }