import React, { PureComponent } from "react"
import "./Carteira.css"
import { MDBInput } from "mdbreact";

const Carteira = props => (

  <div className="ContainerCarteira1">
    <div className="ContainerCarteira">
        <div className="text2">
            Simule aqui seus dividendos
        </div>
        <div className="FormCarteira">
          <FII />
          <Preco />
        </div>
        <div className="GraficoCarteira">
            
        </div>

    </div>
  </div>
)


function FII () {
  return (
    <MDBInput classname="textos" label='Fundo Imobiliario' type='text'  />
  );
}
function Preco () {
  return (
    <MDBInput classname="textos" label='Preço' id='typeNumber' type='number' />
  );
}


export default Carteira