import './Tutors.css';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Tutors(props) {
  return (
    <div className='tutorsCardContainer'>
      <img className='tutorsImg' src={props.img} alt='' />
      <h1>{props.name}</h1>
      <span>{props.skill}</span>
      <p>{props.content}</p>
      <div className='links'>
        <FaTwitter />
        <FaLinkedin />
      </div>
    </div>
  );
}
