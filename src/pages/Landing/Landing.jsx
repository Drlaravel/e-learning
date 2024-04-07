import Pers from '../../assets/img/logo/pers.png';
import Bag from '../../assets/img/logo/bag.png';
import Blub from '../../assets/img/logo/blub.png';
import Duo from '../../assets/img/logo/duolingo.png';
import Code from '../../assets/img/logo/code.png';
import Test from '../../assets/img/logo/testing.png';
import Magic from '../../assets/img/logo/magic.png';
import Home from '../../assets/img/home.png';
import Interaction from '../../assets/img/logo/interaction.png';
import UserInterface from '../../assets/img/logo/userInterface.png';
import Ux from '../../assets/img/logo/ux.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import OurServices from '../../components/SwiperCards/OurServices/OurServices';
import { useState } from 'react';
import './Landing.css';

export default function Landing() {
  const ourServices = useState([
    {
      id: 1,
      link: '#',
      img: Interaction,
      title: 'Interaction Design',
      subTitle: 'Lessons on design that cover the most recent developments.',
    },
    {
      id: 2,
      link: '#',
      img: UserInterface,
      title: 'User Interface Design',
      subTitle:
        ' User Interface Design courses that cover the most recent trends',
    },
    {
      id: 3,
      link: '#',
      img: Ux,
      title: 'UX Design Course',
      subTitle:
        'Classes in development that cover the most recent advancements in web.',
    },
    {
      id: 4,
      link: '#',
      img: UserInterface,
      title: 'User Interface Design',
      subTitle:
        ' User Interface Design courses that cover the most recent trends',
    },
    {
      id: 5,
      link: '#',
      img: Ux,
      title: 'UX Design Course',
      subTitle:
        'Classes in development that cover the most recent advancements in web.',
    },
  ]);
  return (
    <>
      <div className='home'>
        <div className='homeWrapper'>
          <div className='homeContent'>
            <h1 className='homeTitle'>
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
            <img style={{ maxWidth: 153 }} src={Duo} alt='duo' />
          </div>
          <div>
            <img style={{ maxWidth: 186 }} src={Code} alt='' />
          </div>
          <div>
            <img style={{ maxWidth: 140 }} src={Test} alt='' />
          </div>
          <div>
            <img style={{ maxWidth: 234 }} src={Magic} alt='' />
          </div>
        </div>
      </div>
      <div className='services'>
        <h1 className='servicesTitle hG'>Our Services</h1>
        <p className='servicesSubTitle'>
          Fostering a playful & engaging learning environment
        </p>
        <Swiper
          modules={[Pagination]}
          spaceBetween={40}
          pagination={{ clickable: true }}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            840: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1190: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {ourServices[0].map((service) => {
            return (
              <SwiperSlide key={service.id}>
                <OurServices {...service}></OurServices>
              </SwiperSlide>
            );
          })}
          {console.log(ourServices)}
        </Swiper>
      </div>
    </>
  );
}
