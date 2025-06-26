// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Obtém referências para o formulário e a mensagem
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    // Adiciona um ouvinte de evento para o envio do formulário
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtém os valores dos campos de usuário e senha
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verifica as credenciais
        if (username === 'admin' && password === '123@456') {
            // Credenciais corretas: exibe mensagem de sucesso
            message.textContent = 'Login bem-sucedido!';
            message.style.color = 'green';
            // Aqui você poderia redirecionar para outra página, por exemplo:
            // window.location.href = 'dashboard.html';
        } else {
            // Credenciais incorretas: exibe mensagem de erro
            message.textContent = 'Usuário ou senha incorretos!';
            message.style.color = 'red';
        }
    });
});