import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from '../Paginas/Home/Home'
import Projeto from '../Paginas/Projeto/Projeto'
import Contatos from '../Paginas/Contatos/Contatos'
import Menu from '../Componentes/Menu/Menu'
import Footer from '../Componentes/Footer/Footer'



function Rotas() {
    return (
        
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="projeto" element={<Projeto />} />
                <Route path="contatos" element={<Contatos />} />
            </Routes>
            <Footer/>


        </BrowserRouter>

    )
}

export default Rotas