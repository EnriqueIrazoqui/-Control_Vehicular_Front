import React from 'react'
import '../styles/styles2.css'
import { NavLink } from 'react-router-dom';


const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 3
        }}
    />
  );

export const DatosVehiculo = () => {
  return (
<div>
    <div className="title-datos-vehiculos">
        <h1 className="title1">Datos de los vehiculos</h1>
        <ColoredLine color="#33179c" />
    </div>

    <div className="contenedor-search">
        <label className="titulo-buscador" HtmlFor="search" >ID del vehiculo</label>
        <input  className="search-input" placeholder="Buscar vehiculo por ID" size="50" type="text" id="search-id" name="search-id"/><button >Buscar</button>
        <NavLink to="/NuevoVehiculo"><button className="boton-agregar" type="button"> Agregar</button></NavLink>
    </div>
    
    <div className="table-vehiculos">
    <table className="tabla-datos">
            <thead>
                <tr> 
                    <th>ID</th> 
                    <th>Campus</th> 
                    <th>Color</th>
                    <th>Tipo</th>
                    <th>Modelo</th>
                    <th>Placas</th>
                    <th>NO.Serie</th>
                    <th>Tipo de combustible</th>
                    <th>Actualizar</th>
                    <th>Borrar</th> 
                </tr>
            </thead>

        <tbody> 
            <tr> 
                <td>100</td> 
                <td>Zapopan</td> 
                <td>Negro</td>
                <td>Ranger</td> 
                <td>2012</td>
                <td>JW60261</td>
                <td>8AFDT50D546366847</td>
                <td>Diesel, gasolina</td>
                <td><button className="actualizar">Actualizar</button></td> 
                <td><button className="delete">Borrar</button></td>     
            </tr> 
        </tbody> 
    </table>
    </div>
</div>
  )
}
