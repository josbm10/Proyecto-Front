import './card.css';
import { useNavigate } from "react-router-dom";


function Card(props) {
    const { id, photo, name, status } = props;
    let navigate = useNavigate();
     let classname='card_status';
     if(JSON.parse(status)){
         classname += ' visibility'
     }
    return (
        <article className="grid_card">
            <div className={classname}>Adoptado</div>
            <img src={photo} alt={name} />
            <h2>{name}</h2>
            <button disabled={JSON.parse(status)} onClick={(() => { navigate(`/adopta/${id}`) })}>Adoptar</button>
        </article>
    );
}
export default Card;