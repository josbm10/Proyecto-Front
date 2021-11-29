import './card.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { axios } from 'axios';
import { Navigate, useNavigate } from "react-router-dom";


function Card(props) {
    const { id, photo, name, status } = props;
    let navigate = useNavigate();
    return (
        <article className="grid_card">
            <h2 className='card_status'>{status}</h2>
            <img src={photo} alt={name} onClick={(() => { navigate(`/adopta/${id}`) })} />
            <h2>{name}</h2>
            <button onClick={(() => { navigate("/formulario") })}>Adoptar</button>
        </article>
    );
}

export default Card;