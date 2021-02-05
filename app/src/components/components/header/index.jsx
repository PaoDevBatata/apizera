import React from "react";
import {Link} from 'wouter'
import Container from './styled';

function Header() {
  return (
    <Container >
      <div className="group_A">
      <nav role="navigation">
  <div id="menuToggle">
    
    <input type="checkbox" />
    
   
    
    <span></span>
    <span></span>
    <span></span>
    
    
    <ul id="menu">
      <a className="poi"><Link  to="/home"><li>Home</li></Link></a>
    </ul>
  </div>
</nav>
        <input type="text" className="buscar" placeholder="buscar" />
      </div>
    </Container>
  );
}

export default Header;
