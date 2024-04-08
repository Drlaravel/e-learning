import './Explore.css';
import { MdArrowOutward } from 'react-icons/md';
import Rating from '../../../assets/img/rating.png';

export default function Explore(props) {
  return (
    <div className='exploreCard'>
      <img src={props.img} alt='card image' />
      <div className='tag hG'>Design</div>
      <div className='exploreCardTitle'>
        <h1>{props.title}</h1>
        <MdArrowOutward style={{ fontSize: '1.4em' }} />
      </div>
      <p className='exploreCardSubtitle'>{props.subTitle}</p>
      <div className='rating'>
        <span className='hG'>{props.star}</span>
        <img src={Rating} alt='' />
        <span className='users'>{props.users}</span>
      </div>
      <div className='profile'>
        <div className='profileWrapper'>
          <img src={props.avatar} alt='' />
          <div className='info'>
            <h1>{props.name}</h1>
            <span>2001 Enrolled</span>
          </div>
        </div>
        <span className='price hG'>{props.price}</span>
      </div>
    </div>
  );
}
