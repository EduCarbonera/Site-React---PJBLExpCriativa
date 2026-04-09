import { useState } from 'react'
import axios from 'axios'

function Formulario({ vegetal, onVoltar }) {
  // se veio um vegetal, preenche os campos (modo edição)
  // se não veio, deixa vazio (modo cadastro)
  const [nome, setNome] = useState(vegetal ? vegetal.nome : '')
  const [estacao, setEstacao] = useState(vegetal ? vegetal.estacao : '')
  const [diasCrescimento, setDiasCrescimento] = useState(vegetal ? vegetal.dias_crescimento : '')
  const [precoSemente, setPrecoSemente] = useState(vegetal ? vegetal.preco_semente : '')
  const [precoVenda, setPrecoVenda] = useState(vegetal ? vegetal.preco_venda : '')

  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState('')

  function salvar() {
    setErro('')
    setSucesso('')

    // validação no frontend também
    if (!nome || !estacao || !diasCrescimento || !precoSemente || !precoVenda) {
      setErro('Preencha todos os campos!')
      return
    }

    const dados = {
      nome,
      estacao,
      dias_crescimento: Number(diasCrescimento),
      preco_semente: Number(precoSemente),
      preco_venda: Number(precoVenda)
    }

    // se tem vegetal, é edição (PUT), senão é cadastro (POST)
    if (vegetal) {
      axios.put(`http://localhost:3001/vegetais/${vegetal.id}`, dados)
        .then(() => {
          setSucesso('Vegetal atualizado com sucesso!')
        })
        .catch(() => {
          setErro('Erro ao atualizar vegetal.')
        })
    } else {
      axios.post('http://localhost:3001/vegetais', dados)
        .then(() => {
          setSucesso('Vegetal cadastrado com sucesso!')
          // limpa os campos após cadastrar
          setNome('')
          setEstacao('')
          setDiasCrescimento('')
          setPrecoSemente('')
          setPrecoVenda('')
        })
        .catch(() => {
          setErro('Erro ao cadastrar vegetal.')
        })
    }
  }

  return (
    <div className="form-container">
      <h2>{vegetal ? ' Editar Vegetal' : '➕ Novo Vegetal'}</h2>

      {erro && <div className="mensagem-erro">{erro}</div>}
      {sucesso && <div className="mensagem-sucesso">{sucesso}</div>}

      <div className="campo">
        <label>Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Estação</label>
        <select value={estacao} onChange={(e) => setEstacao(e.target.value)}>
          <option value="">Selecione...</option>
          <option value="Primavera">Primavera</option>
          <option value="Verão">Verão</option>
          <option value="Outono">Outono</option>
          <option value="Inverno">Inverno</option>
        </select>
      </div>

      <div className="campo">
        <label>Dias para crescer</label>
        <input
          type="number"
          value={diasCrescimento}
          onChange={(e) => setDiasCrescimento(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Preço da semente (g)</label>
        <input
          type="number"
          value={precoSemente}
          onChange={(e) => setPrecoSemente(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Preço de venda (g)</label>
        <input
          type="number"
          value={precoVenda}
          onChange={(e) => setPrecoVenda(e.target.value)}
        />
      </div>

      <div className="form-botoes">
        <button className="btn btn-verde" onClick={salvar}>
          Salvar
        </button>
        <button className="btn btn-cinza" onClick={onVoltar}>
          Voltar
        </button>
      </div>
    </div>
  )
}

export default Formulario
