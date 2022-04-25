import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = ()=>{
  const links = [
    {
      text: 'Home',
      path: '/',
      id: 0,
    },
    {
      text: 'Greeting',
      path: '/greeting',
      id: 1,
    }
  ];
  return (
    <header className="flex justify-between my-4 mx-12">
      <h1 className="text-2xl">Greetings</h1>

      <nav>
        <ul className="flex gap-4">
          {
          links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} className="nav-item">{link.text}</NavLink>
            </li>
          ))
        }
        </ul>
      </nav>
    </header>
  )
}

export default Header