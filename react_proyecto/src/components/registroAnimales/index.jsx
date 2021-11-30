import './registro.css';
function PageRegistroAnimales(){
    return(
        <div className='registro_container'>
            <form action="">
                <input type="text" placeholder='Nombre del animal' />
                <input type="text" placeholder='URL Foto' />
                <select>
                    <option selected hidden>Edad</option>
                    <option>1-3 años</option>
                    <option>4-7 años</option>
                    <option>7+ años</option>
                </select>
                <select>
                    <option selected hidden>Tamaño</option>
                    <option>Pequeño</option>
                    <option>Mediano</option>
                    <option>Grande</option>
                </select>
                <select>
                    <option selected hidden>Sexo</option>
                    <option>Hembra</option>
                    <option>Macho</option>
                </select>
                <select>
                    <option selected hidden>Nivel de actividad</option>
                    <option>Bajo</option>
                    <option>Mediano</option>
                    <option>Alto</option>
                </select>
                <select>
                    <option selected hidden>Largo de pelo</option>
                    <option>Largo</option>
                    <option>Corto</option>
                </select>
                <button>Enviar</button>
            </form>
        </div>
    )
}
export default PageRegistroAnimales