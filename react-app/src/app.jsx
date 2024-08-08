import './app.css'
import React from "react";  
import Container from "./components/Container/Container";
import Links from "./components/Links/Links";
import Imagens from "./components/Imgs/Imagens";
import Img from './assets/eu.jpg'
import Insta from './assets/icons8-insta-30.png'
import In from './assets/icons8-linkedin-30.png'
import Git from './assets/icons8-github-30.png'


export default (props) => {
  return (
    <div className='container-geral'>
      <Container>
            <Imagens img={Img}></Imagens>
            <Links link='' insta={Insta} git={Git} in={In} ></Links>
      </Container>
    </div>
  );
};