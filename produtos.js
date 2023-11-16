//remover do carrino
function Remove(){
document.querySelector(".produto-carrinho").textContent = " ";
}
function Remove2(){
document.querySelector(".novoItem").textContent = " ";
}

//adicionar ao carrinho
function Adicione(){
    console.log("teste");
    document.querySelector(".novoItem").textContent = document.querySelector(".produto").textContent;
}




