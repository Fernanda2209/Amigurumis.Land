// all images imported from images directory
import product_01_image_01 from "../images/product_01-Patico.png";
import product_02_Osito from "../images/Osito-product.jpeg";
import product_03_Baphomet from "../images/Baphomet-product.jpeg";
import product_04_Merida from "../images/Merida-product.jpeg"
import product_05_Loki from "../images/Loki-product.jpeg"
import product_05_Triceratops from "../images/Triceratops-product.jpeg"
import product_06_OsoPanda from "../images/OsoPanda-product.jpeg"
import product_07_Elefante from "../images/Elefante-product.jpeg"
import product_08_Medusa from "../images/Medusa-product.jpeg"
import product_10_Minion from "../images/Minion-product.jpeg"
import product_11_Raton from "../images/Raton-product.jpeg"
import product_12_Gatito from "../images/Gatito-product.jpeg"

const products = [
  {
    id: "01",
    title: "Patico con sombrero",
    price: 16.0,
    image01: product_01_image_01,
    category: "Animales",

    desc: "Este producto corresponde a un patico de aproximadamente 7 cm de altura, hecho a mano con mucho amor, con hilo tanto de algodón como acrílico hipoalergénico, el producto puede ser personalizado dependiendo de los gustos del cliente.",
  },

  {
    id: "02",
    title: "Osito",
    price: 115.0,
    image01: product_02_Osito,
    category: "Llavero",

    desc: "Este producto corresponde a un osito tipo llavero de aproximadamente 5 cm de altura, hecho a mano con mucho amor, con hilo extra fino de acrílico hipoalergénico, el producto puede ser personalizado dependiendo de los gustos del cliente.",
  },

  {
    id: "03",
    title: "Cabrita Baphomet",
    price: 110.0,
    image01: product_03_Baphomet,
    category: "Animales",

    desc: "Este producto corresponde a una cabrita mas conocida por su representacion como baphomet, es un amigurumi de tipo peluche de aproximadamente 20 cm de altura, hecho a mano con mucho amor, con hilo de acrílico hipoalergénico, el producto puede ser personalizado dependiendo de los gustos del cliente.",
  },

  {
    id: "04",
    title: "Merida",
    price: 110.0,
    image01: product_04_Merida,
    category: "Funkos",

    desc: "Este producto corresponde a la princesa Merida tipo Funko Pop, el amigurumi mide aproximadamente 16 cm de altura, hecho a mano con mucho amor, con hilo extra fino de acrílico hipoalergénico, el producto puede ser personalizado dependiendo de los gustos del cliente.",
  },

  {
    id: "05",
    title: "Loki",
    price: 24.0,
    image01: product_05_Loki,
    category: "Funkos",

    desc: "Este producto corresponde al ya famoso personaje de Loki en su version Funko Pop dentro de su exitosa serie, el amigurumi mide aproximadamente 16 cm de altura, hecho a mano con mucho amor, con hilo extra fino de acrílico hipoalergénico, el producto puede ser personalizado dependiendo de los gustos del cliente.",
  },
  {
    id: "06",
    title: "Triceratops",
    price: 24.0,
    image01:product_05_Triceratops,
    
    category: "Animales",

    desc: "Este producto corresponde al temible triceratops en su version mas adorable, el amigurumi mide aproximadamente 16 cm de altura, hecho a mano con mucho amor, con hilo extra fino de acrílico hipoalergénico, el producto puede ser personalizado dependiendo de los gustos del cliente.",
  },

  {
    id: "07",
    title: "Oso Panda",
    price: 115.0,
    image01:product_06_OsoPanda,
    
    category: "Animales",

    desc: "Este producto corresponde al adorable oso Panda en su version hombre con bufanda, el amigurumi mide aproximadamente 16 cm de altura, hecho a mano con mucho amor, con hilo extra fino de acrílico hipoalergénico, el producto puede ser personalizado dependiendo de los gustos del cliente.",
  },

  {
    id: "08",
    title: "Elefante",
    price: 110.0,
    image01: product_07_Elefante,
    category: "Animales",

    desc: "Este producto corresponde al elefante con corbatin mas adorable que veras, el amigurumi mide aproximadamente 14 cm de altura, hecho a mano con mucho amor, con hilo extra fino de acrílico hipoalergénico, el producto puede ser personalizado dependiendo de los gustos del cliente.",
  },

  {
    id: "09",
    title: "Medusa",
    price: 110.0,
    image01: product_08_Medusa,
    category: "Animales",

    desc: "Este producto corresponde a una medusa muy tierna, el amigurumi mide aproximadamente 16 cm de altura, hecho a mano con mucho amor, con hilo extra fino de acrílico hipoalergénico, el producto puede ser personalizado dependiendo de los gustos del cliente.",
  },

  {
    id: "10",
    title: "Minion",
    price: 24.0,
    image01: product_10_Minion,
    category: "Llavero",

    desc: "Este producto corresponde al poderoso e inigualable Bob en su version como villano y secuaz de Gru, el amigurumi mide aproximadamente 6cm cm de altura, hecho a mano con mucho amor, con hilo extra fino de acrílico hipoalergénico, el producto puede ser personalizado dependiendo de los gustos del cliente.",
  },

  {
    id: "11",
    title: "Raton ",
    image01: product_11_Raton,
    price: 35.0,
    
    category: "Llavero",

    desc: "Este pequeño raton mide muy poco y es perfecto para usar como llavero, es la compañia perfecta y su perfecto tamaño y acabados te convenceran de esto , asi que no olvides que es hecho a mano con mucho amor, con hilo extra fino de acrílico hipoalergénico, el producto puede ser personalizado dependiendo de los gustos del cliente.",
  },

  {
    id: "12",
    title: "Gatito con bufanda ",
    price: 35.0,
    image01:product_12_Gatito,
    category: "Animales",

    desc: "Este gatito con bufanda mide aproximadamente 7 cm y es demasiado tierno para resistirse, asi que no olvides que es hecho a mano con mucho amor, con hilo extra fino de acrílico hipoalergénico, el producto puede ser personalizado dependiendo de los gustos del cliente.",
  },

];

export default products;
