import React from "react";

const NavBar = (props) => {
  return (
    // <nav className="nav-bar">
    //   <h1 className='brand-name'>MON SITEWEB</h1>
    //   <div className='nav-list'>
    //     <div className='nav-item'>Accueil</div>
    //     <div className='nav-item'>Clothing</div>
    //     <div className='nav-item'>Shoes</div>
    //     <div className='nav-item'>Make up</div>
    //     <div className='nav-item'>Accessoire</div>
    //   </div>
    // </nav>
    <nav class="navbar navbar-expand-lg navbar-light  nav-bar">
    <a class="navbar-brand" href="#">Mon SITEWEB</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav navbar-right">
        <a class="nav-link active" href="#">Accueil <span class="sr-only">(current)</span></a>
        <a class="nav-link" href="#">Clothing</a>
        <a class="nav-link" href="#">Shoes</a>
        <a class="nav-link" href="#">Make Up</a>
      </div>
    </div>
    </nav>
  );
};

export default NavBar;
