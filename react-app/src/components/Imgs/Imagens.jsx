import './Imagens.css'
import React from "react";

export default (props) => {
    const img = props.img
  return (
    <div className="container-img"> 
      <img src={img} alt="" className="img"/>
    </div>
  );
};