//4
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pessoasDAO = require('./PessoasDAO');

//5
const app = express();
const port = process.env.PORT || 8080;

//6
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//7
// Adicionado uma rota raiz para servir o arquivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/pessoas', (req, res) => {
  res.json(pessoasDAO.getPessoas());
});

app.post('/pessoas', (req, res) => {
  pessoasDAO.adicionaPessoa(req, res);
  res.json(pessoasDAO.getPessoas());
});

app.put('/pessoas/:id', (req, res) => {
  pessoasDAO.atualizarPessoa(req, res);
  res.json(pessoasDAO.getPessoas());
});

app.delete('/pessoas/:id', (req, res) => {
  pessoasDAO.excluirPessoa(req, res);
  res.json(pessoasDAO.getPessoas());
});

//8
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
