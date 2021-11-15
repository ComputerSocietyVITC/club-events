import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav
      className='flex justify-between items-center h-16 text-black relative shadow-sm font-mono style '
      role='navigation'
    >
      <Link to='/' className='pl-8'>
        Home
      </Link>
      <div className = "push cursor-pointer">
      <AiOutlineMenu />
        </div>
       <AiOutlineSearch/>

      <div>
        <Link to='/Login' className='p-4'>
          Login
        </Link>
        <Link to='/Register' className='p-4'>
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
