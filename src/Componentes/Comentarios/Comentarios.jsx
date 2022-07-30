import dadosJason from "./dados.js";
import "./comentarios.css";

function Comentarios() {
  return (
    <section className="sessao-comentarios">
      <h1 className="titulo-comentarios-comunidade">Veja os comentarios das usuarias</h1>
      <div className="div-principal-comentarios">
        {dadosJason.map((item) => {
          
          return (
            <div className="container-comentarios-card">
            <div className="cards-comentarios" key={item.id}>
              <img
                src="https://media3.giphy.com/media/L39dezeZg18SSN0YRo/giphy.gif?cid=790b7611230384673aec6c4d717a14ef8c71e8c75067ce54&rid=giphy.gif&ct=s"
                className="curtidas"
              />

              <h1 className="titulo-comentarios">{item.nome}</h1>
              <p className="paragrafro-comentarios">{item.estado}</p>
              <q className="paragrafro-comentarios">{item.depoimento} </q>
            </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Comentarios;
