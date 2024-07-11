function criptografar() {
    let texto = document.getElementById('entradaTexto').value;
    // Implementar a lógica de criptografia
    let textoCriptografado = texto.split('').reverse().join(''); // Exemplo simples de reversão de texto
    document.getElementById('saidaTexto').innerText = textoCriptografado;
    document.getElementById('saidaOrientacoes').style.display = 'none';
    document.getElementById('saidaResultado').style.display = 'block';
}

function descriptografar() {
    let texto = document.getElementById('entradaTexto').value;
    // Implementar a lógica de descriptografia
    let textoDescriptografado = texto.split('').reverse().join(''); // Exemplo simples de reversão de texto
    document.getElementById('saidaTexto').innerText = textoDescriptografado;
    document.getElementById('saidaOrientacoes').style.display = 'none';
    document.getElementById('saidaResultado').style.display = 'block';
}

function copiar() {
    let texto = document.getElementById('saidaTexto').innerText;
    navigator.clipboard.writeText(texto).then(function() {
        alert('Texto copiado!');
    }, function(err) {
        console.error('Erro ao copiar texto: ', err);
    });
}

function limpar() {
    document.getElementById('entradaTexto').value = '';
    document.getElementById('saidaTexto').innerText = '';
    document.getElementById('saidaOrientacoes').style.display = 'block';
    document.getElementById('saidaResultado').style.display = 'none';
}
