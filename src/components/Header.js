import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='heading'>
        <Link to='/home' href='#' className='link'>
          Home
        </Link>
      </div>
      <div className='heading'>
        <Link to='/students' href='#' className='link'>
          Students
        </Link>
      </div>
      <div className='heading'>
        <Link to='/contact' href='#' className='link'>
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Header;
