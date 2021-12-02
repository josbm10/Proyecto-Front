import './modificar.css'
import { useRef, useState } from 'react';
import axios from 'axios';

function PageModificarAnimales() {
    const [perros, setPerros] = useState([]);
    function putMascota(id_put, mascota) {
        axios
            .put(`http://localhost:4000/mascotas/${id_put}`, mascota)
            .then((response) => {
                alert('la mascota se modifico correctamente');
            })
            .catch(() => {
                alert('Por favor intentalo nuevamente');
            });
    }
    function getMascota(id_get) {
        axios
            .get(`http://localhost:4000/mascotas/${id_get}`)
            .then((response) => {
                setPerros(response.data);
            })
            .catch(() => {
                alert('Por favor intentalo nuevamente');
            });
    }
    const get_id = useRef(null);
    const put_id = useRef(null);
    const put_status = useRef(null);
    const put_name = useRef(null);
    const put_photo = useRef(null);
    const put_age = useRef(null);
    const put_tall = useRef(null);
    const put_sex = useRef(null);
    const put_activity = useRef(null);
    const put_hair = useRef(null);
    const put_history = useRef(null);

    function putData() {
        const id_put = put_id.current.value;
        const mascota = {
            status: put_status.current.value,
            name: put_name.current.value,
            photo: put_photo.current.value,
            age: put_age.current.value,
            tall: put_tall.current.value,
            sex: put_sex.current.value,
            activity: put_activity.current.value,
            hair: put_hair.current.value,
            history: put_history.current.value
        }
        putMascota(id_put, mascota);
    }
    function getData() {
        const id_get = get_id.current.value;
        getMascota(id_get)
    }

    return (
        <div className='modificar_container'>
            <input type="number" placeholder='Buscar mascota por id' ref={get_id} />
            <button onClick={getData}>Buscar</button>
            <h2>Modificar datos de mascotas</h2>

            <form action="" >
                <input type="number" readOnly placeholder='ID' ref={put_id} defaultValue={perros.id} />
                <select ref={put_status} defaultValue={perros.status} >
                    <option hidden>Disponibilidad</option>
                    <option value={false}>Disponible</option>
                    <option value={true}>No disponible</option>
                </select>
                <input type="text" placeholder='Nombre del animal' ref={put_name} defaultValue={perros.name} />
                <input type="text" placeholder='URL Foto' ref={put_photo} defaultValue={perros.photo} />
                <input type="text" placeholder='Edad' ref={put_age} defaultValue={perros.age} />
                <select ref={put_tall} defaultValue={perros.tall}>
                    <option selected hidden>Tamaño</option>
                    <option value='Pequeño'>Pequeño</option>
                    <option value='Mediano'>Mediano</option>
                    <option value='Grande'>Grande</option>
                </select>
                <select ref={put_sex} defaultValue={perros.sex}>
                    <option selected hidden>Sexo</option>
                    <option value='Hembra'>Hembra</option>
                    <option value='Macho'>Macho</option>
                </select>
                <select ref={put_activity} defaultValue={perros.activity}>
                    <option selected hidden>Nivel de actividad</option>
                    <option value='Bajo'>Bajo</option>
                    <option value='Mediano'>Mediano</option>
                    <option value='Alto'>Alto</option>
                </select>
                <select ref={put_hair} defaultValue={perros.hair}>
                    <option selected hidden>Largo de pelo</option>
                    <option value='Largo'>Largo</option>
                    <option value='Corto'>Corto</option>
                </select>
                <textarea name="" id="" cols="30" rows="10" placeholder='Historia' ref={put_history}
                    defaultValue={perros.history}></textarea>
                <button onClick={putData}>Enviar</button>
            </form>
        </div>
    )
}

export default PageModificarAnimales