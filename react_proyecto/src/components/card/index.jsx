import './card.css';
import { useNavigate } from "react-router-dom";


function Card(props) {
    const { id, photo, name, status } = props;
    let navigate = useNavigate();
    return (
        <article className="grid_card">
            <h2 className='card_status'>{status}</h2>
            <img src={photo} alt={name} onClick={(() => { navigate(`/adopta/${id}`) })} />
            <h2>{name}</h2>
            <button onClick={(() => { navigate(`/adopta/${id}`) })}>Adoptar</button>
        </article>
    );
}

export default Card;