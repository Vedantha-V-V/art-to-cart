import React from 'react';
import { Link } from 'react-router-dom';
import {logo} from './assets'

function Header() {
  return (
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">Hi
      <img src={logo} alt="logo" className="w-28 object-contain"/>
      </Link>
      <Link to="/categories" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
      Create
      </Link>
      {/*<Link to="/about">About</Link>
      <Link to="/contact" className="w-full">Contact</Link>*/}
    </header>
  );
}

export default Header;
