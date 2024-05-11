import { conectaApi } from "./conectaApi.js";
import constroiItem from "./mostarProdutos.js";

async function buscarProduto(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaProdutos(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    lista.innerHTML = `
                <tr class="tabela__top">
                    <th>Nome</th>
                    <th>Quantidade</th>
                    <th>Valor de compra</th>
                    <th>Valor de venda</th>
                    <th>Data de cadastro</th>
                </tr>
    `
    busca.sort((a, b) => a.quantidade - b.quantidade)
    busca.forEach(elemento => lista.appendChild(constroiItem(elemento.nome, elemento.quantidade, elemento.valorDeCompra, elemento.valorDeVenda, elemento.data)))

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível encontrar o produto</h2>`
    }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarProduto(evento))