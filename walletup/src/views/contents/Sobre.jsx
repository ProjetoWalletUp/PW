import "./Sobre.css"
import React from "react"
import foto from "./assets/image3.svg"
import foto1 from "./assets/image5.svg"

const Sobre = props => (
    <div className="ContainerSobre">
        <img src={foto} alt="foto" className="Sobre"/>
        <div className="TextoSobre">
            <h1 className="Sobre">
                A WalletUp e um prjoeto de termino de conclusão de curso, inicialmente idealizado e desenvolvido
                por Douglas Gabriel, Aluno do 3 Ano do Curso de Desenvolvimento de Sistemas na ETEC de Hortolândia.
                O projeto nasceu com o objetivo de ajudar a democratizar o mundo dos investimentos em fundos imobiliarios.
                tendo em vista que uma parte consideravel da população não investe por falta de conhecimento financeiro.
                O intuito do projeto e realizar os calculos e as projeções que envolvem a compra de uma FII, dessa maneira,
                tornando o processo mais pratico e rapido, mas principalmente, mais acessivel.
            </h1>
            <img src={foto1} alt="foto1" className="FotoTexto"/>
        </div>
    </div>
)
export default Sobre