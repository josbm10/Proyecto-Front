import './modificar.css'
function PageModificarAnimales() {
    return (
        <div className='modificar_container'>
            <form action="">
                <input type="text" placeholder='Id' />
                <select>
                    <option selected hidden>Disponibilidad</option>
                    <option>Adoptado</option>
                    <option>No Adoptado</option>
                </select>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default PageModificarAnimales