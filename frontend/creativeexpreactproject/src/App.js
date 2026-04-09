import { useState } from 'react'
import Lista from './pages/Lista'
import Formulario from './pages/Formulario'
import Detalhe from './pages/Detalhe'
import './App.css'

function App() {
  const [tela, setTela] = useState('lista')

  const [vegetalSelecionado, setVegetalSelecionado] = useState(null)

  function irParaLista() {
    setVegetalSelecionado(null)
    setTela('lista')
  }

  function irParaCadastro() {
    setVegetalSelecionado(null)
    setTela('formulario')
  }

  function irParaEditar(vegetal) {
    setVegetalSelecionado(vegetal)
    setTela('formulario')
  }

  function irParaDetalhe(vegetal) {
    setVegetalSelecionado(vegetal)
    setTela('detalhe')
  }

  return (
    <>
      <header className="cabecalho">
        <h1 onClick={irParaLista}>Stardew Valley Vegetais</h1>
        <p className="nome-aluno">Eduardo Mendes Carbonera</p>
      </header>

      <main className="conteudo">
        {tela === 'lista' && (
          <Lista
            onCadastrar={irParaCadastro}
            onEditar={irParaEditar}
            onVerDetalhe={irParaDetalhe}
          />
        )}

        {tela === 'formulario' && (
          <Formulario
            vegetal={vegetalSelecionado}
            onVoltar={irParaLista}
          />
        )}

        {tela === 'detalhe' && (
          <Detalhe
            vegetal={vegetalSelecionado}
            onVoltar={irParaLista}
            onEditar={irParaEditar}
          />
        )}
      </main>

      <footer className="rodape">
      </footer>
    </>
  )
}

export default App