import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "Hace poco recibi mi producto y solo tengo cosas buenas que compartir 
          con ustedes, la atencion por parte de Amigurumis Land fue fantastica, se 
          adaptaron a cada una de mis recomendaciones y me entregaron un producto 
          que cumplio con cada una de mis expectativas"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Jhon Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Recientemente compré un amigurumi en línea y estoy completamente encantada con él.
           La calidad del trabajo es impresionante y el detalle es asombroso. El amigurumi es
           muy suave y cómodo de sostener, y me ha dado mucha alegría tenerlo como compañía.
           Además, el proceso de compra fue muy fácil y rápido. El vendedor fue muy amable y servicial, y 
           respondió a todas mis preguntas de manera rápida y eficiente. La entrega también fue muy rápida 
           y el amigurumi llegó en perfectas condiciones.
           En general, estoy muy contenta con mi compra y sin duda recomendaría este vendedor a cualquiera
           que esté buscando un amigurumi de alta calidad. ¡Gracias por hacer que mi día sea más brillante!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Mitchell Marsh</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Acabo de recibir mi amigurumi y estoy absolutamente encantada con él.
           Es tan adorable y está hecho con tanto cuidado y atención a los detalles. 
           Me encanta el diseño y la calidad del crochet es excelente.Además, el proceso de 
           compra fue muy fácil y el vendedor fue muy amable y rápido en responder a mis preguntas.
            La entrega también fue muy rápida y el amigurumi llegó en perfectas condiciones."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Steven Crock</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
