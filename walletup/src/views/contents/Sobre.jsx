import React from "react"
import "./Sobre.css"
import foto from "./assets/conversacao.png"
import foto1 from "./assets/image1.svg"
import foto2 from "./assets/image3.svg"

const Home = props => (
    <div className="ContainerSobre">
        <div className="Container5">
            <div className="box5">
                <div className="TitleText">Quem somos?</div>
                <div className="SobreText">A WalletUp e um prjoeto de termino de conclusão de curso, inicialmente idealizado e desenvolvido
                por Douglas Gabriel, Aluno do 3 Ano do Curso de Desenvolvimento de Sistemas na ETEC de Hortolândia.
                O projeto nasceu com o objetivo de ajudar a democratizar o mundo dos investimentos em fundos imobiliarios.
                tendo em vista que uma parte consideravel da população não investe por falta de conhecimento financeiro.
                O intuito do projeto e realizar os calculos e as projeções que envolvem a compra de uma FII, dessa maneira,
                tornando o processo mais pratico e rapido, mas principalmente, mais acessivel.</div> 
            </div>
            <div className="box6">
                <img src={foto} alt="foto" className="foto"/>
            </div>
        </div>
        <div className="Container4">
            <div className="box3">
                <p>
                aaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaa
                </p>
                <p>
                aaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaa
                </p>
                <p>
                aaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaa
                </p>  
                <p>
                aaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaa
                </p>
            </div>
            <div className="fotos">
                <img src={foto1} alt="foto1" className="fota" />
                <img src={foto2} alt="foto2" className="fota" />
                <img src={foto1} alt="foto1" className="fota" />
                <img src={foto2} alt="foto2" className="fota" />
            </div>
        </div>
    </div>
)

export default Home
