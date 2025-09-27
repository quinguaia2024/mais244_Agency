import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import img1 from "../assets/Images/1.jpg";
import img2 from "../assets/Images/2.jpg";
import img3 from "../assets/Images/3.jpg";
import img4 from "../assets/Images/4.jpg";
import img5 from "../assets/Images/5.jpg";
import img6 from "../assets/Images/6.jpg";
import img7 from "../assets/Images/7.jpg";
import img8 from "../assets/Images/8.jpg";
import img9 from "../assets/Images/9.jpg";
import img10 from "../assets/Images/10.jpg";

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

background-color: #D9D9D9;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 45%;
  background-color: #025E73;
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 10;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 50%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const Right = styled.div`
  /* width: 65%; */
  position: absolute;
  left: 45%;
  padding-left: 30%;
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  /* background-color: black; */
  margin-right: 2rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
  font-weight: 500;
    text-align: center;
    cursor: pointer;
    height: 4rem; /* Altura fixa */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    line-height: 1.2;
  }
    

  @media (max-width: 48em) {
    width: 15rem;
        h1 {
      height: 3rem;
      font-size: ${(props) => props.theme.fontmd};
    }

  }
`;
//data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
const Product = ({ img, title = "" }) => {
  return (
    // x: 100, y: -100
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img width="400" height="600" src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = Horizontalref.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
          // anticipatePin: 1,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          // markers: true,
        },
        x: -pinWrapWidth,

        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="shop">
      <Title data-scroll data-scroll-speed="-1">
        Serviços
      </Title>
      <Left>
        <p> Tu sonhas, nós realizamos. Conectamos visões ousadas a resultados reais, transformando ideias em marcas icônicas, eventos memoráveis e estratégias que conquistam o mercado angolano. <br /><br />Do planeamento estratégico ao branding, estudos de mercado, gestão de eventos e presença digital, cuidamos de cada detalhe. O nosso foco é simples: fazer a tua marca destacar-se, crescer com autenticidade e conquistar resultados sólidos no mercado. </p>
      </Left>
      <Right data-scroll ref={Horizontalref}>
        <Product img={img1} title="Consultoria de Marketing" />
        <Product img={img2} title="Gestão de Eventos" />
        <Product img={img3} title="Onboarding para o Mercado Angolano" />
        <Product img={img4} title="Outsourcing de Marketing" />
        <Product img={img5} title="Estratégia e Comunicação Corporativa" />
        <Product img={img6} title="Branding e Identidade Visual" />
        <Product img={img7} title="Estudos de Mercado e Concorrência" />
        <Product img={img8} title="Gestão de Redes Sociais e Website" />
        <Product img={img9} title="Produção de Vídeo Institucional" />
        <Product img={img10} title="Tradução, Interpretação e Representação de Marcas" />
      </Right>
    </Section>
  );
};

export default Shop;
