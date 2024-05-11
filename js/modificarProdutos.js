import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("#telaAtualizar");
const botaoAtualizar = document.querySelector("#atualizar")

async function modificarProdutos(evento){
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaProdutos(dadosDePesquisa);
    busca.map((item) => {
        const id = item.id;

    const dataCriacao = new Date();
    const dia = String(dataCriacao.getDate()).padStart(2, '0');
    const mes = String(dataCriacao.getMonth() + 1).padStart(2, '0');
    const ano = dataCriacao.getFullYear();

    const dataAtual = `${dia}/${mes}/${ano}`

    const nome = document.querySelector("#nome").value;
    const quantidade = document.querySelector("#quantidade").value;
    const valorDeCompra = document.querySelector("#valorCompra").value;
    const valorDeVenda = document.querySelector("#valorVenda").value;
    const data = dataAtual;

    conectaApi.modificaProdutos(nome, quantidade, valorDeCompra, valorDeVenda, data, id);
    alert('Produto modificado!')
    })
    
}

botaoAtualizar.addEventListener("click", evento => modificarProdutos(evento));