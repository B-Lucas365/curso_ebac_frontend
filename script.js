const buttonEvent = document.getElementById("button")

buttonEvent.addEventListener("click", function verificarCampos() {
    let campo1 = Number(document.getElementById("a").value)
    let campo2= Number(document.getElementById("b").value)

    if (campo1 > campo2){
        alert("Campo 1 é maior que o campo 2, porfavor digite um valor maior no banco B");
    }
    else {
        document.getElementById("form").submit();
    }   
})



