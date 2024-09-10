const express = require('express');
const curriculosRouter = require('./controllers/controllerCurriculos'); // Importando o roteador correto
const cors = require('cors');

const app = express();
app.use(cors()); // Permite o CORS
app.use(express.json()); // Necessário para interpretar JSON no body das requisições

// Definir a rota base para os currículos
app.use('/api', curriculosRouter); // Corrigido o uso do roteador

app.listen(3000, () => {
    console.log('O servidor está funcionando! :D');
});
