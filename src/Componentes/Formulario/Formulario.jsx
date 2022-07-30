import React from "react";
import './formulario.css';
import Animacao from '../../Imagem/animacao_contato.svg'
import { v4 as uuid } from "uuid";

function ItemForm() {
    return (
        <form className="formulario">
            <img src={Animacao} alt="animacao contatos" className="animacao-contato"></img>

            <div className="apresentacao-formulario">
               
                <h2 className="titulo-chamada">
                    Olá, Mamãe!
                </h2>
                <p className="paragrafo-formulario">Queremos construir uma Comunidade, Humanizada, Transparente e para um melhor direcionamento em rede é de extrema importância, termos conhecimento de suas vivências, anseios e preocupações. </p>


                <h2 className="titulo-chamada">
                    Voluntário
                </h2>
                <p className="paragrafo-formulario">Nosso site está em processo de construção, sua ajuda é essencial!
                    Conta pra gente, qual sua especialidade/habilidade e em qual Área consegue nos auxiliar.
                </p>

                <h2 className="titulo-chamada">
                    Empresas

                </h2>
                <p className="paragrafo-formulario">Quer entender melhor o nosso Projeto e nossas metas futuras? Basta nos contatar que agendamos uma reunião.

                </p>


            </div>
            <h1 className="fale-conosco">Fale conosco</h1>
            <section className="container-formulario">
                <label className="dados">
                    Name:
                    <input type="text" name="name" placeholder="Digite o seu nome aqui" />
                </label>

                <label className="dados">
                    E-mail:
                    <input type="text" name="e-mail" placeholder="seunome@dominio.com" />
                </label>

                <label className="dados">
                    Whatsapp:
                    <input type="number" name="tel" className="celular" placeholder="(DDD) 9 0000 0000" />
                </label>


                <label className="dados">

                    <div className="botoes">
                        Propósito:
                        <input type="checkbox" className="checkbox" value="Mãe" />
                        <label for="Mae">Mãe</label>

                        <input type="checkbox" className="checkbox" value="Empresa" />
                        <label for="Empresa">Empresa</label>

                        <input type="checkbox" className="checkbox" value="Voluntarios" />
                        <label for="Voluntarios">Voluntário</label>
                    </div>
                </label>

                <label className="dados">
                    Estado:
                    <select className="estado">
                        <option selected disabled value="">Selecione</option>
                        <option >AC</option>
                        <option>AL</option>
                        <option>AP</option>
                        <option>AM</option>
                        <option>BA</option>
                        <option>CE</option>
                        <option>DF</option>
                        <option>ES</option>
                        <option>GO</option>
                        <option>MA</option>
                        <option>MT</option>
                        <option>MS</option>
                        <option>MG</option>
                        <option>PA</option>
                        <option>PB</option>
                        <option>PR</option>
                        <option>PE</option>
                        <option>PI</option>
                        <option>RJ</option>
                        <option>RN</option>
                        <option>RS</option>
                        <option>RO</option>
                        <option>RR</option>
                        <option>SC</option>
                        <option>SP</option>
                        <option>SE</option>
                        <option>TO</option>
                    </select>
                </label>

                <label className="dados">
                    O que lhe trouxe, até aqui?:
                    < input type="text" className="mais-informacoes" placeholder="Digite aqui" />
                </label>

                <br />
                <input type="submit" className="botao" value="Enviar" />
            </section>




        </form>
    );
}

export default ItemForm;