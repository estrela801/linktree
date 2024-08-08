import React from "react";
import './Link.css'
import './MobileAnimations.css'

export default (props) => {
const In = props.in
const insta = props.insta
const git = props.git

function teste(){
  const testeAnimation = document.querySelector('.teste').style.display='none'
  const links = document.querySelectorAll('Link')
  links.forEach(link =>{
    link.classList.add('isboucing')
  
  })
  if(!testeAnimation){
   
  }
}
document.addEventListener('DOMContentLoaded', teste)


  return (
    <div className='container-links'>
      <a href="https://www.instagram.com/estrela_dev801/" target="_blank" className="Link">Instagram <img className="icon" src={insta} alt="" /> </a>
      <a href="https://github.com/estrela801" target="_blank" className="Link">Git Hub<img className="icon" src={git} alt="" /></a>
      <a href="https://www.linkedin.com/in/rodrigohestrela/" target="_blank" className="Link">LinkedIn <img className="icon" src={In} alt="" /></a>
      <span className="teste"></span>
    </div>
  );
};