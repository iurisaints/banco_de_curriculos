const express = require('express');
const vagasRouter = require('./controllers/controllerClientes');
const cors = require('cors');

const app = express();
app.use(cors()); // Adicione esta linha para configurar o CORS

app.use('/api', vagasRouter.server); // '/api/vagas'

app.listen(3000, () => {
    console.log('O servidor está funcionando! :D');
});
