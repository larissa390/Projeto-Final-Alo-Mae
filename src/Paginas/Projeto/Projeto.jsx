import Psicologos from "../../Componentes/Psicologos/Psicologos.jsx"
import Comunidade from "../../Componentes/Comunidade/Comunidade.jsx"
import './projeto.css'

function Projeto (){
    return(
        <>
        <div className="div-paragrafo-comunidade-pag">
        <h1 className="titulo-pag-projeto">Participe de nossas Comunidades</h1>
        <p className="primeiro-paragrafo-pag-projeto-comunidade"> Se faz necessário o preenchimento do formulário para validação da Equipe Técnica, sendo aprovada, liberamos o acesso e encaminhamos as instruções via e-mail.</p>
        </div>
         <Comunidade/>
         <Psicologos/>
        </>
    )
   }
    export default Projeto;