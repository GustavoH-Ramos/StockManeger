import {conectaApi} from "./conectaApi.js"

const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento){
    evento.preventDefault();

    const dataCriacao = new Date();
    const dia = String(dataCriacao.getDate()).padStart(2, '0');
    const mes = String(dataCriacao.getMonth() + 1).padStart(2, '0');
    const ano = dataCriacao.getFullYear();

    const dataAtual = `${dia}/${mes}/${ano}`

    const nome = document.querySelector("[data-nome]").value;
    const quantidade = document.querySelector("[data-quantidade]").value;
    const valorDeCompra = document.querySelector("[data-valorCompra]").value;
    const valorDeVenda = document.querySelector("[data-valorVenda]").value;
    const data = dataAtual;

    await conectaApi.criaProdutos(nome, quantidade, valorDeCompra, valorDeVenda, data);

    alert('Produto cadastrado!')
}

formulario.addEventListener("submit", evento => criarProduto(evento));