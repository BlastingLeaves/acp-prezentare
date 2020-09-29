import { Link } from "gatsby";
import React, { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './../../css/styles.css'
import logo_adcode from './../../assets/img/Artboard 2ldpi.png'



function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="sticky top-0 bg-secondary z-2">
      <div className="flex flex-wrap items-center justify-between p-2 mx-auto md:p-2">
        <Link to="/" className='md:pl-12 mx-auto'>
          <img src={logo_adcode} alt='logo' />
        </Link>

        <button className="flex items-center block px-3 py-2 border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}>
          <svg className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav className={`${ isExpanded ? `block` : `hidden`} md:block md:flex md:items-center w-full md:w-auto pr-10 mx-auto text-2xl`}>
          <AnchorLink className='px-3 py-2 block text-black font-bold ' href="#beneficii">Beneficii</AnchorLink>
          <AnchorLink className='px-3 py-2 block text-black font-bold' href="#utilizatori">Utilizatori</AnchorLink>
          <AnchorLink className='px-3 py-2 block text-black font-bold' href="#ecosistem">Ecosistem</AnchorLink>
          <AnchorLink className='px-3 py-2 block text-black font-bold' href="#contact">Contact</AnchorLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;