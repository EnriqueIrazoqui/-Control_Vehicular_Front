import React from 'react'
import '../styles/styles1.css'
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

export const IndexVehiculos = () => {
  return (
    <div className="tittle-vehiculo">
    <h1 className="tittle-1">Panel de vehiculos</h1>
    <ColoredLine color="#33179c" />
    <ul className="enlaces">
        <li className='lista' ><NavLink to="/DatosVehiculo" className='boton'>Datos detallados de vehiculos</NavLink></li>
        <li className='lista'><a className='boton' href="#">Verificaciones vehiculares</a></li>
        <li className='lista'><a className='boton' href="#">Plan de mantenimiento</a></li>
        <li className='lista'><a className='boton' href="#">Seguros</a></li>
        <li className='lista'><a className='boton' href="#">Refrendos</a></li>
    </ul>
    </div>
  )
}
