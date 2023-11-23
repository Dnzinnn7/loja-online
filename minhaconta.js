var botao = document.querySelector(".subimit");

function botaoHandler(){
    let senha=document.getElementById("senha").value;
    
    if(senha == 1234) {
        alert("Cadatrado Realizado");
    }
        else {
            alert("Senha Incorreta");
        }
    

}



