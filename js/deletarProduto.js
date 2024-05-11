import { conectaApi } from "./conectaApi.js";

const botaoDeletar = document.querySelector("#deletar");

async function deletarProdutos(evento){
    evento.preventDefault();
    
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaProdutos(dadosDePesquisa);
    busca.map((item) => {
        const id = item.id;

    conectaApi.deletaProdutos(id);
    alert('Produto deletado!');
    })
    
}

botaoDeletar.addEventListener("click", evento => deletarProdutos(evento));