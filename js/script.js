document.getElementById('adoptionForm').onsubmit = function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const catName = document.getElementById('catName').value;

    if (!name || !email || !age || !catName) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault(); // Impede o envio do formulário
    }
};

window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const email = params.get('email');
    const age = params.get('age');
    const catName = params.get('catName');

    if (name && email && age && catName) {
        document.getElementById('result').innerHTML = `
            <h2>Dados da Adoção:</h2>
            <p>Nome: ${name}</p>
            <p>Email: ${email}</p>
            <p>Idade: ${age}</p>
            <p>Nome do Gato: ${catName}</p>
        `;
    }
};

