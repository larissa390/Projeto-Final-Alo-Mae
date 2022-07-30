import Comentarios from "../../Componentes/Comentarios/Comentarios";
import imagemRamon from "../../Imagem/larissa_ramon.jpg";
import imagemMulheres from "../../Imagem/teste02.png";
import "./home.css";

function Home() {
  return (
    <>
      <section className="primeira-sessao-home">
        <div className="div-primeira-sessao">
          <h1 className="primeiro-titulo-home">Alô, Mãe!</h1>
        </div>

        <img
          src={imagemMulheres}
          title="Montagem de fotos"
          alt="imagem larissa"
          className="imagem-mulheres"
        ></img>
      </section>

      <section className="segunda-sessao-home">
        <div className="div-segunda-sessao">
          <h2 className="segunto-titulo-home"> Você não está sozinha!</h2>

          <p className="paragrafo-segunda-sessao">
            A mulher se tornou mãe e não nasceu sendo uma, tenha empatia pelo
            seu processo. <br></br> A maternidade é um mundo paralelo onde aprendemos a
            caminhar todos os dias. Essa Plataforma traz a proposta de criar uma
            rede de acolhimento para as Mães, tendo como principais valores a
            transparência, solidariedade e a ética. Sinta-se livre , pois esse
            espaço também pode ser seu. Temos apoio psicológico de profissionais
            voluntários, para potencialização da rede, relatos de experiências
            que podem contribuir na sua jornada.
          </p>
        </div>
      </section>

      <section className="terceira-sessao-home">
        <div className="contaniner-terceira-sessao-home">
        <div className="div-img-terceira-sessao">
          <img
            src={imagemRamon}
            alt="imagem mae e filho"
            className="imagem-ramon"
          ></img>
        </div>

        <div className="div-paragrafo-terceira-sessao">
          <h2 className="titulo-terceira-sessao"> O Incio </h2>
          <p className="paragrafo-terceira-sessao">
            Larissa Santana é a Idealizadora da Alô, Mãe! <br></br>
            Mãe e estudante de Desenvolvimento Front-End, sonha em construir
            degraus para uma sociedade melhor. Elaborou este projeto para ser um
            canal de informação para Mães, transmitindo conteúdo de forma
            simples e gratuita, você embarca nesse desafio?
          </p>
        </div>
        </div>
      </section>

      <Comentarios />
    </>
  );
}

export default Home;
