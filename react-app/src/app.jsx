import React from "react";
import Container from "./components/Container/Container";
import Links from "./components/Links/Links";
import Imagens from "./components/Imgs/Imagens";
import Img from './assets/eu.jpg'

export default (props) => {
  return (
    <div>
      <Container>
            <Imagens img={Img}></Imagens>
            <Links link=''></Links>
      </Container>
    </div>
  );
};