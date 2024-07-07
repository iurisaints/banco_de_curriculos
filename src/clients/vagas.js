let vagas =  [
    {
      nome: "React & Node Developer (Remote)",
      endereco: "Vipany Global Solutions Pvt Ltd",
      link: "https://www.linkedin.com/jobs/view/3969485102/?alternateChannel=search&refId=toTqv4XoxVlxHkMJaivIYA%3D%3D&trackingId=jDFLvCFkHy9hr0xpxKf3fA%3D%3D&trk=d_flagship3_search_srp_jobs",
      telefone: "vipanygroup.com",
      thumbnail: "https://media.licdn.com/dms/image/D5622AQH_ic1iVCHLsA/feedshare-shrink_2048_1536/0/1711006752159?e=1723075200&v=beta&t=258vJdYyWCkrYnzoSgzRZo5LrTNo0YNVskzztt4EtAQ"
    },
    {
      nome: "Estágio em Desenvolvimento de Software",
      endereco: "Radix Brasil",
      link: "https://www.linkedin.com/jobs/view/3960509406/?alternateChannel=search&refId=BWOHGZymavjQ7gruq%2BkBaw%3D%3D&trackingId=NoHYyDTZmJ%2BoueM7Eu3VZA%3D%3D",
      telefone: "@radixeng",
      thumbnail: "https://media.licdn.com/dms/image/D4D09AQGsxQP0hSQsgQ/company-featured_1128_635/0/1684351075542?e=1724889600&v=beta&t=NedIlmJYlMypkzbdKkDW-jZ4TaCyOsk86PkCQHRvp88"
    },
    {
      nome: "Estágio em Desenvolvedor Full Stack Trabalho Remoto Estágio",
      endereco: "Instituto de Pesquisas Eldorado",
      link: "https://www.linkedin.com/jobs/view/3955450665/?alternateChannel=search&refId=x5hsV09pP7Yx0PH6LLrExA%3D%3D&trackingId=QKAHIXo6quDn6DnD64yY%2Fw%3D%3D&trk=d_flagship3_search_srp_jobs",
      telefone: "@institutoeldorado",
      thumbnail: "https://media.licdn.com/dms/image/D4D10AQEplxkKo4Xoxw/image-shrink_800/0/1719572464270?e=1720976400&v=beta&t=1XJdX9TzeZO4uA5IbZoEu05KK7eg1qeJWarW5CgTCoA"
    },
    {
        nome: "Arquiteto de Sistemas I",
        endereco: "Aegea Saneamento",
        link: "https://www.linkedin.com/jobs/view/3952977209/?alternateChannel=search&refId=x5hsV09pP7Yx0PH6LLrExA%3D%3D&trackingId=I5YR3A9YUVyjcVmIo7O7RQ%3D%3D",
        telefone: "aegea.com.br",
        thumbnail: "https://media.licdn.com/dms/image/D4D09AQEAWsMJSCABcg/company-featured_1128_635/0/1670434438461?e=1726099200&v=beta&t=083TOLR63ZetCgk9OKsrRxKkyhXaGLaVEXECAyq0bpw"
    },
    {
        nome: "Analista de Sistemas de TI",
        endereco: "Lojas Renner S.A.",
        link: "https://www.linkedin.com/jobs/view/3918496964/?alternateChannel=search&refId=x5hsV09pP7Yx0PH6LLrExA%3D%3D&trackingId=NkskK%2FwXlt3Z5XIKm432Dg%3D%3D&trk=d_flagship3_search_srp_jobs",
        telefone: "@lojasrenner",
        thumbnail: "https://media.licdn.com/dms/image/D4D22AQHEg2S66AiuWQ/feedshare-shrink_1280/0/1719100698705?e=1723075200&v=beta&t=mlBiMBzQhWcnIAltDKuik3GBCHJdLpd_3MOzQNwXRIA"
    },
    {
        nome: "Desenvolvedor(a) de Software - Desktop (Presencial)",
        endereco: "Nelogica",
        link: "https://www.linkedin.com/jobs/view/3961702958/?alternateChannel=search&refId=BtcJZ9p4u8%2BizK2e66hcLQ%3D%3D&trackingId=ItdaIiHPlTVmO0%2FrRDPXpg%3D%3D",
        telefone: "@nelogica_brasil",
        thumbnail: "https://media.licdn.com/dms/image/D4D22AQG5cGQPB6UuUw/feedshare-shrink_1280/0/1718651813412?e=1723075200&v=beta&t=IqlgP4w45ilQj87Vjj8mEGzAeUhC7T-9Y4RA3dQrL3I"
    }
  ]

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

  vagas.push({
      nome: nome,
      endereco: endereco,
      link: link,
      telefone: telefone,
      thumbnail: "" // Adicione um campo de miniatura vazio ou um padrão
  });

  loadVagasList(); // Recarregar a lista após adicionar uma vaga
}

function loadVagasList() {
  displayVagasList(vagas);
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
