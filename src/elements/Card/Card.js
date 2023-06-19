import { Link } from 'react-router-dom';
import './card.css';

function CardComponent({ info }) {
    return (
        <Link to={`/info/${info.id}`} className="card">
            <img src={info.cover} alt={info.title} className='card_img' />
            <h3 className='card_infos'>{info.title}</h3>
        </Link>
    );
}

export default CardComponent;
