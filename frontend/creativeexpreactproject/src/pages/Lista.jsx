import { useState, useEffect } from 'react'
import axios from 'axios'

function Lista({ onCadastrar, onEditar, onVerDetalhe }) {
  const [vegetais, setVegetais] = useState([])
  const [erro, setErro] = useState('')

  useEffect(() => {
    buscarVegetais()
  }, [])

  function buscarVegetais() {
    axios.get('http://localhost:3001/vegetais')
      .then((resposta) => {
        setVegetais(resposta.data)
      })
      .catch(() => {
        setErro('Erro ao carregar vegetais. Verifique se o servidor está rodando.')
      })
  }

  function deletarVegetal(id) {
    const confirmou = window.confirm('Tem certeza que quer deletar esse vegetal?')
    if (!confirmou) return

    axios.delete(`http://localhost:3001/vegetais/${id}`)
      .then(() => {
        buscarVegetais()
      })
      .catch(() => {
        setErro('Erro ao deletar vegetal.')
      })
  }

  return (
    <div>
      <div className="lista-topo">
        <h2>Lista de Vegetais</h2>
        <button className="btn btn-verde" onClick={onCadastrar}>
          + Novo Vegetal
        </button>
      </div>

      {erro && <div className="mensagem-erro">{erro}</div>}

      {vegetais.length === 0 && !erro && (
        <p>Nenhum vegetal cadastrado ainda.</p>
      )}

      {vegetais.length > 0 && (
        <table className="tabela">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Estação</th>
              <th>Dias para crescer</th>
              <th>Preço semente</th>
              <th>Preço venda</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {vegetais.map((vegetal) => (
              <tr key={vegetal.id}>
                <td>{vegetal.nome}</td>
                <td>{vegetal.estacao}</td>
                <td>{vegetal.dias_crescimento} dias</td>
                <td>{vegetal.preco_semente}g</td>
                <td>{vegetal.preco_venda}g</td>
                <td>
                  <div className="acoes">
                    <button
                      className="btn btn-azul"
                      onClick={() => onVerDetalhe(vegetal)}
                    >
                      Ver
                    </button>
                    <button
                      className="btn btn-verde"
                      onClick={() => onEditar(vegetal)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-vermelho"
                      onClick={() => deletarVegetal(vegetal.id)}
                    >
                      Deletar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Lista
