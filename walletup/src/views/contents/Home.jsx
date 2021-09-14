import React from "react"
import "./Home.css"
import foto from "./assets/Box2.svg"

const Home = props => (
    <div className="Container">
        <div className="Container1">
        <div className="box1">
            <h1>Bem Vindo a WalletUp</h1>
            <h2>Simule e gerencie seus investimentos em fundos imobiliarios, descubra seus divindendos</h2> 
        </div>
        <div className="box2">
            <img src={foto} alt="foto" height="100%" />
        </div>
        </div>
        <div className="box3">
            A walletUp esta focada em te ajudar a ter acesso a investimentos em fundos imobiliarios, deixe conosco, apenas nos de os dados do seu 
            investimento alvo, e nos iremos calcular e simular a projeção do ativo com o tempo.
            O principal objetivo da WalletUp e tornar o mundo dos investimentos em fundo imobiliario acessivel a todos, e mostrar uma nova opção de renda passiva
            alem de tornar o processo de aprender a ter uma vida financeira mais estavel bem mais facil.
        </div>
    </div>
)

export default Home
