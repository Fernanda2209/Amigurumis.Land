import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap"; // We import specific styles from the reacstrap library to save code.
import logo from "../../assets/images/Logo.png"; // Logo Image Amigurumis Land 

import "../../styles/footer.css"; // Import Style of footer

import { Link } from "react-router-dom"; // We use the Link element to manipulate the routes within the application 

const Footer = () => {
  return ( // We make use of the different elements and styles previously exported, and divide the fotter in different sections, in this case it is organized by columns
    <footer className="footer">
      <Container> 
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Amigurumis Land</h5>
              <p>
              Un emprendimiento que nace en la ciudad de la luna
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Horario de atencion</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Lunes - Domingo</span>
                <p>9:00am - 7:00pm</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contacto</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Estamos ubicados en el municipio de Chia, Cundinamarca</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Telefono: 3025161911</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Gmail: amigurumis.land@gamil.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Más Información</h5>
            <p>Subscríbete a nuestras redes sociales</p>
            <div className="newsletter">
              <input type="email" placeholder="Ingresa tu correo" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2023. All Rights
              Reserved. made by Maria Daza
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Siguenos: </p>
              <span>
                {" "}
                <Link to="">
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
                <Link to="">
                  <i class="ri-github-line"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to="">
                  <i class="ri-youtube-line"></i>
                </Link>{" "}
              </span>

              <span>
                {" "}
                <Link to="">
                  <i class="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

// //  Create a container in general and inside it the footer components, making use of different elements

export default Footer;
