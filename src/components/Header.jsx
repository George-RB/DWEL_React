import React from 'react';
// import './Header.css';

function Header() {
  return (
    <header className="header" class="bg-slate-300 max-w-6xl ">
      <div className="container" class="flex justify-center">
        {/* <img src="./img/logo/logo_1.jpg" alt="DWEL logo" className="logo" /> */}
        <nav className="menu">
          <a href="#!">Main</a>
          <a href="#!">About us</a>
          <a href="#!">Contacts</a>
          <button className="btn-register">Registration</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
