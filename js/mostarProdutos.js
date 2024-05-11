import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiItem(nome, quantidade, valorDeCompra, valorDeVenda, data){
    const produto = document.createElement("tr");
    produto.className = 'tabela__item'
    produto.innerHTML = `
        <tr class="tabela__item">
            <th>${nome}</th>
            <th>${quantidade}</th>
            <th>R$${valorDeCompra}</th>
            <th>R$${valorDeVenda}</th>
            <th>${data}</th>
        </tr>
    `
    return produto;
}

async function listaProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.sort((a, b) => a.quantidade - b.quantidade)
        listaApi.forEach(elemento => lista.appendChild(constroiItem(elemento.nome, elemento.quantidade, elemento.valorDeCompra, elemento.valorDeVenda, elemento.data)))
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de produtos</h2>`
    }
   
}

listaProdutos();
