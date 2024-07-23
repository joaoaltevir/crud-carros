const prompt = require("prompt-sync")();
const funcoes = require("./carros.js")
let opcao = 0;

while(opcao != 5){
    funcoes.menu();
    opcao = +prompt("Digite aqui: ");

    switch(opcao){
        case 1:
            funcoes.adicionar();
            break;
        case 2:
            funcoes.listar();
            break;
        case 3:
            funcoes.listar();
            let escolhaAlterar = +prompt("Informe qual registro deseja alterar: ");
            funcoes.alterar(escolhaAlterar);
            break;
        case 4: 
            funcoes.listar();
            let escolhaApagar = +prompt("Informe qual registro deseja apagar: ");
            funcoes.excluir(escolhaApagar);
            break;
        case 5:
            break;
        default:
            console.log('Opção Inválida!');
            break;
    }
}
console.log("Encerrando sistema...")