// Função para fazer a página rolar suavemente até o simulador
function scrollParaSimulador() {
    document.getElementById('simulador').scrollIntoView({ behavior: 'smooth' });
}

// Função para calcular a economia de água
function calcularEconomia() {
    const hectaresInput = document.getElementById('tamanho').value;
    const resultadoBox = document.getElementById('resultado');
    const textoResultado = document.getElementById('texto-resultado');

    // Validação simples para garantir que o usuário digitou um número válido
    if (hectaresInput === "" || hectaresInput <= 0) {
        alert("Por favor, digite um número válido de hectares!");
        return;
    }

    // Convertendo o input para número
    const hectares = parseFloat(hectaresInput);

    // Estimativa fictícia baseada em dados reais: 
    // Uma economia média de 150.000 litros de água por hectare/ano com manejo inteligente.
    const litrosEconomizados = hectares * 150000;

    // Formatando o número para o padrão brasileiro (ex: 1.500.000)
    const litrosFormatados = litrosEconomizados.toLocaleString('pt-BR');

    // Inserindo o texto no HTML
    textoResultado.innerHTML = `Ao adotar sistemas de irrigação com sensores em sua propriedade de <strong>${hectares} hectares</strong>, estima-se uma economia de aproximadamente <strong>${litrosFormatados} litros de água</strong> por ano!<br><br>Isso prova que a tecnologia mantém o agro forte e o futuro sustentável. 🌍🌾`;

    // Mostra a caixinha de resultado removendo a classe 'hidden'
    resultadoBox.classList.remove('hidden');
}