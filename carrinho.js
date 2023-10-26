// carrinho.js

const carrinho = {
    produtos: [],

    adicionarProduto: function(nome, preco) {
        this.produtos.push({ nome, preco });
        this.atualizarCarrinho();
    },

    atualizarCarrinho: function() {
        const carrinhoDiv = document.getElementById('carrinho');
        carrinhoDiv.innerHTML = '<h2>Itens no Carrinho</h2>';
        
        if (this.produtos.length === 0) {
            carrinhoDiv.innerHTML += '<p>O carrinho está vazio.</p>';
        } else {
            this.produtos.forEach((produto) => {
                carrinhoDiv.innerHTML += `<p>${produto.nome} - R$ ${produto.preco.toFixed(2)}</p>`;
            });
        }
    }
};

function adicionarProduto(nome, preco) {
    carrinho.adicionarProduto(nome, preco);
}


