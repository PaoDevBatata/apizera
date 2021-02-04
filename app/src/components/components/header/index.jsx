import React from "react";

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
      <a href="#"><li>Home</li></a>
      <a href="#"><li>About</li></a>
      <a href="#"><li>Info</li></a>
      <a href="#"><li>Contact</li></a>
      <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
    </ul>
  </div>
</nav>
        <input type="text" className="buscar" placeholder="buscar" />
      </div>
    </Container>
  );
}

export default Header;
