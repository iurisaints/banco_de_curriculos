const express = require('express');
const server = express();
const dadosVagas = require('./data/dadosVagas.json');
const fs = require('fs');

server.use(express.json());

server.post('/vagas', (req, res) => {
    const novoVaga = req.body;

    if (!novoVaga.nome || !novoVaga.endereco || !novoVaga.link || !novoVaga.telefone) {
        return res.status(400).json({ mensagem: "Dados incompletos, tente novamente" });
    } else {
        dadosVagas.Vaga.push(novoVaga);
        salvarDadosVagas(dadosVagas);
        return res.status(201).json({ mensagem: "Nova vaga cadastrado com sucesso!" });
    }
});

server.get('/vagas', (req, res) => {
    return res.json(dadosVagas.Vaga);
});

server.put('/vagas/:id', (req, res) => {
    const vagaId = parseInt(req.params.id);
    const atualizarVaga = req.body;
    const idVaga = dadosVagas.Vaga.findIndex(c => c.id === vagaId);

    if (idVaga === -1) {
        return res.status(404).json({ mensagem: "Vaga não encontrado :/" });
    } else {
        dadosVagas.Vaga[idVaga].nome = atualizarVaga.nome || dadosVagas.Vaga[idVaga].nome;
        dadosVagas.Vaga[idVaga].endereco = atualizarVaga.endereco || dadosVagas.Vaga[idVaga].endereco;
        dadosVagas.Vaga[idVaga].email = atualizarVaga.email || dadosVagas.Vaga[idVaga].email;
        dadosVagas.Vaga[idVaga].telefone = atualizarVaga.telefone || dadosVagas.Vaga[idVaga].telefone;

        salvarDadosVagas(dadosVagas);

        return res.json({ mensagem: "Vaga atualizada com sucesso!" });
    }
});

server.delete("/vagas/:id", (req, res) => {
    const vagaId = parseInt(req.params.id);
    dadosVagas.Vaga = dadosVagas.Vaga.filter(c => c.id !== vagaId);
    salvarDadosVagas(dadosVagas);

    return res.status(200).json({ mensagem: "Vaga excluído com sucesso" });
});

function salvarDadosVagas() {
    fs.writeFileSync(__dirname + '/data/dadosVagas.json', JSON.stringify(dadosVagas, null, 2));
}

module.exports = { server, salvarDadosVagas };
