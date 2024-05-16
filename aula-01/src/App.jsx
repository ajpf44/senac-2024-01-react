import './App.css'
import MeuAlerta from './components/MeuAlerta'
import { Propriedade } from './components/Propriedade'
import Login from './pages/Login'

function App() {
  const texto = "Eu sou a informação que vem do componente pai"
  return(
    <>
      {/* <Propriedade texto={texto}/>
      <Propriedade texto={texto}/>
      <MeuAlerta msg="Eu Vim do APP"/>
      <MeuAlerta msg="Eu sou a segunda Mensagem"/> */}
      <Login />
    </>
  )
}

export default App
