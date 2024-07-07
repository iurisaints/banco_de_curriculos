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
    const vagaContainer = document.getElementById('vagaContainer');
    vagaContainer.innerHTML = '';

    for (let i = 0; i < data.length; i += 3) {
        const vagaRow = document.createElement('div');
        vagaRow.classList.add('vaga-row');

        for (let j = i; j < i + 3 && j < data.length; j++) {
            const vaga = data[j];
            const vagaItem = document.createElement('div');
            vagaItem.classList.add('vaga-item');

            const vagaImage = document.createElement('img');
            vagaImage.src = vaga.thumbnail;  // Certifique-se de que cada objeto "vaga" tenha uma propriedade "thumbnail" com a URL da imagem.
            vagaImage.alt = `Imagem de ${vaga.nome}`;

            const vagaTitle = document.createElement('h3');
            vagaTitle.textContent = vaga.nome;

            const vagaAddress = document.createElement('p');
            vagaAddress.textContent = `Endereço: ${vaga.endereco}`;

            const vagaLink = document.createElement('p');
            const vagaAnchor = document.createElement('a');
            vagaAnchor.href = vaga.link;
            vagaAnchor.textContent = 'Link para a vaga';
            vagaAnchor.target = '_blank';  // Abre o link em uma nova aba
            vagaLink.appendChild(vagaAnchor);

            const vagaPhone = document.createElement('p');
            vagaPhone.textContent = `Instagram: ${vaga.telefone}`;

            vagaItem.appendChild(vagaImage);
            vagaItem.appendChild(vagaTitle);
            vagaItem.appendChild(vagaAddress);
            vagaItem.appendChild(vagaLink);
            vagaItem.appendChild(vagaPhone);

            vagaRow.appendChild(vagaItem);
        }

        vagaContainer.appendChild(vagaRow);
    }
}
