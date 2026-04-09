function Detalhe({ vegetal, onVoltar, onEditar }) {
  return (
    <div className="detalhe-container">
      <h2>🔍 Detalhes do Vegetal</h2>

      <div className="detalhe-linha">
        <span className="detalhe-label">Nome</span>
        <span>{vegetal.nome}</span>
      </div>

      <div className="detalhe-linha">
        <span className="detalhe-label">Estação</span>
        <span>{vegetal.estacao}</span>
      </div>

      <div className="detalhe-linha">
        <span className="detalhe-label">Dias para crescer</span>
        <span>{vegetal.dias_crescimento} dias</span>
      </div>

      <div className="detalhe-linha">
        <span className="detalhe-label">Preço da semente</span>
        <span>{vegetal.preco_semente}g</span>
      </div>

      <div className="detalhe-linha">
        <span className="detalhe-label">Preço de venda</span>
        <span>{vegetal.preco_venda}g</span>
      </div>

      <div className="detalhe-botoes">
        <button className="btn btn-verde" onClick={() => onEditar(vegetal)}>
          Editar
        </button>
        <button className="btn btn-cinza" onClick={onVoltar}>
          Voltar
        </button>
      </div>
    </div>
  )
}

export default Detalhe
