const express = require('express');
const curriculosRouter = require('./controllers/controllerCurriculos'); // Importa o controller de currículos
const cors = require('cors');

const app = express();
app.use(cors()); // Permite o CORS (Cross-Origin Resource Sharing)
app.use(express.json()); // Necessário para interpretar JSON no body das requisições

// Definir a rota base para os currículos
app.use('/api', curriculosRouter.server); // '/api/curriculos'

app.listen(3000, () => {
    console.log('O servidor está funcionando! :D');
});
