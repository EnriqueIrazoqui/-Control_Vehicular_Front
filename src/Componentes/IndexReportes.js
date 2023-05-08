import React from 'react'
import '../styles/styles1.css'
const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 3
      }}
  />
);

export const IndexReportes = () => {
  return (
    <div className="tittle-vehiculo">
    <h1 className="tittle-1">Panel de reportes y bitacoras</h1>
    <ColoredLine color="#33179c" />
    <ul className="enlaces">
        <li className='lista'><a className='boton' href="datos-vehiculos.html">Generador de reportes</a></li>
        <li className='lista'><a className='boton' href="#">Bitacoras</a></li>
    </ul>
    </div>
  )
}
