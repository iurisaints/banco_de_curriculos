// clientes.js

document.addEventListener('DOMContentLoaded', function () {
    // Carregar a lista de clientes ao carregar a página
    loadVagasList();

    // Adicionar um ouvinte de evento ao formulário para adicionar clientes
    document.getElementById('formAdicionarVagas').addEventListener('submit', function (event) {
        event.preventDefault();
        adicionarVaga();
    });
});

function adicionarVaga() {
    const nome = document.getElementById('nomeVaga').value;
    const endereco = document.getElementById('enderecoVaga').value;
    const link = document.getElementById('linkVaga').value;
    const telefone = document.getElementById('telefoneVaga').value;

    fetch('http://localhost:3000/api/vagas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: nome,
            endereco: endereco,
            link: link,
            telefone: telefone,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        loadVagasList(); // Recarregar a lista após adicionar um cliente
    })
    .catch(error => console.error('Error:', error));
}

function loadVagasList() {
    fetch('http://localhost:3000/api/vagas')
        .then(response => response.json())
        .then(data => displayVagasList(data))
        .catch(error => console.error('Error:', error));
}

function displayVagasList(data) {
    const listaVagas = document.getElementById('listaVagas');
    listaVagas.innerHTML = '';

    data.forEach(vaga => {
        const listItem = document.createElement('li');
        listItem.textContent = `Nome: ${vaga.nome} - Endereço: ${vaga.endereco} - Link: ${vaga.link} - Telefone: ${vaga.telefone}`;
        listaVagas.appendChild(listItem);
    });
}
