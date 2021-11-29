import './mascota.css';
import Card from '../card';
import { useEffect, useState } from 'react';
import { Navigate,useNavigate } from 'react-router-dom';
import axios from 'axios';

function PageAdopta(props) {
    let navigate=useNavigate();
    const [perros, setPerros] = useState([]);
    function getPerros() {
        axios
            .get('http://localhost:4000/mascotas')
            .then((response) => {
                setPerros(response.data);
            })
            .catch((e) => { });
    }

    useEffect(() => {
        getPerros();
    }, []);
    
    return (
        <div class="mascotas_container">

            <div class="mascotas_filters">
                <h2>Filtrar por:</h2>
                <h2>Edad</h2>
                <ul>
                    <li> <input type="checkbox" id="age_1to3" />
                        <label for="age_1to3">1-3 años</label>
                    </li>
                    <li> <input type="checkbox" id="age_4to7" />
                        <label for="age_4to7">4-7 años</label>
                    </li>
                    <li> <input type="checkbox" id="age_7plus" />
                        <label for="age_7plus">+7 años</label>
                    </li>
                </ul>

                <h2>Tamaño</h2>
                <ul>
                    <li> <input type="checkbox" id="tall_small" />
                        <label for="tall_small">Pequeño</label>
                    </li>
                    <li><input type="checkbox" id="tall_medium" />
                        <label for="tall_medium">Mediano</label>
                    </li>
                    <li> <input type="checkbox" id="tall_large" />
                        <label for="">Grande</label>
                    </li>
                </ul>

                <h2>Sexo</h2>
                <ul>
                    <li> <input type="checkbox" id="sex_female" />
                        <label for="sex_female">Hembra</label>
                    </li>
                    <li> <input type="checkbox" id="sex_masculine" />
                        <label for="sex_masculine">Macho</label>
                    </li>
                </ul>


                <h2>Nivel de actividad</h2>
                <ul>
                    <li><input type="checkbox" id="activity_low" />
                        <label for="activity_low">Bajo</label>
                    </li>
                    <li> <input type="checkbox" id="activity_medium" />
                        <label for="activity_medium">Mediano</label>
                    </li>
                    <li>
                        <input type="checkbox" id="activity_high" />
                        <label for="activity_high">Alto</label>
                    </li>
                </ul>

                <h2>Largo de pelo</h2>
                <ul>
                    <li> <input type="checkbox" id="hair_long" />
                        <label for="hair_long">Largo</label>
                    </li>
                    <li> <input type="checkbox" id="hair_cut" />
                        <label for="hair_cut">Corto</label>
                    </li>
                </ul>
            </div>
            <div class="mascotas_grid">
                {perros.map((perro) => (
                    <Card
                        key={perro.id}
                        id={perro.id}
                        photo={perro.photo}
                        name={perro.name}
                        status={perro.status}
                    />
                ))}

            </div>
        </div>
    );
}

export default PageAdopta;