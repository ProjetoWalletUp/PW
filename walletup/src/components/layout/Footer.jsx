import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css'
const Footer = () => {
  return (
    <MDBFooter style={{ backgroundColor: "#379944" }} className="page-footer font-small pt-0">
      <div style={{ backgroundColor: "#45BF55" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 white-text">
                Visite nossas redes sociais!
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <a className="fb-ic ml-0">
                <i className="fab fa-facebook-f white-text mr-lg-4"></i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter white-text mr-lg-4"> </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram white-text mr-lg-4"> </i>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" >
            <h6 className="text-uppercase font-weight-bold">
              <strong>Wallet Up</strong>
            </h6>
            <hr className="black accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundcolor: "red" }} />
            <p className="ftext">
            O projeto nasceu com o objetivo de ajudar a democratizar o mundo dos investimentos em fundos imobiliarios.
            tendo em vista que uma parte consideravel da população não investe por falta de conhecimento financeiro.
            O intuito do projeto e realizar os calculos e as projeções que envolvem a compra de uma FII, dessa maneira,
            tornando o processo mais pratico e rapido, mas principalmente, mais acessivel.
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" >
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contato</strong>
            </h6>
            <hr className="black accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p className="ftext">
              <i className="fa fa-envelope mr-3" /> suporte@walletup.com
            </p>
            <p className="ftext">
              <i className="fa fa-phone mr-3" /> +55 12345-6789
            </p>
            <p className="ftext">
              <i className="fa fa-print mr-3" /> +55 12345-6789
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="text-center py-3">
         &copy; Wallet Up - Todos os direitos reservados 
      </div>
    </MDBFooter>
  );
}

export default Footer;