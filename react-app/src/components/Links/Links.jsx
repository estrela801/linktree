import React from "react";
import './Link.css'

export default (props) => {
const In = props.in
const insta = props.insta
const git = props.git

  return (
    <div className='container-links'>
      <a href="https://www.instagram.com/estrela_dev801/" target="_blank" className="Link">Instagram <img className="icon" src={insta} alt="" /> </a>
      <a href="https://github.com/estrela801" target="_blank" className="Link">Git Hub<img className="icon" src={git} alt="" /></a>
      <a href="https://www.linkedin.com/in/rodrigohestrela/" target="_blank" className="Link">LinkedIn <img className="icon" src={In} alt="" /></a>
    </div>
  );
};