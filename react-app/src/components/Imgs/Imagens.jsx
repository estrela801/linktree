import './Imagens.css'
import React from "react";

export default (props) => {
  function addToogle(){
    const img = document.querySelector('.img')
    img.classList.toggle('imgCliked')
    console.log(img);
    
  }


    const img = props.img
  return (
    <div className="container-img"> 
      <img src={img} alt="" className="img" onClick={addToogle}/>
    </div>
  );
};