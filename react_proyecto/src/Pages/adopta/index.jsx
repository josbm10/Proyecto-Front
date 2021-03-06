import './adopta.css';
import Card from '../../components/card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useNavigate } from 'react-router-dom';

function PageAdopta() {

    let navigate = useNavigate();
    // const [perros, setPerros] = useState([]);
    // function getPerros() {
    //     axios
    //         .get('http://localhost:4000/mascotas')
    //         .then((response) => {
    //             setPerros(response.data);
    //         })
    //         .catch((e) => { });
    // }
    // useEffect(() => {
    //     getPerros();
    // }, []);
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);
    const handleSearch = (event) => {
      let value = event.target.value.toUpperCase();
      let result = [];
      console.log(value);
      result = allData.filter((data) => {
        return data.name.search(value) != -1;
      });
      setFilteredData(result);
    }
  
    useEffect(() => {
      axios('http://localhost:4000/mascotas')
        .then(response => {
          console.log(response.data)
          setAllData(response.data);
          setFilteredData(response.data);
        })
        .catch(error => {
          console.log('Error getting fake data: ' + error);
        })
    }, []);

    return (

        <div class="mascotas_container">
            <Breadcrumb className='Breadcrumb'>
                <Breadcrumb.Item onClick={() => navigate('/')}>Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Adopta</Breadcrumb.Item>
            </Breadcrumb>
            <div class="mascotas_filters">
                <div style={{ margin: '0 auto', marginTop: '10%' }}>
                    <label>Buscar:</label>
                    <input type="text" placeholder='Buscar' onChange={(event) => handleSearch(event)} />
                </div>
                <h2>Filtrar por:</h2>
                <form action="" >
                    <h2>Edad</h2>
                    <ul>
                        <li> <input type="checkbox" id="age_1to3" />
                            <label for="age_1to3">1-3 a??os</label>
                        </li>
                        <li> <input type="checkbox" id="age_4to7" />
                            <label for="age_4to7">4-7 a??os</label>
                        </li>
                        <li> <input type="checkbox" id="age_7plus" />
                            <label for="age_7plus">+7 a??os</label>
                        </li>
                    </ul>

                    <h2>Tama??o</h2>
                    <ul>
                        <li> <input type="checkbox" id="tall_small" />
                            <label for="tall_small">Peque??o</label>
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
                    <button>Aplicar</button>
                </form>
            </div>
            <div class="mascotas_grid">
                {/* {perros.map((perro) => (
                    <Card
                        key={perro.id}
                        id={perro.id}
                        photo={perro.photo}
                        name={perro.name}
                        status={perro.status}
                    />
                ))} */}

                {filteredData.map((value) => {
                    return (
                        <Card 
                        key={value.id}
                        id={value.id}
                        photo={value.photo}
                        name={value.name}
                        status={value.status}
                         />
                    )
                })}

            </div>
        </div>
    );
}

export default PageAdopta;