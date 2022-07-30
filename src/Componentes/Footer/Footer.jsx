import'./footer.css'
import iconeGit from '../../Imagem/github.png'
import iconeIn from '../../Imagem/in.png'
 
 
 function Footer() {
    return(
      <div className='footer'>
        <p className='texto-footer'> Site desenvolvido por Larissa Santana - Aluna Reprograma ©Copyright 2022</p>

        <div className='contatos-footer'>
                <a href="https://github.com/larissa390" target="_blank" class="card-redes-sociais">
                    <img src={iconeGit} alt="imagem logo git"></img>
                
                </a>

                <a href="https://www.linkedin.com/in/larissasantt/" target="_blank" class="card-redes-sociais">
                    <img src={iconeIn} alt="imagem logo linkedlin"></img>
                </a>

            </div>

      </div>
    )
  }
  
  export default Footer