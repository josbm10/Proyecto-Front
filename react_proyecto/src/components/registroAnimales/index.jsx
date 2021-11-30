import './registro.css';
import { useState } from 'react';
import axios from 'axios';

function PageRegistroAnimales() {
    const [form, setForm] = useState({
        status: '',
        name: '',
        photo: '',
        born: '',
        tall: '',
        sex: '',
        activity: '',
        hair: '',
        history: '',
    });
    function saveMascota(mascota) {
        axios
            .post('http://localhost:4000/mascotas', mascota)
            .then((response) => {
                alert('la mascota se guardo correctamente');
            })
            .catch(() => {
                alert('Por favor intentalo nuevamente');
            });
    }

    function handleSubmit(e) {
        e.preventDefault();
        saveMascota(form);
    }

    return (
        <div className='registro_container'>
            <h2>Registro de mascotas</h2>
            <form action="" onSubmit={handleSubmit}>
                <select 
                onChange={(e) =>
                    setForm((state) => ({ ...state, status: e.target.value }))}>
                    <option selected hidden>Disponibilidad</option>
                    <option value={false}>Disponible</option>
                    <option value={true}>No disponible</option>
                </select>
                <input type="text" placeholder='Nombre del animal' 
                 onChange={(e) =>
                    setForm((state) => ({ ...state, name: e.target.value }))
                  }/>
                <input type="text" placeholder='URL Foto' 
                 onChange={(e) =>
                    setForm((state) => ({ ...state, photo: e.target.value }))
                  }/>
                <input type="text" placeholder='Nacimiento' 
                 onChange={(e) =>
                    setForm((state) => ({ ...state, born: e.target.value }))
                  }/>
                <select
                 onChange={(e) =>
                    setForm((state) => ({ ...state, tall: e.target.value }))
                  }>
                    <option selected hidden>Tamaño</option>
                    <option value='Pequeño'>Pequeño</option>
                    <option value='Mediano'>Mediano</option>
                    <option value='Grande'>Grande</option>
                </select>
                <select
                 onChange={(e) =>
                    setForm((state) => ({ ...state, sex: e.target.value }))
                  }>
                    <option selected hidden>Sexo</option>
                    <option value='Hembra'>Hembra</option>
                    <option value='Macho'>Macho</option>
                </select>
                <select
                 onChange={(e) =>
                    setForm((state) => ({ ...state, activity: e.target.value }))
                  }>
                    <option selected hidden>Nivel de actividad</option>
                    <option value='Bajo'>Bajo</option>
                    <option value='Mediano'>Mediano</option>
                    <option value='Alto'>Alto</option>
                </select>
                <select
                 onChange={(e) =>
                    setForm((state) => ({ ...state, hair: e.target.value }))
                  }>
                    <option selected hidden>Largo de pelo</option>
                    <option value='Largo'>Largo</option>
                    <option value='Corto'>Corto</option>
                </select>
                <textarea name="" id="" cols="30" rows="10" placeholder='Historia'
                 onChange={(e) =>
                    setForm((state) => ({ ...state, history: e.target.value }))
                  }></textarea>
                <button>Enviar</button>
            </form>
        </div>
    )
}
export default PageRegistroAnimales