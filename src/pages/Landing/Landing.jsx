import './Landing.css';
// import HomeImg from '../../assets/img/image.png';
import Pers from '../../assets/img/logo/pers.png';
import Bag from '../../assets/img/logo/bag.png';
import Blub from '../../assets/img/logo/blub.png';
import Duo from '../../assets/img/logo/duolingo.png';
import Code from '../../assets/img/logo/code.png';
import Test from '../../assets/img/logo/testing.png';
import Magic from '../../assets/img/logo/magic.png';
import Home from '../../assets/img/home.png';

export default function Landing() {
  return (
    <div className='home'>
      <div className='homeWrapper'>
        <div className='homeContent'>
          <h1 className='homeTitle'>
            {/* Up Your <span className='hG'> Skills </span> To
            <span className='hG'> Advance</span> Your
            <span className='hG'> career</span> path */}
            <p>
              Up Your <span className='hG'>Skills</span>
            </p>
            <p>
              To <span className='hG'>Advance</span> Your
            </p>
            <p>
              <span className='hG'>Career</span> Path
            </p>
          </h1>
          <p className='homeSubTitle'>
            Learn UI-UX Design skills with weekend UX . The latest online
            learning system and material that help your knowledge growing.
          </p>
          <div className='homeBtnContainer'>
            <button className='navCreateAccount'>Get Started</button>
            <button className='dropDown'>Get free trial</button>
          </div>
          <div className='homeIdea'>
            <div>
              <img src={Pers} alt='pers' />
              <p>Public Speaking</p>
            </div>
            <div>
              <img src={Bag} alt='bag' />
              <p>Career-Oriented</p>
            </div>
            <div>
              <img src={Blub} alt='blub' />
              <p>Creative Thinking</p>
            </div>
          </div>
        </div>
        <div className='homeImg'>
          <img src={Home} alt='Girl image' />
        </div>
      </div>
      <div className='logo'>
        <div>
          <span className='hG'>250+</span>
          <p>Collaboration</p>
        </div>
        <div>
          <img style={{ height: 36, width: 153 }} src={Duo} alt='duo' />
        </div>
        <div>
          <img style={{ height: 36, width: 186 }} src={Code} alt='' />
        </div>
        <div>
          <img style={{ height: 36, width: 140 }} src={Test} alt='' />
        </div>
        <div>
          <img style={{ height: 36, width: 234 }} src={Magic} alt='' />
        </div>
      </div>
    </div>
  );
}
