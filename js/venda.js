import { conectaApi } from "./conectaApi.js";

const botaoAtualizar = document.querySelector("#finalizar");
const botaoAdicionar = document.querySelector("#botaoAdicionar");
const lista = document.querySelector(".lista__pedido");
const total = document.querySelector(".total");
var valores = [];
var pedidos = [];


async function adicionarProdutosLista(evento){
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const quantidadeVenda = document.querySelector("#quantidadeVenda").value;
    const busca = await conectaApi.buscaProdutos(dadosDePesquisa);
    if(busca.length == 0 || busca.length > 1) {
        alert('Produto não encontrado');
    } else if (quantidadeVenda == ""){
        alert('Ensira uma quantidade válida');
    }
    else{
    busca.map((item) => {
        const nome = item.nome;
        const quantidadeNumero = parseInt(quantidadeVenda);
        const valorNumero = parseInt(item.valorDeVenda);
        const valor = valorNumero * quantidadeNumero;
        valores.push(valor);
        const initialValue = 0;
        const sumWithInitial = valores.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
);
       


        const pedido =  document.createElement("li");
        pedido.className = `pedido__item`
        pedido.innerHTML = `
                            <div class="pedido__caixa">
                                <span class="pedido__texto">${nome}</span>
                                <span class="pedido__texto">X${quantidadeVenda}</span>
                            </div>
                            <span class="pedido__texto">R$${valor}</span>
        `     
        lista.appendChild(pedido)

            total.textContent = `
                 Total: R$${sumWithInitial}
            `
            const pedidoItem = {nome : item.nome, quantidadeNumero : quantidadeNumero, quantidade : item.quantidade, valorDeCompra : item.valorDeCompra, valorDeVenda : item.valorDeVenda, data : item.data}
            pedidos.push(pedidoItem);  
    });
}
   
}

botaoAdicionar.addEventListener("click", evento => adicionarProdutosLista(evento));


async function modificarProdutos(evento){
    evento.preventDefault();

    if (pedidos.length != 0){
    for(let i = 0; i <= pedidos.length + 1; i++) {
        const dadosDePesquisa = pedidos[i].nome;
        const busca = await conectaApi.buscaProdutos(dadosDePesquisa);
        evento.preventDefault();
        
        busca.map((item) => {
            const id = item.id;
            const quantidadeVenda = pedidos[i].quantidadeNumero;
            const quantidadeNumero = parseInt(quantidadeVenda);
            const quantidadeEstoque = pedidos[i].quantidade;
            const quantiaEstoque = parseInt(quantidadeEstoque);
            const decrementa = quantiaEstoque - quantidadeNumero;

            const nome = item.nome;
            const quantidade = decrementa;
            const valorDeCompra = item.valorDeCompra;
            const valorDeVenda = item.valorDeVenda;
            const data = item.data;

            conectaApi.modificaProdutos(nome, quantidade, valorDeCompra, valorDeVenda, data, id);
        })  
    }
    } else {
        alert('Pedido vazio.');
    }
    
}

 botaoAtualizar.addEventListener("click", evento => modificarProdutos(evento));