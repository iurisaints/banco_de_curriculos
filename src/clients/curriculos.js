document.addEventListener('DOMContentLoaded', function () {
    // Carregar a lista de currículos ao carregar a página
    loadCurriculosList();

    // Adicionar um ouvinte de evento ao formulário para adicionar currículos (se existir um formulário)
    document.getElementById('formAdicionarCurriculo').addEventListener('submit', function (event) {
        event.preventDefault();
        adicionarCurriculo();
    });
});

function adicionarCurriculo() {
    const nome = document.getElementById('nomeCurriculo').value;
    const endereco = document.getElementById('enderecoCurriculo').value;
    const link = document.getElementById('linkCurriculo').value;
    const telefone = document.getElementById('telefoneCurriculo').value;

    fetch('http://localhost:3000/api/curriculos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: nome,
            endereco: endereco,
            linkParaCurriculo: link,
            telefone: telefone,
        }),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            loadCurriculosList(); // Recarregar a lista após adicionar um currículo
        })
        .catch(error => console.error('Error:', error));
}

function loadCurriculosList() {
    fetch('http://localhost:3000/api/curriculos')
        .then(response => response.json())
        .then(data => displayCurriculosList(data))
        .catch(error => console.error('Error:', error));
}

function displayCurriculosList(data) {
    const curriculosContainer = document.getElementById('curriculosContainer');
    curriculosContainer.innerHTML = '';

    data.forEach(curriculo => {
        const curriculoItem = document.createElement('div');
        curriculoItem.classList.add('curriculo-item');

        const curriculoTitle = document.createElement('h3');
        curriculoTitle.textContent = curriculo.nome;

        const curriculoAddress = document.createElement('p');
        curriculoAddress.textContent = `Endereço: ${curriculo.endereco}`;

        const curriculoLink = document.createElement('p');
        const curriculoAnchor = document.createElement('a');
        curriculoAnchor.href = curriculo.linkParaCurriculo;
        curriculoAnchor.textContent = 'Link para o currículo';
        curriculoAnchor.target = '_blank';  // Abre o link em uma nova aba
        curriculoLink.appendChild(curriculoAnchor);

        const curriculoPhone = document.createElement('p');
        curriculoPhone.textContent = `Telefone: ${curriculo.telefone}`;

        curriculoItem.appendChild(curriculoTitle);
        curriculoItem.appendChild(curriculoAddress);
        curriculoItem.appendChild(curriculoLink);
        curriculoItem.appendChild(curriculoPhone);

        curriculosContainer.appendChild(curriculoItem);
    });
}
