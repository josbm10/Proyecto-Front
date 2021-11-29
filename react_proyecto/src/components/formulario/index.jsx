import './formulario.css';

function PageFormulario(props) {
     const{children}=props;

  return (
    <div  className="formulario_container">
         <img src={require('../../assets/image/Dog1.jpg').default} alt="dog" />
        <h2>Formulario de adopcion</h2>
       <form >
            <input type="text" placeholder="Nombre" required/>
            <input type="text" placeholder="Apellido" required/>
            <input type="email" placeholder="Correo Electronico" required/>
            <input type="number" placeholder="Edad" min="0" required/>
            <select name="" id="" required >
                <option value='' hidden>Sexo </option>
                <option value="" style={{color:'black'}}>Femenino</option>
                <option value="" style={{color:'black'}}>Masculino</option>
            </select>
            <input type="text" placeholder="Direccion" required/>
            <select name="" id="" required>
                <option hidden >Horario para cita</option>
                <option value='' style={{color:'black'}}>9AM-10AM</option>
                <option value=""style={{color:'black'}}>10AM-11AM</option>
                <option value=""style={{color:'black'}}>11AM-12PM</option>
                <option value=""style={{color:'black'}}>1PM-2PM</option>
                <option value=""style={{color:'black'}}>2PM-3PM</option>
                <option value=""style={{color:'black'}}>3PM-4PM</option>
                <option value=""style={{color:'black'}}>4PM-5PM</option>
            </select>
            <button>Enviar</button>
        </form>
    </div>
  );
}

export default PageFormulario;