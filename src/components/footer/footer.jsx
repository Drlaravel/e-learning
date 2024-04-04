import { Row, Col } from 'react-bootstrap/';
import './footer.css';
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaBasketballBall,
} from 'react-icons/fa';
import Logo from '../../assets/img/logo/logo.png';

export default function footer() {
  return (
    <footer className='footer'>
      <div className='footerWrapper'>
        <Row className='contex'>
          <Col className='footerImage'>
            <img src={Logo} alt='Logo' />
            <p>
              Top learning experiences that create more talent in the world.
            </p>
          </Col>
          <Col className='footerLinks'>
            <div className='footerListGroup'>
              <span>Product</span>
              <li>Overview</li>
              <li>Features</li>
              <li>Solutions</li>
              <li>Tutorials</li>
              <li>Pricing</li>
            </div>
            <div className='footerListGroup'>
              <span>Company</span>
              <li>About us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>News</li>
            </div>
            <div className='footerListGroup'>
              <span>Social</span>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
              <li>Dribbble</li>
            </div>
            <div className='footerListGroup'>
              <span>Legal</span>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Contact</li>
            </div>
          </Col>
        </Row>
        <Row className='complex'>
          <Col className='footerCp'>© 2022 Ed-Circle. All rights reserved.</Col>
          <Col className='footerSocial'>
            <FaTwitter size={24} />
            <FaLinkedin size={24} />
            <FaFacebook size={24} />
            <FaGithub size={24} />
            <FaBasketballBall size={24} />
          </Col>
        </Row>
      </div>
    </footer>
  );
}
