const livros = require('./database');
const readline = require('readline-sync');

function FiltrarCategorias(){
    var categorias = [];
    livros.forEach(function(_item){
        var verificacao = false;
        for(let i = 0; i < categorias.length; i++){
            if (categorias[i] === _item.categoria){
                verificacao = true;
                break;
            }
        } 
        if(!verificacao){
            categorias.push(_item.categoria);
        }
    });
    return categorias;
}

const entradaIncial = readline.question("Deseja buscar um livro?S/N");
if(entradaIncial.toLocaleUpperCase() === "S"){
    console.log("Categorias:");
    console.log(FiltrarCategorias());
    const entradaCategoria = readline.question("Qual categoria você escolhe:");
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria);
    console.table(retorno);
} else {
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas);
    console.log("Essas são todos os livros disponíveis:");
    console.table(livrosOrdenados);
}

