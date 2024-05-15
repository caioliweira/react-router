import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from"./Home"
import Sobre from "./Sobre"
import Contato from "./Contato"
import Header from "./Header"
import Rodape from "./Rodape"
//BrowserRouter deve ser o componente pai que envolve tudo que depende do React-Router.
//Routes define a area em que vamos colocar os nossos Router.
//O router recebe um caminho em path,se esse caminho for o mesmo da Url ele irá renderizar o componente que estiver dentro de do element={}
const App = () => {
    return (

        <BrowserRouter>
          <Header/>
            <Routes>
            
               
                <Route path="/" element={<Home/>} />
                <Route path="sobre" element={<Sobre/>} />
                <Route path="contato" element={<Contato/>} />
            </Routes>
            <Rodape/>
        </BrowserRouter>

    )
}
export default App;