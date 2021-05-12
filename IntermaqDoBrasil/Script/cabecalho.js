function mascara(o, f) {
    v_obj = o
    v_fun = f
    setTimeout("execmascara()", 1)
}
function execmascara() {
    v_obj.value = v_fun(v_obj.value)
}
function mtel(v) {
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v = v.replace(/(\d{5})(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
window.onload = function () {
    document.getElementById('Celular').onkeyup = function () {
        mascara(this, mtel);
    }
}

function criarUrl() {
    let nome = document.getElementById("Nome").value;
    let assunto = document.getElementById("Assunto").value;
    let mensagem = document.getElementById("Mensagem").value;
    let celular = document.getElementById("Celular").value;


    console.log(assunto + mensagem);

    if (assunto !== "" && celular !== "" && mensagem !== "" && nome !== "") {
        let url =
            "mailto:contato@intermaqdobrasil.com.br?subject=" +
            assunto +
            "&body=" + "Celular: " +
            celular + "  " + "Nome: " + nome + "   " + "Conteúdo: " + mensagem;

        console.log(url);
        window.location.href = url;
    } else {
        alert("Por favor preencha todos os campos");
    }


}