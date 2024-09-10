const express = require('express');
const server = express();
const fs = require('fs');
const bancoCurriculos = require('./data/bancoCurriculos.json');

server.use(express.json());

// Endpoint para listar todos os currículos
server.get('/curriculos', (req, res) => {
    return res.json(bancoCurriculos.curriculos);
});

// Endpoint para adicionar um novo currículo
server.post('/curriculos', (req, res) => {
    const novoCurriculo = req.body;

    // Verificar se todos os campos estão preenchidos
    if (!novoCurriculo.nome || !novoCurriculo.endereco || !novoCurriculo.linkParaCurriculo || !novoCurriculo.telefone) {
        return res.status(400).json({ mensagem: "Dados incompletos, tente novamente" });
    }

    // Adicionar o novo currículo ao array
    bancoCurriculos.curriculos.push(novoCurriculo);
    salvarDadosCurriculos(bancoCurriculos);

    return res.status(201).json({ mensagem: "Novo currículo cadastrado com sucesso!" });
});

// Endpoint para atualizar um currículo existente
server.put('/curriculos/:id', (req, res) => {
    const curriculoId = parseInt(req.params.id);
    const atualizarCurriculo = req.body;

    const indexCurriculo = bancoCurriculos.curriculos.findIndex((curriculo, index) => index === curriculoId);

    if (indexCurriculo === -1) {
        return res.status(404).json({ mensagem: "Currículo não encontrado :/" });
    }

    // Atualizar apenas os campos fornecidos
    bancoCurriculos.curriculos[indexCurriculo].nome = atualizarCurriculo.nome || bancoCurriculos.curriculos[indexCurriculo].nome;
    bancoCurriculos.curriculos[indexCurriculo].endereco = atualizarCurriculo.endereco || bancoCurriculos.curriculos[indexCurriculo].endereco;
    bancoCurriculos.curriculos[indexCurriculo].linkParaCurriculo = atualizarCurriculo.linkParaCurriculo || bancoCurriculos.curriculos[indexCurriculo].linkParaCurriculo;
    bancoCurriculos.curriculos[indexCurriculo].telefone = atualizarCurriculo.telefone || bancoCurriculos.curriculos[indexCurriculo].telefone;

    salvarDadosCurriculos(bancoCurriculos);

    return res.json({ mensagem: "Currículo atualizado com sucesso!" });
});

// Endpoint para deletar um currículo
server.delete("/curriculos/:id", (req, res) => {
    const curriculoId = parseInt(req.params.id);
    bancoCurriculos.curriculos = bancoCurriculos.curriculos.filter((_, index) => index !== curriculoId);
    salvarDadosCurriculos(bancoCurriculos);

    return res.status(200).json({ mensagem: "Currículo excluído com sucesso" });
});

// Função para salvar os dados no arquivo JSON
function salvarDadosCurriculos() {
    fs.writeFileSync(__dirname + '/data/bancoCurriculos.json', JSON.stringify(bancoCurriculos, null, 2));
}

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
