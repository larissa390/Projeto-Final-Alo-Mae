import dadosCom from './comunidade'
{/*import { BsArrowReturnRight } from 'react-icons/bs'*/ }
import './comunidade.css'

function Comunidade() {

  return (
    <div className="container-comunidade">
      <ul className='lista-comunidade'>
        {dadosCom.map(item => {
          return (
            <div className='div-principal-comunidade'>
              <li className="cards-comunidade" key={item.id}>
                <h1 className='titulo-comunidade'>{item.comunidade}</h1>
                <p className='palavra-chave'>Palavras-Chaves: {item.palavrasChaves}</p>
                {/*
              <a href="#Contatos" className="contatos-comunidade" target="_blank">
                <BsArrowReturnRight siz={16} color="#fff"/>
              </a>
             */}

              </li>
            </div>

            
          )
        }
        )}
      </ul>
    </div >

  )


}

export default Comunidade;