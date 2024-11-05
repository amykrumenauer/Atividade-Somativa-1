// Validação do formulário
document.getElementById('adoptionForm').onsubmit = function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const catName = document.getElementById('catName').value;

    if (!name || !email || !telefone || !catName) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault(); // Impede o envio do formulário
    }
};

// Captura dos dados enviados via GET
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const email = params.get('email');
    const telefone = params.get('telefone');
    const catName = params.get('catName');

    if (name && email && telefone && catName) {
        document.getElementById('result').innerHTML = `
            <h2>Dados da Adoção:</h2>
            <p>Nome: ${name}</p>
            <p>Email: ${email}</p>
            <p>Idade: ${telefone}</p>
            <p>Nome do Gato: ${catName}</p>
        `;
    }
};

