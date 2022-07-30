import Comentarios from "../../Componentes/Comentarios/Comentarios";
import imagemLarissa from "../../Imagem/imagemlarissa.jpg";
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
            seu processo. <br></br>
            Nossa Plataforma traz a proposta de criar uma rede de acolhimento
            para as Mães, tendo como principais valores a transparência,
            solidariedade e a ética. Sinta-se livre e segura, todas as
            integrantes passam por uma Análise Técnica, para ter acesso a Rede.{" "}
            <br></br>
            Temos um time de Mulheres que oferecem apoio Psicológico com eixos
            de especialização para atendimento individual para Mães, Filhos e
            rodas de conversas para troca de vivências. Juntas, vamos
            revolucionar!
          </p>
        </div>
      </section>

      <section className="terceira-sessao-home">
        <div className="contaniner-terceira-sessao-home">
          <div className="div-img-terceira-sessao">
            <img
              src={imagemLarissa}
              alt="imagem mae e filho"
              className="imagem-ramon"
            ></img>
          </div>

          <div className="div-paragrafo-terceira-sessao">
            <h2 className="titulo-terceira-sessao"> O Início </h2>
            <p className="paragrafo-terceira-sessao">
              Larissa Santana é a Idealizadora da Alô, Mãe! <br></br>
              Mãe e estudante de Desenvolvimento Front-End, sonha em construir
              degraus para que pessoas tenham acesso às informações. A partir de
              suas experiências com a Maternidade, notou a necessidade de apoio
              e poder de voz as Mães, elaborou este projeto para ser um canal
              interativo e sensível, com transmissão de conteúdo de forma
              simples e gratuita. Você embarca nesse desafio?
            </p>
          </div>
        </div>
      </section>

      <Comentarios />
    </>
  );
}

export default Home;
