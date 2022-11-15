import React from 'react';
import Logo from '../assets/iconoparapagdehenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className="logoHenry">
      <img className='logo' src={Logo} alt="not found"></img>
      <p className='text'>Weather</p><p className='text1'>.world</p>
      <div className="separadorBarra">
        {<SearchBar onSearch={onSearch}/>}
      </div>
    </div>
  );
};

export default Nav;
