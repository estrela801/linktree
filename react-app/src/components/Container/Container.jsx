import React from "react";
import './Container.css'
export default (props) => {
  return (
    <div className='container'>
      {props.children}
    </div>
  );
};