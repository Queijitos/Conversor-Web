document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter valores de entrada informados pelo usuário
    const valor = parseFloat(document.getElementById('valor').value);
    const daMoeda = document.getElementById('Damoeda').value;
    const paraMoeda = document.getElementById('Paramoeda').value;

    // Definir taxas de câmbio fixas
    const exchangeRates = {
        USD: { BRL: 5.70, EUR: 0.93, USD: 1 },
        BRL: { USD: 0.18, EUR: 0.16, BRL: 1 },
        EUR: { USD: 1.08, BRL: 6.16, EUR: 1 },
    };

    // Verificar se a conversão é necessária
    if (daMoeda === paraMoeda) {
        document.getElementById('Resultado').innerText = `O valor é o mesmo: ${valor.toFixed(2)} ${paraMoeda}`;
        return;
    }

    // Calcular valor convertido
    const taxaConversao = exchangeRates[daMoeda][paraMoeda];
    const valorConvertido = valor * taxaConversao;

    // Exibir o resultado
    document.getElementById('Resultado').innerText = `Resultado: ${valorConvertido.toFixed(2)} ${paraMoeda}`;
});
