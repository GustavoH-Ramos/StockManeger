async function listaProdutos(){
    const conexao = await fetch(" http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaProdutos(nome, quantidade, valorDeCompra, valorDeVenda, data){
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            quantidade: quantidade,
            valorDeCompra: valorDeCompra,
            valorDeVenda: valorDeVenda,
            data: data
        })
    });
    if(!conexao.ok) {
        throw new Error("Não foi possível enviar o produto")
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function modificaProdutos(nome, quantidade, valorDeCompra, valorDeVenda, data, id){
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            quantidade: quantidade,
            valorDeCompra: valorDeCompra,
            valorDeVenda: valorDeVenda,
            data: data
        })
    });
    if(!conexao.ok) {
        throw new Error("Não foi possível modificar o produto")
    }


    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function deletaProdutos(id){
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        },
    });
  


    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function buscaProdutos(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/produtos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {listaProdutos, criaProdutos, buscaProdutos, modificaProdutos, deletaProdutos}