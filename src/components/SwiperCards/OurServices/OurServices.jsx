import './OurServices.css';
import { IoIosArrowForward } from 'react-icons/io';

export default function OurServices(props) {
  return (
    <a
      href={props.link}
      className={`servicesCard ${props.id === 1 && 'primaryBg'}`}
    >
      <div className='cardTitle'>
        <img src={props.img} alt='ico' />
        <h1>{props.title}</h1>
      </div>
      <p>{props.subTitle}</p>
      <a href='#'>
        Learn More <IoIosArrowForward />
      </a>
    </a>
  );
}
