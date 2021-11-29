import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { useEffect, useState } from 'react';
import { Navigate,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Carrusel = (props) => {
  const {id,photo}=props
  const [perros, setPerros] = useState([]);
    function getPerros(id) {
        axios
            .get(`http://localhost:4000/mascotas/${id}`)
            .then((response) => {
                setPerros(response.data);
            })
            .catch((e) => { });
    }

    useEffect(() => {
        getPerros();
    }, []);

  const images = [1,2,3,4,5].map((number) => ({
    src: `https://placedog.net/${number}00/${number}00?id=${number}`
  }));
  

  return (
    <Carousel images={images} style={{ height: 300, width: 500 }} />
  );
};

export default Carrusel;