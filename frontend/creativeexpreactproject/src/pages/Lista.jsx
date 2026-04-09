import { useState, useEffect } from 'react'
import axios from 'axios'
import { Eye, Pencil, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

function Lista({ onCadastrar, onEditar, onVerDetalhe }) {
  const [vegetais, setVegetais] = useState([])
  const [pagina, setPagina] = useState(1)
  const [totalPaginas, setTotalPaginas] = useState(1)
  const [erro, setErro] = useState('')

  useEffect(() => {
    buscarVegetais()
  }, [pagina])

  function buscarVegetais() {
    axios.get(`http://localhost:3001/vegetais?page=${pagina}&limit=5`)
      .then((resposta) => {
        setVegetais(resposta.data.dados)
        setTotalPaginas(resposta.data.totalPaginas)
      })
      .catch(() => {
        setErro('Erro ao carregar vegetais. Verifique a conexão com o servidor.')
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

  const paginaAnterior = () => setPagina(prev => Math.max(prev - 1, 1))
  const proximaPagina = () => setPagina(prev => Math.min(prev + 1, totalPaginas))

  return (
    <div>
      <div className="lista-topo">
        <h2>Lista de Vegetais</h2>
        <button className="btn btn-verde" onClick={onCadastrar}>
          + Novo Vegetal
        </button>
      </div>

      {erro && <div className="mensagem-erro">{erro}</div>}

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
          {vegetais.length > 0 ? (
            vegetais.map((vegetal) => (
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
                      title="Ver Detalhes"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      className="btn btn-verde"
                      onClick={() => onEditar(vegetal)}
                      title="Editar"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      className="btn btn-vermelho"
                      onClick={() => deletarVegetal(vegetal.id)}
                      title="Deletar"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center', padding: '20px' }}>
                Nenhum vegetal encontrado nesta página.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="paginacao">
        <button 
          className="btn btn-cinza" 
          onClick={paginaAnterior} 
          disabled={pagina === 1}
        >
          <ChevronLeft size={18} /> Anterior
        </button>
        
        <span>Página {pagina} de {totalPaginas}</span>

        <button 
          className="btn btn-cinza" 
          onClick={proximaPagina} 
          disabled={pagina === totalPaginas}
        >
          Próximo <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

export default Lista