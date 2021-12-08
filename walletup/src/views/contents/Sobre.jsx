import React from "react"
import "./Sobre.css"
import foto from "./assets/conversacao.png"
import foto1 from "./assets/maria.jpeg"
import foto2 from "./assets/dougas.jpeg"
import foto3 from "./assets/nycole.jpeg"
import foto4 from "./assets/doug.jpeg"

const Home = props => (
    <div className="ContainerSobre">
        <div className="Container5">
            <div className="box5">
                <div className="TitleText">Quem somos?</div>
                <div className="SobreText">A WalletUp é um projeto de término de conclusão de curso, nasceu com o objetivo 
                de ajudar a democratizar o mundo dos investimentos em fundos imobiliarios.
                Tendo em vista que uma parte consideravel da população não investe por falta de conhecimento financeiro.
                O intuito então é realizar os calculos e as projeções que envolvem a compra de um fundo imobiliário, dessa maneira,
                tornando o processo mais fácil e rápido, mas principalmente, mais acessível.</div> 
            </div>
            <div className="box6">
                <img src={foto} alt="foto" className="foto"/>
            </div>
        </div>
        <div className="Container4">
                <div className="box3">
                    <p>
                    Olá, eu sou a Maria Stefani, 
                    tenho 16 anos, estudo na Etec 
                    de Hortolândia e sou designer 
                    de interface do projeto.
                    </p>
                    <p>
                    Olá, eu sou o Douglas Ribas, 
                    tenho 17 anos, estudo na Etec 
                    de Hortolândia e sou desenvolvedor 
                    da interface do projeto.
                    </p>
                    <p>
                    Olá, eu sou a Nycole Savala, 
                    tenho 17 anos, estudo na Etec 
                    de Hortolândia e ajudei a desenvolver 
                    a parte gráfica do projeto.
                    </p>  
                    <p>
                    Olá, eu sou o Douglas Gabriel, 
                    tenho 18 anos, estudo na Etec 
                    de Hortolândia e sou o idealizador
                    e principal desenvolvedor do projeto.
                    </p>
                </div>
            <div className="fotos">
                <img src={foto1} alt="foto1" className="fota" />
                <img src={foto2} alt="foto2" className="fota" />
                <img src={foto3} alt="foto3" className="fota" />
                <img src={foto4} alt="foto4" className="fota" />
            </div>
        </div>
    </div>
)

export default Home
