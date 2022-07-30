import dadosPsi from "./psicologos.js";
import "./psicologos.css";

function Psicologos() {
  return (
    <div className="container-psicologos">.
    <div className="div-paragrafo-psicologos">
      <h1 className="titulo-psicologos">Conheça o quadro de Apoio Psicologico</h1>
      <p className="segundo-paragrafo-pag-psicologos">
        Se faz necessário o preenchimento do formulário para validação da Equipe
        Técnica, sendo aprovada, liberamos o acesso e encaminhamos as instruções
        via e-mail.
      </p>
      </div>
      <div className="div-psicologos">
        {dadosPsi.map((item) => {
          return (
            <>
              <div className="cards-psicologos" key={item.id}>
                <img
                  src={item.imagem}
                  alt="imagem doutora"
                  className="imagens-psicologas"
                ></img>
                <h1 className="titulo-psicologos">{item.doutor}</h1>

                <div className="descricao-card-psicologos">
                  <p className="estado"> Estado: {item.estado}</p>
                  <p className="atendimento">
                    Modalidade Atendimento: {item.atendimento}
                  </p>
                  <p className="especializacao">
                    Especialização: {item.especializacao}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Psicologos;
