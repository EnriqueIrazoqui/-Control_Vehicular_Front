import React from 'react'
import '../styles/stylesNuevo.css'
import { NavLink } from 'react-router-dom';

export const NuevoVehiculo = () => {
  return (
    <div className="contact_form">

    <div className="formulario">      
      <h1 className='tittle'>Nuevo vehiculo</h1>
          <form action="" method="post">       

            <div className="inputs">
                <p>
                  <label className='label' htmlFor="marca" >Marca</label>
                  <input className='input' type="text" name="marca" id="marca" required="obligatorio" placeholder="Nombre de la marca"/>
                </p>
                <p>
                  <label className='label' HtmlFor="modelo" >Modelo</label>
                  <input className='input' type="number" name="modelo" id="modelo" required="obligatorio" placeholder="ej. 2006"/>
                </p>
            </div>
            
                <p>
                  <label className='label' htmlFor="serie" >No. de serie</label>
                  <input className='input' type="text" name="serie" id="serie" required="obligatorio" placeholder="No. de serie del vehiculo"/>
                </p>    

            <div class="inputs">
                <p>
                    <label className='label' htmlFor="combustible">Tipo de combustible</label>
                    <input className='input' type="text" name="combustible" id="combustible" required="obligatorio" placeholder="ej. gasolina o diesel"/>
                  </p>    
                
                  <p>
                    <label className='label' htmlFor="placas" >Placas</label>
                    <input className='input' type="text" name="placas" id="placas" required="obligatorio" placeholder="Serie de placas"/>
                  </p>    
            </div>

            <div class="inputs">
                <p>
                    <label className='label' htmlFor="color" >Color</label>
                    <input className='input' type="text" name="color" id="color" required="obligatorio" placeholder="Color del vehiculo"/>
                  </p>    
                
                  <p>
                    <label className='label' htmlFor="campus" >Campus</label>
                      <input className='input' type="text" name="campus" id="campus" required="obligatorio" placeholder="Campus"/>
                  </p>    
            </div>
              
                <div class="botones">
                    <button className="boton-eliminar" type="reset" name="cancelar" id="cancelar"> <NavLink to="/DatosVehiculo"><p> Cancelar</p></NavLink></button>
                    <button className="boton-guardar" type="submit" name="enviar_formulario" id="enviar"><p>Guardar</p></button>           
                </div>
          </form>
    </div>  
  </div>
  )
}
