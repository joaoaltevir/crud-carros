const prompt = require("prompt-sync")();
const carros = [];

const menu = () => {
  console.log(`Selecione sua opção:
    [1]Adicionar Carro
    [2]Listar Carros
    [3]Alterar dados
    [4]Excluir dados
    [5]Sair`);
};
const adicionar = () => {
  const carro = {};

  carro.Marca = prompt("Informe a marca do seu carro: ");
  carro.Modelo = prompt("Qual o modelo do seu carro: ");
  carro.Preco = prompt("Quanto está custando seu carro: ");
  carro.Ano = prompt("De quando é esse carro?");
  carro.Status = "Online";

  carros.push(carro);
  console.log("\nCarro adicionado com sucesso!\n");
};
const listar = () => {
  carros.forEach(element => {
    console.log(element)
  })
};
const alterarMarca = (i) => {
  carros[i].Marca = prompt("Informe a nova marca do carro: ");
  console.log("Alterado com sucesso!");
};
const alterarModelo = (i) => {
  carros[i].Modelo = prompt("Informe o novo modelo do carro: ");
  console.log("Alterado com sucesso!");
};
const alterarPreco = (i) => {
  carros[i].Preco = prompt("Informe o novo preço do carro: ");
  console.log("Alterado com sucesso!");
};
const alterarAno = (i) => {
  carros[i].Ano = prompt("Informe o ano do carro: ");
  console.log("Alterado com sucesso!");
};
const alterar = (indice) => {
  console.log(`O que você deseja alterar?:
    [1]Marca
    [2]Modelo
    [3]Preço
    [4]Ano
    `);
  let alterar = +prompt("Digite aqui: ");
  switch (alterar) {
    case 1:
      alterarMarca(indice);
      break;
    case 2:
      alterarModelo(indice);
      break;
    case 3:
      alterarPreco(indice);
      break;
    case 4:
      alterarAno(indice);
      break;
    default:
      console.log("Opção não válida!");
      alterar = undefined;
  }
};
const excluir = (i) => {
  carros[i].Status = "Apagado";
  console.log("\nApagado com sucesso!\n");
};

module.exports = {
  adicionar,
  menu,
  listar,
  alterar,
  excluir,
};
