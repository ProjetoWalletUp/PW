import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

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
                <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
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
            <hr className=" accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundcolor: "red" }} />
            <p>
            O projeto nasceu com o objetivo de ajudar a democratizar o mundo dos investimentos em fundos imobiliarios.
            tendo em vista que uma parte consideravel da população não investe por falta de conhecimento financeiro.
            O intuito do projeto e realizar os calculos e as projeções que envolvem a compra de uma FII, dessa maneira,
            tornando o processo mais pratico e rapido, mas principalmente, mais acessivel.
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" >
            <h6 className="text-uppercase font-weight-bold">
              <strong>Products</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!">MDBootstrap</a>
            </p>
            <p>
              <a href="#!">MDWordPress</a>
            </p>
            <p>
              <a href="#!">BrandFlow</a>
            </p>
            <p>
              <a href="#!">Bootstrap Angular</a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" >
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!">Your Account</a>
            </p>
            <p>
              <a href="#!">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!">Shipping Rates</a>
            </p>
            <p>
              <a href="#!">Help</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" >
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <i className="fa fa-home mr-3" /> New York, NY 10012, US
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@example.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="text-center py-3">
          &copy; {new Date().getFullYear()}
      </div>
    </MDBFooter>
  );
}

export default Footer;