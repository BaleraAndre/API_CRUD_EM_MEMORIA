// 1- criando array de pessoas 
let pessoas = [
    { id: 1, nome: 'Alice', email: 'alice@example.com' },
    { id: 2, nome: 'Bob', email: 'bob@example.com' },
    { id: 3, nome: 'Charlie', email: 'charlie@example.com' },
    { id: 4, nome: 'David', email: 'david@example.com' }
  ];

//2 Definindo as funções do CRUD
  function excluirPessoa(req, res) {
    const pessoaId = parseInt(req.params.id);
  
    const index = pessoas.findIndex((pessoa) => pessoa.id === pessoaId);
  
    if (index !== -1) {
      const pessoaExcluida = pessoas.splice(index, 1);
      res.json({ mensagem: 'Pessoa excluída com sucesso!', pessoa: pessoaExcluida });
    } else {
      res.status(404).json({ mensagem: 'Pessoa não encontrada' });
    }
  }
  
  function adicionaPessoa(req, res) {
    const novaPessoa = req.body;
    novaPessoa.id = pessoas.length + 1;
    pessoas.push(novaPessoa);
    res.json({ mensagem: 'Pessoa adicionada com sucesso!', pessoa: novaPessoa });
  }
  
  function atualizarPessoa(req , res) {
    const pessoaId = parseInt(req.params.id);
    const body = req.body;
  
    const index = pessoas.findIndex((pessoa) => pessoa.id === pessoaId);
  
    if (index !== -1) {
      pessoas[index] = { ...pessoas[index], ...body };
      res.json({ mensagem: 'Pessoa atualizada com sucesso!', pessoa: pessoas[index] });
    } else {
      res.status(404).json({ mensagem: 'Pessoa não encontrada' });
    }
  }
  
  function getPessoas() {
    return pessoas;
  }

//3- Exportando
  module.exports = { getPessoas, adicionaPessoa, atualizarPessoa, excluirPessoa };
