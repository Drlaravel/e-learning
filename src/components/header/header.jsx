import { useState } from 'react';
import './Header.css';
import Logo from './../../assets/img/logo/logo.png';
import { IoSearch } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';

export default function Header() {
  return (
    <header className='navContainer'>
      <div className='navWrapper'>
        <div className='navSearch'>
          <div className='navLogo'>
            <img src={Logo} alt='navLogo' />
          </div>
          <div className='navSearchInput'>
            <div className='navSearchBtn'>
              <IoSearch size={20} />
            </div>
            <input
              type='text'
              name='navSearch'
              id='navSearch'
              placeholder='Want to Learn?'
            />

            <button className='dropDown'>
              <span>Explore</span>
              <FaChevronDown className='downIco' />
            </button>
          </div>
        </div>
        <div className='navLinks'>
          <li className='active'>Home</li>
          <li>About us</li>
          <li>Courses</li>
          <li>Contact us</li>
          <li>FAQ's</li>
        </div>
        <div className='navActions'>
          <button className='navSign'>Sign in</button>
          <button className='navCreateAccount'>Create free account</button>
        </div>
        <label className='hamburger'>
          <input type='checkbox'></input>
          <svg viewBox='0 0 32 32'>
            <path
              className='line line-top-bottom'
              d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'
            ></path>
            <path className='line' d='M7 16 27 16'></path>
          </svg>
        </label>
      </div>
    </header>
  );
}
