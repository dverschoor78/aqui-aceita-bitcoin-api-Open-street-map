const express = require('express');
const dotenv = require('dotenv');

// Carregar vari�veis de ambiente
dotenv.config();

// Inicializar aplica��o Express
const app = express();
const port = process.env.PORT || 3000;

// Middleware b�sico
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota de teste
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'API is running' });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(\Server running on port \\);
});

module.exports = app;
