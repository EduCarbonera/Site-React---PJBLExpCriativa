const db = require('../db')

// lista todos os vegetais
function listar(req, res) {
  db.query('SELECT * FROM vegetais', (err, resultado) => {
    if (err) {
      res.status(500).json({ erro: 'Erro ao buscar vegetais' })
      return
    }
    res.json(resultado)
  })
}

// busca um vegetal pelo id
function buscarPorId(req, res) {
  const id = req.params.id

  db.query('SELECT * FROM vegetais WHERE id = ?', [id], (err, resultado) => {
    if (err) {
      res.status(500).json({ erro: 'Erro ao buscar vegetal' })
      return
    }
    if (resultado.length === 0) {
      res.status(404).json({ erro: 'Vegetal não encontrado' })
      return
    }
    res.json(resultado[0])
  })
}

// cadastra um novo vegetal
function cadastrar(req, res) {
  const { nome, estacao, dias_crescimento, preco_semente, preco_venda } = req.body

  // validação básica
  if (!nome || !estacao || !dias_crescimento || !preco_semente || !preco_venda) {
    res.status(400).json({ erro: 'Preencha todos os campos' })
    return
  }

  const sql = 'INSERT INTO vegetais (nome, estacao, dias_crescimento, preco_semente, preco_venda) VALUES (?, ?, ?, ?, ?)'

  db.query(sql, [nome, estacao, dias_crescimento, preco_semente, preco_venda], (err, resultado) => {
    if (err) {
      res.status(500).json({ erro: 'Erro ao cadastrar vegetal' })
      return
    }
    res.status(201).json({ mensagem: 'Vegetal cadastrado com sucesso!' })
  })
}

// atualiza um vegetal existente
function atualizar(req, res) {
  const id = req.params.id
  const { nome, estacao, dias_crescimento, preco_semente, preco_venda } = req.body

  // validação básica
  if (!nome || !estacao || !dias_crescimento || !preco_semente || !preco_venda) {
    res.status(400).json({ erro: 'Preencha todos os campos' })
    return
  }

  const sql = 'UPDATE vegetais SET nome = ?, estacao = ?, dias_crescimento = ?, preco_semente = ?, preco_venda = ? WHERE id = ?'

  db.query(sql, [nome, estacao, dias_crescimento, preco_semente, preco_venda, id], (err, resultado) => {
    if (err) {
      res.status(500).json({ erro: 'Erro ao atualizar vegetal' })
      return
    }
    res.json({ mensagem: 'Vegetal atualizado com sucesso!' })
  })
}

// deleta um vegetal
function deletar(req, res) {
  const id = req.params.id

  db.query('DELETE FROM vegetais WHERE id = ?', [id], (err, resultado) => {
    if (err) {
      res.status(500).json({ erro: 'Erro ao deletar vegetal' })
      return
    }
    res.json({ mensagem: 'Vegetal deletado com sucesso!' })
  })
}

module.exports = { listar, buscarPorId, cadastrar, atualizar, deletar }