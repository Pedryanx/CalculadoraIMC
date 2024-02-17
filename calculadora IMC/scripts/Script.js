//IMC
//1. Capturar os valores
//2. Calcular o IMC
//3. Gerar a classificação do IMC
//4. Organizar as informações
//5. Salvar os dados em uma lista (array) -> localStorage
//6. Ler a lista com os dados (array) -> localStorage
//7. Renderizar o conteúdo na tela
//8. Botão limpar registros -> clear localStorage

function pegarValores() {
    let nome = document.getElementById('nome').value.trim()
    let altura = parseFloat(document.getElementById('altura').value)
    let peso = parseFloat(document.getElementById('peso').value)

    //variavel de objeto recebendo os dados front-end
    let dadosUsuario = {
        nomeUsuario: nome,
        alturaUsuario: altura,
        pesoUsuario: peso 
    }

    return dadosUsuario;
}

function calcular(altura, peso) {
    let imc = peso / (altura * altura)

    return imc; 
}

function classificacaoImc(imc) {
    if (imc < 18) {
        return "abaixo do peso";
    } else if (imc < 25) {
        return "peso normal"
    } else if (imc < 30) {
        return "sobrepeso"
    } else if (imc < 35) {
        return "Obesidade 1" 
    } else {
        return "obesidade 2 e 3"
    }
}

function organizarDados(dadosUsuario, valorImc, classificacaoImc) {
    let dataAtual = Intl.DateTimeFormat('pt-BR', ( timeStyle: 'long', dateStyle: 'short')).format(Date.now())
    let dadosUsuarioAtt = {
        ...dadosUsuario,
        imc: valorImc.toFixed(2),
        classificacao: classificacaoImc,
        dataCadastro: dataAtual

        return dadosUsuarioAtt;
    }
}

//função responsável por armazenar o objeto dentro do local storage
function cadastrarUsuario(usuario) {
    let listaDeUsuario = []

    //validação para verificar se eu tenho algum dado dentro do local storage do navegador
   if (localStorage.getItem(usuariosCadastrados))
      listaDeUsuario = JSON.parse(localStorage.getItem("usuariosCadastrados"))

      listaDeUsuario.push(usuario)

      localStorage.setItem("usuarioCadastrados", JSON.stringify (listaDeUsuario))

}