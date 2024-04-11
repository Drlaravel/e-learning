import './Review.css';
import Logo from '../../../assets/img/logo/logo.png';

export default function Review(props) {
  return (
    <div className='reviewCardContainer'>
      <img className='reviewLogo' src={Logo}></img>
      <h1>{props.content}</h1>
      <img src={props.img} alt='profile' className='pfp' />
      <span>{props.name}</span>
      <span className='reviewInfo'>{props.info}</span>
    </div>
  );
}
