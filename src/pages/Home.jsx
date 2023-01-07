import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/Merida.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/Osito.png";
import foodCategoryImg02 from "../assets/images/Loki.png";
import foodCategoryImg03 from "../assets/images/Llavero.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/Why.jpg";

import networkImg from "../assets/images/network.jpg";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Servicio de personalizacion",
    imgUrl: featureImg01,
    desc: "Todos los diseños que encuentres en esta pagina son 100% personalizables, asi mismo no dudes en enviarnos tus ideas, las haermos realidad!",
  },

  {
    title: "Cortos tiempos de espera",
    imgUrl: featureImg02,
    desc: "Como sabras cada pieza es unica y elaborada a mano por lo que los tiempos varian dependiendo del tamaño y complejidad aun asi estamos dispuestos a entregar tus productos en el menor tiempo posible",
  },
  {
    title: "Envios a nivel nacional",
    imgUrl: featureImg03,
    desc: "Estamos ampliando nuestros horizontes, ahora tenemos envios a nivel nacional, que la distancia no te detenga a comprar magia artesanal",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "ANIMALES") {
      const filteredProducts = products.filter(
        (item) => item.category === "Animales"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "FUNKOS") {
      const filteredProducts = products.filter(
        (item) => item.category === "Funkos"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "LLAVERO") {
      const filteredProducts = products.filter(
        (item) => item.category === "Llavero"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Inicio">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">¡El regalo perfecto para cualquier ocasión!</h5>
                <h1 className="mb-4 hero__title">
                  <span>Los amigurumis</span> son como magia hecha crochet <br /> cobran vida a traves
                  <span> de mis manos</span>
                </h1>

                <p>
                Un amigurumi es una pequeña obra de arte que puedes sostener en tu mano.
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                  ¡Compra ahora! <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">Ver más</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    Entregas rápidas
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% Hecho a mano
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-image-amigurumi" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">¿Que hacemos?</h5>
              <h2 className="feature__title">Tejemos con el corazón</h2>
              <h2 className="feature__title">
                transformamos tus <span>ideas en magia</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
              Los amigurumis son muñecos tejidos a mano. Crear uno implica elegir la técnica y <br />
               el hilo adecuados, seguir un patrón y prestar atención al detalle. Es una actividad relajante <br />
                y gratificante, pero también puede requerir mucha paciencia y atención al detalle.
              </p>
              
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Productos</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  Todos
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "ANIMALES" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ANIMALES")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Animales
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Funkos
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  LLaveros
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100"  />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                ¿Por qué <span>Amigurumis Land?</span>
                </h2>
                <p className="tasty__treat-desc">
                Los amigurumis son una forma perfecta de demostrar tu amor y cariño por alguien.
                 Un amigurumi hecho a mano es un regalo especial y significativo que siempre será apreciado!  <br />
                 Además de las razones que ya te hemos mencionado también debes tener en cuenta que al comprar en Amigurumis Land
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Apoyas a los pequeños emprendedores
                    </p>
                    <p className="choose__us-desc">
                    "Los pequeños negocios son la columna vertebral de nuestra economía. Apóyalos y ellos te apoyarán a ti."
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Inviertes en algo diferente{" "}
                    </p>
                    <p className="choose__us-desc">
                      No muchas personas conocen sobre el hermoso mundo de los Amigurumis, estas regalando algo especial.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Pronto ofreceremos cursos{" "}
                    </p>
                    <p className="choose__us-desc">
                    Nuestros servicios se ampliarán, espera muchas cosas de nosotros este 2023, síguenos en redes sociales y no te pierdas de nada.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> La variedad aumentará{" "}
                    </p>
                    <p className="choose__us-desc">
                    ¡De la mano con las ideas de nuestros clientes estamos redirigiendo nuestro trabajo a la creación de nuevos amigurumis, no te lo puedes perder!
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonios</h5>
                <h2 className="testimonial__title mb-4">
                ¿Qué dicen nuestros <span>clientes?</span>
                </h2>
                <p className="testimonial__desc">
                  Estas son algunas reseñas que hemos recibido por parte de las personas que han decidido confiar en nuestro trabajo!
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
