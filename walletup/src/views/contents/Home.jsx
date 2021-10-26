import React from "react"
import "./Home.css"
import foto from "./assets/Box2.svg"
import foto1 from "./assets/image1.svg"
import foto2 from "./assets/image2.svg"

const Home = props => (
    <div className="ContainerHome">
        <div className="Container1">
            <div className="box1">
                <div className="HeadTitle">Bem Vindo a WalletUp</div>
                <div className="HeadText">Simule e gerencie seus investimentos em fundos imobiliarios, calcule o valor de seus divindendos</div> 
            </div>
            <div className="box2">
                <img src={foto} alt="foto" className="foto"/>
            </div>
        </div>
        <div className="Container2">
            <div className="box3">
                <p>
                A walletUp esta focada em te ajudar a ter acesso a investimentos em fundos imobiliarios, deixe conosco, apenas nos de os dados do seu 
                investimento alvo, e nos iremos calcular e simular a projeção do ativo com o tempo.
                O principal objetivo da WalletUp e tornar o mundo dos investimentos em fundo imobiliario acessivel a todos, e mostrar uma nova opção de renda passiva
                alem de tornar o processo de aprender a ter uma vida financeira mais estavel bem mais facil.
                </p>
                <p>
                Fundos Imobiliários (FII) são fundos de investimento destinados à aplicação em empreendimentos imobiliários, o que inclui, além da aquisição de 
                direitos reais sobre bens imóveis, o investimento em títulos relacionados ao mercado imobiliário.Fundos Imobiliários são um tipo de Fundo de 
                Investimento que aplicam em empreendimentos imobiliários, como shoppings, hospitais e prédios comerciais ou ativos relacionados, como CRIs. 
                Ao adquirir cotas de FIIs você se torna um dos “donos” desse imóvel, recebendo os aluguéis como lucro.
                </p>  
            </div>
            <div className="fotos">
                <img src={foto1} alt="foto1" className="home" />
                <img src={foto2} alt="foto2" className="home" />
            </div>
        </div>
    </div>
)

export default Home
