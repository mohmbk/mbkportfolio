import React, { useState } from 'react';
import './Nav.css'

function Nav() {
  const [activeNav, setActiveNav] = useState('#home');
  const navItems = [
    { name: 'home', href: '#home' },
    { name: 'projects', href: '#projects' },
    { name: 'skills', href: '#skill' },
    { name: 'about', href: '#about' },
    { name: 'contact', href: '#contact' },
  ];

  return (
    <>
    
      <nav className='navbar'>
        <h1>MBK DEV</h1>
        <ul className='bar'>
            {navItems.map((item) => (
            <li key={item.name} className='text'>
              <a 
                href={item.href} 
                onClick={() => setActiveNav(item.href)}
                className={activeNav === item.href  ? 'active-link a1 ' : ' a2'}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Nav