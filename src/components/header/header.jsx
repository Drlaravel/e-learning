import './Header.css';
import Logo from './../../assets/img/logo/logo.png';
import { IoSearch } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';

export default function header() {
  return (
    <header className='navContainer'>
      <div className='navWrapper'>
        <div className='navSearch'>
          <div className='navLogo'>
            <img src={Logo} alt='navLogo' />
          </div>
          <div className='navSearchInput'>
            <IoSearch size={20} />
            <input
              type='text'
              name='navSearch'
              id='navSearch'
              placeholder='Want to Learn?'
            />
            <div className='dropDown'>
              <span>Explore</span>
              <FaChevronDown className='downIco' />
            </div>
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
          <span className='navSign'>Sign in</span>
          <span className='navCreateAccount'>Create free account</span>
        </div>
      </div>
    </header>
  );
}
