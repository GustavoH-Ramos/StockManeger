import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("#campos");

async function buscarProduto(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaProdutos(dadosDePesquisa);
    busca.map((item) => {
        formulario.innerHTML = `
                        <li class="pedido__input">
                            <span>Nome:</span>
                            <input type="" class="caixa__produto" placeholder="Nome do produto" value="${item.nome}" id="nome">
                        </li>
                        <li class="pedido__input">
                            <span>Quantidade:</span>
                            <input type="" class="caixa__produto" placeholder="Quantidade do produto" value="${item.quantidade}" id="quantidade">
                        </li>
                        <li class="pedido__input">
                            <span>Valor de compra:</span>
                            <input type="" class="caixa__produto" placeholder="Valor de compra do produto" value="${item.valorDeCompra}" id="valorCompra">
                        </li>
                        <li class="pedido__input">
                            <span>Valor de venda:</span>
                            <input type="" class="caixa__produto" placeholder="Valor de venda do produto" value="${item.valorDeVenda}" id="valorVenda">
                        </li>
        `
    })
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarProduto(evento));

